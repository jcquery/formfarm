const bcrypt = require('bcrypt-as-promised');
const knex = require('../knex');
const express = require('express');

const router = express.Router();

router.post('/user', (req, res, next) => {
  let farmId;
  const {
    firstName,
    lastName,
    email,
    password,
    farmName,
    farmPassword
  } = req.body;

  knex('users')
    .select(knex.raw('1=1'))
    .where('email', email)
    .first()
    .then((emailRes) => {
      if (emailRes) {
      const err = new Error('Email already exists.');
      err.status(400);

      throw err;
    }

    return knex('farms')
      .where('name', farmName)
      .first();
    })
    .then((farmRes) => {
      if (!farmRes) {
        const err = new Error('Invalid farm name or password.');
        err.status = 401;

        throw err;
      }
      farmId = farmRes.id;

      return bcrypt.compare(farmPassword, farmRes.hashed_password);
    })
    .then(() => bcrypt.hash(password, 12))
    .then((hashedPass) => {
      knex('users')
        .insert({
          first_name: firstName,
          last_name: lastName,
          email: email.toLowerCase(),
          hashed_password: hashedPass,
          farm_id: farmId
        });
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      const err = new Error('Invalid farm name or password.');

      err.status = 401;

      throw err;
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;

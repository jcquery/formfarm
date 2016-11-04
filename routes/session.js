'use strict';

const express = require('express');
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');

// eslint-disable-next-line new-cap
const router = express.Router();

// ***** joi vali
router.post('/session', (req, res, next) => {
  let { email } = req.body;
  const { password } = req.body;

  if (!email || email.trim() === '') {
    const err = new Error('Email must not be blank');

    err.status = 400;

    return next(err);
  }

  email = email.toLowerCase();

  if (!password || password.trim() === '') {
    const err = new Error('Password must not be blank');

    err.status = 400;

    return next(err);
  }

  let user;

  knex('users')
    .where('email', email)
    .first()
    .then((row) => {
      if (!row) {
        const err = new Error('Unauthorized');

        err.status = 401;

        throw err;
      }

      user = row;

      const hashed_password = user.hashed_password;

      return bcrypt.compare(password, hashed_password);
    })
    .then(() => {
      req.session.userId = user.id;
      res.cookie('loggedIn', true);
      res.sendStatus(200);
    })
    .catch(bcrypt.MISMATCH_ERROR, () => {
      const err = new Error('Unauthorized');

      err.status = 401;

      throw err;
    })
    .catch((err) => {
      next(err);
    });
});

router.delete('/session', (req, res, _next) => {
  delete req.session.userId;
  res.clearCookie('loggedIn');
  res.sendStatus(200);
});

module.exports = router;

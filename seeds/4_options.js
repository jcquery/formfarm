'use strict';

exports.seed = function(knex) {
  
  return knex('options').del()
    .then(() => {
      return knex('options').insert([
        {
          id: 1,
          name: 'Team Leader',
          type: 'text'
        },
        {
          id: 1,
          name: 'Location',
          type: 'text'
        },
        {
          id: 1,
          name: 'What workers are present in am?',
          type: 'text'
        },
        {
          id: 1,
          name: 'Are there new tools or procedures that need to be talked about?',
          type: 'text'
        },
        {
          id: 1,
          name: 'What are the hazards to be aware of?',
          type: 'text'
        },
        {
          id: 1,
          name: 'Personal protective equipment needed?',
          type: 'text'
        },
        {
          id: 1,
          name: 'When lifting heavy objects, the large muscles of the leg instead of the smaller muscles of the back shall be used.',
          type: 'text'
        },
        {
          id: 1,
          name: 'Inappropriate footwear or shoes with thin or badly worn soles shall not be worn.',
          type: 'text'
        },
        {
          id: 1,
          name: 'Safe practices for operating any agricultural equipment, including procedures for cleaning, repairing, servicing and adjusting.',
          type: 'text'
        },
        {
          id: 1,
          name: 'Electrical hazards',
          type: 'text'
        },
        {
          id: 1,
          name: 'Heat stress.',
          type: 'text'
        },
        {
          id: 1,
          name: 'Ergonomic hazards, including proper lifting techniques and working on ladders or in a stooped posture for prolonged periods at one time.',
          type: 'text'
        },
        {
          id: 1,
          name: 'Hazardous chemical exposures.',
          type: 'text'
        },
        {
          id: 1,
          name: 'Guarding of belts and pulleys, gears and sprockets, and conveyor nip points. ',
          type: 'text'
        },
        {
          id: 1,
          name: 'Machine, machine parts, and prime movers guarding.',
          type: 'text'
        },
        {
          id: 1,
          name: 'Lock-out/tag-out procedures.',
          type: 'text'
        },
        {
          id: 1,
          name: 'Materials handling. ',
          type: 'text'
        },
        {
          id: 1,
          name: 'Ergonomic hazards, including proper lifting techniques. ',
          type: 'text'
        },
        {
          id: 1,
          name: 'Noise',
          type: 'text'
        }

      ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('options_id_seq', (SELECT MAX(id) FROM options));"
      );
    });
};

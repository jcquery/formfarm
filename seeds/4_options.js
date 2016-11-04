'use strict';

exports.seed = function(knex) {

  return knex('options').del()
    .then(() => {
      return knex('options').insert([
        {
          id: 1,
          label: 'Team Leader',
          type: 'text'
        },
        {
          id: 2,
          label: 'Location',
          type: 'text'
        },
        {
          id: 3,
          label: 'What workers are present in am?',
          type: 'text'
        },
        {
          id: 4,
          label: 'Are there new tools or procedures that need to be talked about?',
          type: 'text'
        },
        {
          id: 5,
          label: 'What are the hazards to be aware of?',
          type: 'text'
        },
        {
          id: 6,
          label: 'Personal protective equipment needed?',
          type: 'text'
        },
        {
          id: 7,
          label: 'When lifting heavy objects, the large muscles of the leg instead of the smaller muscles of the back shall be used.',
          type: 'text'
        },
        {
          id: 8,
          label: 'Inappropriate footwear or shoes with thin or badly worn soles shall not be worn.',
          type: 'text'
        },
        {
          id: 9,
          label: 'Safe practices for operating any agricultural equipment, including procedures for cleaning, repairing, servicing and adjusting.',
          type: 'text'
        },
        {
          id: 10,
          label: 'Electrical hazards',
          type: 'text'
        },
        {
          id: 11,
          label: 'Heat stress.',
          type: 'text'
        },
        {
          id: 12,
          label: 'Ergonomic hazards, including proper lifting techniques and working on ladders or in a stooped posture for prolonged periods at one time.',
          type: 'text'
        },
        {
          id: 13,
          label: 'Hazardous chemical exposures.',
          type: 'text'
        },
        {
          id: 14,
          label: 'Guarding of belts and pulleys, gears and sprockets, and conveyor nip points. ',
          type: 'text'
        },
        {
          id: 15,
          label: 'Machine, machine parts, and prime movers guarding.',
          type: 'text'
        },
        {
          id: 16,
          label: 'Lock-out/tag-out procedures.',
          type: 'text'
        },
        {
          id: 17,
          label: 'Materials handling. ',
          type: 'text'
        },
        {
          id: 18,
          label: 'Ergonomic hazards, including proper lifting techniques. ',
          type: 'text'
        },
        {
          id: 19,
          label: 'Noise',
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

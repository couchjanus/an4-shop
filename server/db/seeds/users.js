const bcrypt = require('bcryptjs');

exports.seed = (knex, Promise) => {
  return knex('users').del()
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('ghbdtn', salt);
    return Promise.join(
      knex('users').insert({
        username: 'janus',
        firstName: 'Janus',
        lastName: 'Nic',
        password: hash
      })
    );
  })
  .then(() => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync('ghbdtn', salt);
    return Promise.join(
      knex('users').insert({
        username: 'admin',
        firstName: 'Charly',
        lastName: 'Root',
        password: hash,
        is_admin: true
      })
    );
  });
};

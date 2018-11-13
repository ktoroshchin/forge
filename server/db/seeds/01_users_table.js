const faker = require('faker')

exports.seed = function (knex, Promise) {
  return Promise.all([
    knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1'),
    knex('users')
      .del()
      .then(function () {
        for (let i = 0; i < 5; i++) {
          return knex('users').insert([
            { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password() },
            { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password() },
            { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password() },
            { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password() },
            { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password() },
          ]);
        };
      })
  ]);
};

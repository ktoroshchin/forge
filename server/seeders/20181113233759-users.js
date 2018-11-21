'use strict';
const faker = require('faker');
const bcrypt = require('bcrypt-nodejs');
const uuid = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('users', [
      { id: '7597283c-0a43-4be5-bc73-95280f3c0c5f', username: 'ForgeAdmin', first_name: 'Forge', last_name: 'Admin', email: 'forge-admin@forge.com', password: bcrypt.hashSync('admin-password') },
      { id: '865a8777-59cf-48d3-95d1-f20195912553', username: 'TheCreator', first_name: null, last_name: null, email: 'icreate94@gmail.com', password: bcrypt.hashSync('supersecure') },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

'use strict';
const bcrypt = require('bcrypt-nodejs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('users', [
      { id: '7597283c-0a43-4be5-bc73-95280f3c0c5f', username: 'ForgeAdmin', email: 'forge-admin@forge.com', password: bcrypt.hashSync('admin-password') },
      { id: '865a8777-59cf-48d3-95d1-f20195912553', username: 'TheCreator', email: 'icreate94@gmail.com', password: bcrypt.hashSync('supersecure') },
      { id: 'd276a825-9501-4ab3-a4c0-888011937571', username: 'Bahamut', email: 'bahamutEl@gmail.com', password: bcrypt.hashSync('bahamut') },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};

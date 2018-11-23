'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('world_maps', [
      {
        id: '40bd9d12-875d-4d85-9541-3af4631573c5',
        url: 'http://www.fantasticmaps.com/wp-content/uploads/2012/04/saemyyrfinalunlabelledwebpreview.jpg',
        world_id: '2fd0df5b-5623-497a-bb21-3d5d9144f618',
        height: 1800,
        width: 2700
      }, {
        id: '4b64f613-2cd6-4f4a-8ff5-35a991e73d4f',
        url: 'https://img00.deviantart.net/c948/i/2016/326/e/5/earth_world_map_blueprint_poster_by_turquoiserabbit-dap8yi8.png',
        world_id: '9a967301-3467-4197-9e5e-99769f4ba13b',
        height: 1067,
        width: 1600
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('world_maps', null, {});
  }
};

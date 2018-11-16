const { world } = require('../models');
const uuid = require('uuid/v4')

const worldAttributes = ['id', 'name', 'description', 'creator_id'];

module.exports = {
  Queries: {
    allWorlds: () => world.findAll({
      attributes: worldAttributes,
    }),
    findWorldById: (root, { id }) => world.findOne({
      where: { id: id },
      attributes: worldAttributes,
    }),
    findWorldByName: (root, { name }) => world.findOne({
      where: { name: name },
      attributes: worldAttributes,
    })
  },
  Mutations: {
    createNewWorld: (root, { name, creator_id, description }) => world.build({
      id: uuid(),
      name: name,
      creator_id: creator_id,
      description: description
    }).save()
  }
}
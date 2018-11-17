const { world } = require('../models');
const uuid = require('uuid/v4')

const worldAttributes = ['id', 'name', 'description', 'creator_id'];

module.exports = {
  Queries: {
    allWorlds: () => world.findAll({
      attributes: worldAttributes,
    }),
    findWorldById: (root, { id }) => world.findOne({
      where: { id },
      attributes: worldAttributes,
    }),
    findWorldByName: (root, { name }) => world.findOne({
      where: { name },
      attributes: worldAttributes,
    })
  },
  Mutations: {
    createNewWorld: (root, { name, creator_id, description }) => world.build({
      id: uuid(),
      name,
      creator_id,
      description
    }).save(),
    bulkEditMap: (root, { id, name, creator_id, description }) => world.update({
      id,
      name,
      creator_id,
      description 
    }, { where: { id } })
      .then(() => world.findOne({
        where: { id },
        attributes: worldAttributes,
      }))
  }
}
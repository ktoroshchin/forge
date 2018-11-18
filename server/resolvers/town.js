const { town } = require('../models');
const uuid = require('uuid/v4')

const townAttributes = ['id', 'world_id', 'name', 'population', 'government', 'description', 'map_id', 'latitude', 'longitude'];

module.exports = {
  Queries: {
    findTownById: (root, { id }) => town.findOne({
      where: { id },
      attributes: townAttributes,
    }),
    findTownsByWorldId: (root, { world_id }) => town.findAll({
      where: { world_id },
      attributes: townAttributes,
    }),
    findTownsByMapId: (root, { map_id }) => town.findAll({
      where: { map_id },
      attributes: townAttributes,
    })
  },
  Mutations: {
    createNewTown: (root, { world_id, name, population, government, description, map_id, latitude, longitude }) => town.build({
      id: uuid(),
      map_id,
      latitude,
      longitude,
      world_id,
      name,
      population,
      government,
      description,
    }).save(),
    bulkEditTown: (root, { id, name, population, government, description }) => town.update({
      name,
      population,
      government,
      description
    }, { where: { id } })
      .then(() => town.findOne({
        where: { id },
        attributes: townAttributes,
      }))
  }
}
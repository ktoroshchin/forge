const { town } = require('../models');
const uuid = require('uuid/v4')

const townAttributes = ['id', 'marker_id', 'world_id', 'name', 'population', 'government', 'description'];

module.exports = {
  Queries: {
    findTownById: (root, { id }) => town.findOne({
      where: { id: id },
      attributes: townAttributes,
    }),
    findTownsByWorldId: (root, { world_id }) => town.findAll({
      where: { world_id: world_id },
      attributes: townAttributes,
    }),
    findTownsByMarkerId: (root, { marker_id }) => town.findAll({
      where: { marker_id: marker_id },
      attributes: townAttributes,
    })
  },
  Mutations: {
    createNewTown: (root, { marker_id, world_id, name, population, government, description }) => town.build({
      id: uuid(),
      marker_id: marker_id,
      world_id: world_id,
      name: name,
      population: population,
      government: government,
      description: description,
    }).save()
  }
}
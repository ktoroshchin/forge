const { city } = require('../models');
const uuid = require('uuid/v4')

const cityAttributes = ['id', 'marker_id', 'world_id', 'name', 'population', 'government', 'description'];

module.exports = {
  Queries: {
    findCityById: (root, { id }) => city.findOne({
      where: { id },
      attributes: cityAttributes,
    }),
    findCitiesByWorldId: (root, { world_id }) => city.findAll({
      where: { world_id },
      attributes: cityAttributes,
    }),
    findCitiesByMarkerId: (root, { marker_id }) => city.findAll({
      where: { marker_id },
      attributes: cityAttributes,
    })
  },
  Mutations: {
    createNewCity: (root, { marker_id, world_id, name, population, government, description }) => city.build({
      id: uuid(),
      marker_id,
      world_id,
      name,
      population,
      government,
      description,
    }).save()
  }
}
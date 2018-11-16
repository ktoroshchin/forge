const { city } = require('../models');
const uuid = require('uuid/v4')

const cityAttributes = ['id', 'marker_id', 'world_id', 'name', 'population', 'government', 'description'];

module.exports = {
  Queries: {
    findCityById: (root, { id }) => city.findOne({
      where: { id: id },
      attributes: cityAttributes,
    }),
    findCitiesByWorldId: (root, { world_id }) => city.findAll({
      where: { world_id: world_id },
      attributes: cityAttributes,
    }),
    findCitiesByMarkerId: (root, { marker_id }) => city.findAll({
      where: { marker_id: marker_id },
      attributes: cityAttributes,
    })
  },
  Mutations: {
    createNewCity: (root, { marker_id, world_id, name, population, government, description }) => city.build({
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
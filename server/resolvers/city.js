const { city } = require('../models');
const uuid = require('uuid/v4')

const cityAttributes = ['id', 'world_id', 'name', 'population', 'government', 'description', 'map_id', 'latitude', 'longitude'];

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
    findCitiesByMapId: (root, { map_id }) => city.findAll({
      where: { map_id },
      attributes: cityAttributes,
    })
  },
  Mutations: {
    createNewCity: (root, { world_id, name, population, government, description, map_id, latitude, longitude }) => city.build({
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
    bulkEditCity: (root, { id, name, population, government, description }) => city.update({
      name,
      population,
      government,
      description
    }, { where: { id } })
      .then(() => city.findOne({
        where: { id },
        attributes: cityAttributes,
      }))
  }
}
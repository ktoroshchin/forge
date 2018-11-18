const { location } = require('../models');
const uuid = require('uuid/v4')

const locationAttributes = ['id', 'world_id', 'name', 'description', 'map_id', 'latitude', 'longitude'];

module.exports = {
  Queries: {
    findLocationById: (root, { id }) => location.findOne({
      where: { id },
      attributes: locationAttributes,
    }),
    findLocationsByWorldId: (root, { world_id }) => location.findAll({
      where: { world_id },
      attributes: locationAttributes,
    }),
    findLocationsByMapId: (root, { map_id }) => location.findAll({
      where: { map_id },
      attributes: locationAttributes,
    })
  },
  Mutations: {
    createNewLocation: (root, { world_id, name, description, map_id, latitude, longitude }) => location.build({
      id: uuid(),
      map_id,
      world_id,
      name,
      description,
      longitude,
      latitude
    }).save(),
    bulkEditLocation: (root, { id, name, description }) => location.update({
      name,
      description
    }, { where: { id } })
      .then(() => location.findOne({
        where: { id },
        attributes: locationAttributes,
      })),
      placeLocationOnMap: (root, { id, map_id, longitude, latitude }) => location.update({
        map_id,
        longitude,
        latitude
      }, { where: { id } })
        .then(() => location.findOne({
          where: { id },
          attributes: locationAttributes,
        })),
  }
}
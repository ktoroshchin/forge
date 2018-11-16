const { location } = require('../models');
const uuid = require('uuid/v4')

const locationAttributes = ['id', 'marker_id', 'world_id', 'name', 'description'];

module.exports = {
  Queries: {
    findLocationById: (root, { id }) => location.findOne({
      where: { id: id },
      attributes: locationAttributes,
    }),
    findLocationsByWorldId: (root, { world_id }) => location.findAll({
      where: { world_id: world_id },
      attributes: locationAttributes,
    }),
    findLocationsByMarkerId: (root, { marker_id }) => location.findAll({
      where: { marker_id: marker_id },
      attributes: locationAttributes,
    })
  },
  Mutations: {
    createNewLocation: (root, { marker_id, world_id, name, description }) => location.build({
      id: uuid(),
      marker_id: marker_id,
      world_id: world_id,
      name: name,
      description: description,
    }).save()
  }
}
const { marker } = require('../models');
const uuid = require('uuid/v4')

const markerAttributes = ['id', 'map_id', 'latitude', 'longitude'];

module.exports = {
  Queries: {
    findMarkerById: (root, { id }) => marker.findOne({
      where: { id: id },
      attributes: markerAttributes,
    }),
    findMarkersByMapId: (root, { map_id }) => marker.findAll({
      where: { map_id: map_id },
      attributes: markerAttributes,
    })
  },
  Mutations: {
    createNewMarker: (root, { map_id, latitude, longitude }) => marker.build({
      id: uuid(),
      map_id: map_id,
      latitude: latitude,
      longitude: longitude
    }).save()
  }
}
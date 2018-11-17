const { marker } = require('../models');
const uuid = require('uuid/v4')

const markerAttributes = ['id', 'map_id', 'latitude', 'longitude'];

module.exports = {
  Queries: {
    findMarkerById: (root, { id }) => marker.findOne({
      where: { id },
      attributes: markerAttributes,
    }),
    findMarkersByMapId: (root, { map_id }) => marker.findAll({
      where: { map_id },
      attributes: markerAttributes,
    })
  },
  Mutations: {
    createNewMarker: (root, { map_id, latitude, longitude }) => marker.build({
      id: uuid(),
      map_id,
      latitude,
      longitude
    }).save(),
    bulkEditMarker: (root, { id, map_id, latitude, longitude }) => marker.update({
      id,
      map_id,
      latitude,
      longitude
    }, { where: { id } })
      .then(() => marker.findOne({
        where: { id },
        attributes: markerAttributes,
      }))
  }
}
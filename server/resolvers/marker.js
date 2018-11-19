const { city, town, location } = require('../models');

module.exports = {
  Queries: {
  },
  Mutations: {
    removeMarkerById: async (root, { id }) => {
      let remove = await city.findOne({ where: { id } });
      if (!remove) {
        remove = await town.findOne({ where: { id } });
        if (!remove) {
          remove = await location.findOne({ where: { id } });
        }
      }
      remove.update({
        map_id: null,
        longitude: null,
        latitude: null
      });
    },
    removeAllMarkersOnMap: (root, { map_id }) => {
      city.update({
        map_id: null,
        longitude: null,
        latitude: null
      }, { where: { map_id } });
      town.update({
        map_id: null,
        longitude: null,
        latitude: null
      }, { where: { map_id } });
      location.update({
        map_id: null,
        longitude: null,
        latitude: null
      }, { where: { map_id } });

    }
  }
}
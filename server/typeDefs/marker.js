const queryType = ``;

const mutationType = `
  removeMarkerById(id: ID!): MapMarker
  removeAllMarkersOnMap(map_id: ID!): Map`;

const modelType = ``;

module.exports = { queryType, mutationType, modelType }
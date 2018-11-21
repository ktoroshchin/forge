const queryType = `
  findMarkers(world_id: ID, id: ID, map_id: ID, category: String): [Marker!]`;

const mutationType = `
  createNewMarker(category: String!, world_id: ID!, name: String!, population: Int, government: String, description: String, map_id: ID, latitude: Float, longitude: Float): Marker!
  editMarkerInfo(id: ID!, name: String, population: Int, government: String, description: String): Marker!
  placeMarkerOnMap(id: ID!, map_id: ID!, latitude: Float!, longitude: Float!): Marker!
  removeMarkerById(id: ID!): Marker
  removeAllMarkersOnMap(map_id: ID!): Map`;

const modelType = `
  type Marker {
    id: ID!
    category: String!
    world_id: ID!
    map_id: ID
    latitude: Float
    longitude: Float
    name: String!
    population: Int
    government: String
    description: String
  }`;

module.exports = { queryType, mutationType, modelType }
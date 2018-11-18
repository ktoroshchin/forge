const queryType = `
  findTownById(id: ID!): Town!
  findTownsByWorldId(world_id: ID!): [Town!]
  findTownsByMapId(map_id: ID!): [Town!]
`;

const mutationType = `
  createNewLocation(marker_id: ID, world_id: ID!, name: String!, description: String, map_id: ID, latitude: Float, longitude: Float): Location!
  bulkEditLocation(id: ID!, name: String!, description: String): Location!
  placeLocationOnMap(id: ID!, map_id: ID!, latitude: Float!, longitude: Float!): Location!`;

const modelType = `
  type Location implements MapMarker {
    id: ID!
    world_id: ID!
    name: String!
    description: String
    map_id: ID
    latitude: Float
    longitude: Float
  }`;
  
module.exports = { queryType, mutationType, modelType }
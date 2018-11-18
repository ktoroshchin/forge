const queryType = `
  findLocationById(id: ID!): Location!
  findLocationsByWorldId(world_id: ID!): [Location!]
  findLocationsByMapId(map_id: ID!): [Location!]
`;

const mutationType = `
  createNewTown(marker_id: ID, world_id: ID!, name: String!, population: Int, government: String, description: String, map_id: ID, latitude: Float, longitude: Float): Town!
  bulkEditTown(id: ID!, name: String!, population: Int, government: String, description: String): Town!

const modelType = `
  type Town implements MapMarker {
    id: ID!
    map_id: ID
    latitude: Float
    longitude: Float
    world_id: ID!
    name: String!
    population: Int
    government: String
    description: String
  }`;
  
module.exports = { queryType, mutationType, modelType }
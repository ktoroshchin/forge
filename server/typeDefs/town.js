const queryType = `
  findLocationById(id: ID!): Location!
  findLocationsByWorldId(world_id: ID!): [Location!]
  findLocationsByMarkerId(marker_id: ID!): [Location!]
`;

const mutationType = `
  createNewTown(marker_id: ID, world_id: ID!, name: String!, population: Int, government: String, description: String): Town!
  bulkEditTown(id: ID!, name: String!, population: Int, government: String, description: String): Town!`;

const modelType = `
  type Town implements MapMarker {
    id: ID!
    marker_id: ID
    world_id: ID!
    name: String!
    population: Int
    government: String
    description: String
  }`;
  
module.exports = { queryType, mutationType, modelType }
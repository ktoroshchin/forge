const queryType = `
  findCityById(id: ID!): City!
  findCitiesByWorldId(world_id: ID!): [City!]
  findCitiesByMarkerId(marker_id: ID!): [City!]
`;

const mutationType = `
  createNewCity(marker_id: ID, world_id: ID!, name: String!, population: Int, government: String, description: String): City!
  bulkEditCity(id: ID!, name: String!, population: Int, government: String, description: String): City!`;

const modelType = `
  type City implements MapMarker {
    id: ID!
    marker_id: ID
    world_id: ID!
    name: String!
    population: Int
    government: String
    description: String
  }`;
  
module.exports = { queryType, mutationType, modelType }
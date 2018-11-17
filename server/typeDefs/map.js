const queryType = `
  findMapById(id: ID!): Map!
  findMapsByWorldId(world_id: ID!): [Map!]`;

const mutationType = `
  createNewMap(world_id: ID!, url: String!, world_map: Boolean!, width: Int!, height: Int!): Map!
  bulkEditMap(id: ID!, world_id: ID!, url: String!, width: Int!, height: Int!, world_map: Boolean!): Map!`;

const modelType = `
  type Map {
    id: ID!
    world_id: ID!
    url: String!
    width: Int!
    height: Int!
    world_map: Boolean!
  }`;
  
module.exports = { queryType, mutationType, modelType }
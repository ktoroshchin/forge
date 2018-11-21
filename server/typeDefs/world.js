const queryType = `
  findWorlds(id: ID, creator_id: ID, name: String): [World!]`;

const mutationType = `
  createNewWorld(name: String!, creator_id: ID!, description: String): World!
  bulkEditWorld(id: ID!, name: String, creator_id: ID!, description: String): World!`;

const modelType = `
  type World {
    id: ID!
    name: String!
    description: String
    creator_id: ID!
    maps: [Map!]
    markers: [Marker!]
  }`;
  
module.exports = { queryType, mutationType, modelType }
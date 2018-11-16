const queryType = `
  findTownById(id: ID!): Town!
  findTownsByWorldId(world_id: ID!): [Town!]
  findTownsByMarkerId(marker_id: ID!): [Town!]
`;

const mutationType = `
  createNewLocation(marker_id: ID, world_id: ID!, name: String!, description: String): Location!`;

const modelType = `
  type Location implements MapMarker {
    id: ID!
    marker_id: ID
    world_id: ID!
    name: String!
    description: String
  }`;
  
module.exports = { queryType, mutationType, modelType }
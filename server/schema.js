const typeDefs = `
  type Query {
    allUsers: [User!]!
    findUserById(id: ID!): User!
    allWorlds: [World!]!
    findWorldById(id: ID!): World!
    findWorldByName(name: String!): World!
  }
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
  }
  type World {
    id: ID!
    name: String!
    description: String!
    creator_id: ID!
  }
`;

module.exports = typeDefs
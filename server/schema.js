const typeDefs = `
  type Query {
    allUsers: [User!]!
    findUserById(id: ID!): User!
    allWorlds: [World!]!
    findWorldById(id: ID!): World!
    findWorldByUsername(username: String!): World!
  }

  type Mutation {
    createNewWorld(name: String!, creator_id: ID!): World!
    createNewUser(username: String!, email: String!, password: String!): User!
  }

  type User {
    id: ID!
    first_name: String
    last_name: String
    username: String!
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
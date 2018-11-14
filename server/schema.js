const typeDefs = `
  type Query {
    allUsers: [User!]!
    findUserById(id: ID!): User!
    allWorlds: [World!]!
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
    user_id: ID!
  }
`;

module.exports = typeDefs
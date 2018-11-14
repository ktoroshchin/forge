const typeDefs = `
  type Query {
    allUsers: [User!]!
    findUserById(id: ID!): User!
  }
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
  }
`;

module.exports = typeDefs
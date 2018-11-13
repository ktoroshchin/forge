const typeDefs = `
  type Query {
    allUsers: [User!]!
    findUserById(id: Int!): User!
  }
  type User {
    id: Int!
    first_name: String!
    last_name: String!
    email: String!
  }
`;

module.exports = typeDefs
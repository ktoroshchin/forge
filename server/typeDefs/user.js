const queryType = `
  allUsers: [User!]!
  findUserById(id: ID!): User!`;

const mutationType = `
  createNewUser(username: String!, email: String!, password: String!, first_name: String, last_name: String): User!`;

const modelType = `
  type User {
    id: ID!
    first_name: String
    last_name: String
    username: String!
    email: String!
  }`;
  
module.exports = { queryType, mutationType, modelType }
const queryType = ``;

const mutationType = `
  login(username: String!, password: String!): User!`;

const modelType = `
  type Login {
    id: ID
  }`;

module.exports = { queryType, mutationType, modelType }
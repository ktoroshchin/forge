const queryType = ``;

const mutationType = `
  login(username: String!, password: String!): Login!`;

const modelType = `
type Login {
  user_id: ID
  error: String
}`;

module.exports = { queryType, mutationType, modelType }
const { user } = require('../models');
const uuid = require('uuid/v4')

const userAttributes = ['id', 'first_name', 'last_name', 'email', 'username'];

module.exports = {
  Queries: {
    allUsers: () => user.findAll({
      attributes: userAttributes,
    }),
    findUserById: (root, { id }) => user.findOne({
      where: { id: id },
      attributes: userAttributes,
    }),
    login: (root, { username, password }) => user.findOne({
      where: { username, password },
      attributes: userAttributes
    })
  },
  Mutations: {
    createNewUser: (root, { username, email, password, first_name, last_name }) => user.build({
      id: uuid(),
      username: username,
      email: email,
      password: password, //(NEED TO ENCRYPT THE PASSWORD)
      first_name: first_name,
      last_name: last_name
    }).save()
  }
}
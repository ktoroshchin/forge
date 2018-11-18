const { user } = require('../models');
const bcrypt = require('bcrypt-nodejs');
const uuid = require('uuid/v4')

const userAttributes = ['id', 'first_name', 'last_name', 'email', 'username'];

module.exports = {
  Queries: {
    allUsers: () => user.findAll({
      attributes: userAttributes,
    }),
    findUserById: (root, { id }) => user.findOne({
      where: { id },
      attributes: userAttributes,
    })
  },
  Mutations: {
    createNewUser: (root, { username, email, password, first_name, last_name }) => user.build({
      id: uuid(),
      username,
      email,
      password, //(NEED TO ENCRYPT THE PASSWORD)
      first_name,
      last_name
    }).save(),
    bulkEditUser: (root, { id, password, first_name, last_name }) => user.update({
      id,
      first_name,
      last_name
    }, { where: { id, password } })
      .then(() => user.findOne({
        where: { id, password },
        attributes: userAttributes,
      })),
    login: async (root, { username, password }) => {
      const foundUser = await user.findOne({ where: { username } });

      if (await bcrypt.compareSync(password, foundUser.dataValues.password))
        return { user_id: foundUser.dataValues.id };
      else
        return { error: 'Wrong login credentials' };
    }
  }
}
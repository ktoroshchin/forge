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
      password: bcrypt.hashSync(password),
      first_name,
      last_name
    }).save(),
    bulkEditUser: async (root, { id, password, first_name, last_name }) => {
      const foundUser = await user.findOne({ where: { id } });

      if (await bcrypt.compareSync(password, foundUser.dataValues.password)) {
        user.update({
          first_name,
          last_name
        }, { where: { id } })
      } else {
        throw new Error('UserEdit error: Wrong password')
      }
      return user.findOne({ where: { id } });
    },
    login: async (root, { username, password }) => {
      const foundUser = await user.findOne({ where: { username } });

      if (await bcrypt.compareSync(password, foundUser.dataValues.password))
        return { user_id: foundUser.dataValues.id };
      else
        throw new Error('Wrong login credentials');
    }
  }
}
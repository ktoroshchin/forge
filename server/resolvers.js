const Models = require('./models');

const userAttributes = ['id', 'first_name', 'last_name', 'email'];
const worldAttributes = ['id', 'name', 'description', 'creator_id'];

module.exports = {
  Query: {
    allUsers: () => Models.user.findAll({
      attributes: userAttributes,
    }),
    allWorlds: () => Models.world.findAll({
      attributes: worldAttributes,
    }),
    findUserById: (root, { id }) => Models.user.findOne({
      where: { id: id },
      attributes: userAttributes,
    }),
    findWorldById: (root, { id }) => Models.world.findOne({
      where: { id: id },
      attributes: worldAttributes,
    }),
    findWorldByName: (root, { name }) => Models.world.findOne({
      where: { name: name },
      attributes: worldAttributes,
    }),
  }
}
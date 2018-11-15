const Models = require('./models');

module.exports = {
  Query: {
    allUsers: () => Models.user.findAll({
      attributes: ['id', 'first_name', 'last_name', 'email']
    }),
    allWorlds: () => Models.world.findAll({
      attributes: ['id', 'name', 'description', 'creator_id']
    }),
    findUserById: (root, args) => Models.user.findOne({
      where: { id: args.id },
      attributes: ['id', 'first_name', 'last_name', 'email']
    }),
    findWorldById: (root, args) => Models.world.findOne({
      where: { id: args.id },
      attributes: ['id', 'name', 'description', 'creator_id']
    }),
    findWorldByName: (root, args) => Models.world.findOne({
      where: { name: args.name },
      attributes: ['id', 'name', 'description', 'creator_id']
    }),
  }
}
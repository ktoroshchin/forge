const Models = require('./models');

module.exports = {
  Query: {
    allUsers: () => Models.user.findAll({
      attributes: ['id', 'first_name', 'last_name', 'email']
    }),
    findUserById: (root, args) => Modles.user.findOne({
      where: { id: args.id },
      attributes: ['id', 'first_name', 'last_name', 'email']
    }),
  }
}
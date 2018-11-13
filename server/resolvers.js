const { user } = require('./dbIndex');

module.exports = {
  Query: {
    allUsers: () => user.findAll({
      attributes: ['id', 'first_name', 'last_name', 'email']
    }),
    findUserById: (root, args) => user.findOne({
      where: { id: args.id },
      attributes: ['id', 'first_name', 'last_name', 'email']
    }),
  }
}
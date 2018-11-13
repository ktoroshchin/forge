const { user } = require('./db_index');

module.exports = {
  Query: {
    allUsers: () => user.findAll({attributes: ['id', 'first_name', 'last_name', 'email']})
  }
}
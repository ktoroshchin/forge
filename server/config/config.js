require('dotenv').config();

module.exports = {
  development: {
    use_env_variable: "DB_URL",
    dialect: 'postgres',
    operatorsAliases: false,
    define: {
      underscored: true,
    }
  },
}
const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'user', 'pass', {
    dialect: 'mysql',
    host: 'localhost'
  });

  module.exports = sequelize;

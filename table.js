const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Produtos = sequelize.define('produtos', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  codprod: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: false
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
});

//Produtos.sync();

module.exports = Produtos;

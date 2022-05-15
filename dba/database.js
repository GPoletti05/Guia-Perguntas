const sequelize = require('sequelize');

const connection = new sequelize('guiaperguntas', 'root', 'admin',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
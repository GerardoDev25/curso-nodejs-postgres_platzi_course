const { Sequelize } = require('sequelize');
const { config } = require('../congif/config');
const { setupModels } = require('../db/model');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// const sequelize = new Sequelize(URI, { dialect: 'mysql', logging: console.log });
const sequelize = new Sequelize(URI, { dialect: 'postgres', logging: console.log });

setupModels(sequelize);
// sequelize.sync()

module.exports = { sequelize };

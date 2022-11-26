const { Pool } = require('pg');
const { config } = require('../congif/config');

let URL = '';

if (config.isProd) {
  URL = config.dbUrl;
} else {
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);

  URL = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
}

const options = {
  connectionString: URL,
};

if (config.isProd) {
  options.ssl = {
    rejectUnauthorized: false,
  };
}

const pool = new Pool(options);

module.exports = { pool };

// const boom = require('@hapi/boom');
// const { pool } = require('../libs/postgres-pool');
const { sequelize } = require('./../libs/sequalize');

class UserService {
  constructor() {
    // this.pool = pool;
    // this.pool.on('error', console.error);
  }

  async create(data) {
    return data;
  }

  async find() {
    const rta = await sequelize.models.User.findAll();
    return rta;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;

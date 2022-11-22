const Boom = require('@hapi/boom');
const { sequelize } = require('./../libs/sequalize');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await sequelize.models.User.create(data);
    return newUser;
  }

  async find() {
    const rta = await sequelize.models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) {
      throw Boom.notFound('user not fond');
    }
    return user;
  }

  async update(id, changes) {
    const user = await this.findOne(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await this.findOne(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;

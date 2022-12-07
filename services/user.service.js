const Boom = require('@hapi/boom');
const bcryptjs = require('bcryptjs');
const { sequelize } = require('./../libs/sequalize');

class UserService {
  constructor() {}

  async create(data) {
    const hash = await bcryptjs.hash(data.password, 10);
    const newUser = await sequelize.models.User.create({ ...data, password: hash });

    delete newUser.dataValues.password
    return newUser;
  }

  async find() {
    const rta = await sequelize.models.User.findAll({
      include: ['customer'],
    });
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

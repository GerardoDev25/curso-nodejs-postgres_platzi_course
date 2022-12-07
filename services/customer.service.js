const boom = require('@hapi/boom');
const bcryptjs = require('bcryptjs');
const { sequelize } = require('./../libs/sequalize');

class CustomerService {
  constructor() {}

  async find() {
    const rta = await sequelize.models.Customer.findAll({ include: ['user'] });
    return rta;
  }

  async findOne(id) {
    const user = await sequelize.models.Customer.findByPk(id);
    if (!user) {
      throw boom.notFound('customer not found');
    }
    return user;
  }

  async create(data) {
    const hash = await bcryptjs.hash(data.user.password, 10);

    const newCustomer = await sequelize.models.Customer.create(
      {
        ...data,
        user: {
          ...data.user,
          password: hash,
        },
      },
      { include: ['user'] }
    );
    delete newCustomer.dataValues.user.password
    return newCustomer;
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = await model.update(changes);
    return rta;
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }
}
module.exports = { CustomerService };

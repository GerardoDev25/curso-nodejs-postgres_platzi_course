// const boom = require('@hapi/boom');

const { sequelize } = require('../libs/sequalize');

class OrderService {
  constructor() {}
  async create(data) {
    const newOrder = await sequelize.models.Order.create(data);
    return newOrder;
  }

  async addItem(data) {
    const newItem = await sequelize.models.OrderProduct.create(data);
    return newItem;
  }

  async find() {
    return [];
  }
  async findByUser(userId) {
    const orders = await sequelize.models.Order.findAll({
      where: {
        '$customer.user.id$': userId,
      },
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
        'items',
      ],
    });
    return orders;
  }

  async findOne(id) {
    const order = await sequelize.models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user'],
        },
        'items',
      ],
    });
    return order;
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

module.exports = OrderService;

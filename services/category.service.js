const boom = require('@hapi/boom');
const { sequelize } = require('../libs/sequalize');
class CategoryService {
  constructor() {}
  async create(data) {
    const newCategory = await sequelize.models.Category.create(data);
    return newCategory;
  }

  async find() {
    const categories = await sequelize.models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await sequelize.models.Category.findByPk(id, {
      include: ['products'],
    });
    return category;
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

module.exports = CategoryService;

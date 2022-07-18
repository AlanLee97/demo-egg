class BaseCRUD {
  model = null;
  constructor(model) {
    this.model = model;
  }
  async getAll() {
    return await this.model.findAll();
  }

  async getById(id) {
    return await this.model.findAll({
      where: { id },
    });
  }

  async add(obj) {
    return await this.model.create(obj);
  }

  async update(obj) {
    return await this.model.update(obj, { where: { id: +obj.id } });
  }

  async delete(id) {
    return await this.model.destroy({ where: { id } });
  }
}

module.exports = BaseCRUD;

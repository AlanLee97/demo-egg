const { Service } = require('egg');
const UserModel = require('../model/UserModel');
const BaseCRUD = require('../db/BaseCRUD');

class UserService extends Service {
  constructor(ctx) {
    super(ctx);
    this.userBaseCURD = new BaseCRUD(UserModel);
  }
  async create() {
    console.log('UserService.create');
  }
  async getAllUser() {
    return await this.userBaseCURD.getAll();
  }
  async getUserById(id) {
    return await this.userBaseCURD.getById(id);
  }

  async addUser(user) {
    return await this.userBaseCURD.add(user);
  }

  async updateUser(user) {
    return await this.userBaseCURD.update(user);
  }

  async deleteUser(id) {
    return await this.userBaseCURD.delete(id);
  }
}

module.exports = UserService;

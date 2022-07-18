'use strict';

const Controller = require('egg').Controller;
const UserService = require('../service/UserService');

class HomeController extends Controller {
  userService = null;
  init(ctx) {
    this.userService = new UserService(ctx);
  }
  async index() {
    const { ctx } = this;
    this.init(ctx);
    await this.userService.getAllUser().then(res => {
      console.log(res);
      ctx.body = {
        res,
        csrf: ctx.csrf,
      };
    }).catch(err => {
      console.error(err);
      ctx.body = err;
    });
  }

  async getUserById() {
    const { ctx } = this;
    this.init(ctx);
    await this.userService.getUserById(ctx.params.id).then(res => {
      console.log(res);
      ctx.body = res;
    }).catch(err => {
      console.error(err);
      ctx.body = err;
    });
  }

  async addUser() {
    const { ctx } = this;
    this.init(ctx);
    console.log('ctx', ctx.request.body);
    const { username, password } = ctx.request.body;
    await this.userService.addUser({ username, password }).then(res => {
      ctx.body = res;
    }).catch(err => {
      ctx.body = err;
    });

  }

  async updateUser() {
    const { ctx } = this;
    this.init(ctx);
    const { id, username, password } = ctx.request.body;
    await this.userService.updateUser({ id, username, password }).then(res => {
      ctx.body = res;
    }).catch(err => {
      ctx.body = err;
    });

  }

  async deleteUser() {
    const { ctx } = this;
    this.init(ctx);
    console.log('deleteUser id', ctx.request.body.id);
    await this.userService.deleteUser(ctx.request.body.id).then(res => {
      ctx.body = res;
    }).catch(err => {
      ctx.body = err;
    });
  }

}

module.exports = HomeController;

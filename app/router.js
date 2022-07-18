'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user/:id', controller.home.getUserById);
  router.post('/user/add', controller.home.addUser);
  router.put('/user/update', controller.home.updateUser);
  router.delete('/user/delete', controller.home.deleteUser);
};

const { Router } = require('express');

const { AuthMiddleware } = require('../middlewares');

module.exports = function({ UserController }) {
  const router = Router();

  router.get('/', [AuthMiddleware], UserController.index);
  router.get('/:userId', UserController.show);
  router.patch('/:userId', UserController.update);
  router.delete('/:userId', UserController.delete);

  return router;
}


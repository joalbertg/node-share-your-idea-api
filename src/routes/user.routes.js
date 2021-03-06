const { Router } = require('express');

const {
  AuthMiddleware,
  ParseIntMiddleware,
  CacheMiddleware
} = require('../middlewares');
const { CacheTime } = require('../helpers');

module.exports = function({ UserController }) {
  const router = Router();

  router.get('/', [ParseIntMiddleware, CacheMiddleware(CacheTime.ONE_HOUR)], UserController.index);
  router.get('/:userId', UserController.show);
  router.patch('/:userId', [AuthMiddleware], UserController.update);
  router.delete('/:userId', [AuthMiddleware], UserController.delete);

  return router;
}


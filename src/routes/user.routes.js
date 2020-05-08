const { Router } = require('express');

module.exports = function({ UserController }) {
  const router = Router();

  router.get('/', UserController.index);
  router.get('/:userId', UserController.show);
  router.patch('/:userId', UserController.update);
  router.delete('/:userId', UserController.delete);

  return router;
}


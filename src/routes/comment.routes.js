
const { Router } = require('express');

const { AuthMiddleware } = require('../middlewares');

module.exports = function({ CommentController }) {
  const router = Router();

  router.get('/:commentId/unique', CommentController.show);
  router.get('/:ideaId', CommentController.getIdeaComments);
  router.post('/:ideaId', [AuthMiddleware], CommentController.createComments);
  router.patch('/:commentId', [AuthMiddleware], CommentController.update);
  router.delete('/:commentId', [AuthMiddleware], CommentController.delete);

  return router;
}


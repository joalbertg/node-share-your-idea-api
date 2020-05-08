
const { Router } = require('express');

module.exports = function({ CommentController }) {
  const router = Router();

  router.get('/:ideaId', CommentController.getIdeaComments);
  router.post('/:ideaId', CommentController.createComments);
  router.get('/:commentId/unique', CommentController.show);
  router.patch('/:commentId', CommentController.update);
  router.delete('/:commentId', CommentController.delete);

  return router;
}


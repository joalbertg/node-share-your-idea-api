
const { Router } = require('express');

module.exports = function({ IdeaController }) {
  const router = Router();

  router.get('/', IdeaController.index);
  router.get('/:ideaId', IdeaController.show);
  router.get('/:userId/index', IdeaController.getUserIdeas);
  router.post("/", IdeaController.create);
  router.patch('/:ideaId', IdeaController.update);
  router.delete('/:ideaId', IdeaController.delete);
  router.post('/:ideaId/upvote', IdeaController.upvoteIdea);
  router.post('/:ideaId/downvote', IdeaController.downvoteIdea);

  return router;
}


let _commentService = null;

class CommentController {
  constructor({ CommentService }) {
    _commentService = CommentService;
  }

  async show(req, res) {
    const { commentId } = req.params;
    const comment = await _commentService.show(commentId);

    return res.send(comment);
  }

  async createComments(req, res) {
    const { body } = req;
    const { ideaId }  = req.params;
    const { id: userId } = req.user;
    const newComment = await _commentService.createComment(body, ideaId, userId);

    return res.status(201).send(newComment);
  }

  async update(req, res) {
    const { body } = req;
    const { commentId } = req.params;
    const updateComment = await _commentService.update(commentId, body);

    return res.send(updateComment);
  }

  async delete(req, res) {
    const { commentId } = req.params;
    const deletedComment = await _commentService.delete(commentId);

    return res.send(deletedComment);
  }

  async getIdeaComments(req, res) {
    const { ideaId } = req.params;
    const comments = await _commentService.getIdeaComments(ideaId);

    return res.send(comments);
  }
}

module.exports = CommentController;


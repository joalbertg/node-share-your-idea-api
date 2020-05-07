let _commentService = null;

class CommentController {
  constructor({ CommentService }) {
    _commentService = CommentService;
  }

  async show(req, res) {
    const { CommentId } = req.params;
    const comment = await _commentService.show(userId);

    return res.send(comment);
  }

  async create(req, res) {
    const { body } = req.params;
    const ideaId = req.params;
    const newComment = await _commentService.create(body, ideaId);

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


class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async index(pageSize, pageNum) {
    return await this.repository.index(pageSize, pageNum);
  }

  async show(id) {
    if(!id) {
      const error = new Error();
      error.status = 400;
      error.message = 'id must be send.';

      throw error;
    }

    const currentEntity = await this.repository.show(id);

    if(!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = 'entity does not found.';

      throw error;
    }

    return currentEntity;
  }

  async create(entity) {
    return await this.repository.create(entity);
  }

  async update(id, entity) {
    if(!id) {
      const error = new Error();
      error.status = 400;
      error.message = 'id must be send.';

      throw error;
    }

    return await this.repository.update(id, entity);
  }

  async delete(id) {
    if(!id) {
      const error = new Error();
      error.status = 400;
      error.message = 'id must be send.';

      throw error;
    }

    return await this.repository.delete(id);
  }
}

module.exports = BaseService;


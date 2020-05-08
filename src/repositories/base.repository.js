class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async index(pageSize = 5, pageNum = 1) {
    const skips = pageSize * (pageNum - 1);
    return await this.model
      .find()
      .skip(skips)
      .limit(pageSize);
  }

  async show(id) {
    return await this.model.findById(id);
  }

  async create(entity) {
    return this.model.create(entity);
  }

  async update(id, entity) {
    return await this.model.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id) {
    await this.model.findByIdAndDelete(id);

    return true;
  }
}

module.exports = BaseRepository;


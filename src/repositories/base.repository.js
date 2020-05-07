class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async index() {
    return await this.model.find();
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


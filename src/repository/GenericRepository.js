export default class GenericRepository {
  /**
   * @param {import('mongoose').Model} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * @param {Object} filter
   */
  async getAll(filter = {}) {
    return this.model.find(filter).lean();
  }

  async get(filter={}) {
    return this.getAll(filter);
  }

  /**
   * @param {Object} filter
   */
  async getBy(filter) {
    return this.model.findOne(filter).lean();
  }

  /**
   * @param {Object} doc
   */
  async create(doc) {
    return this.model.create(doc);
  }

  /**
   * @param {String} id
   * @param {Object} doc
   */
  async update(id, doc) {
    return this.model.findByIdAndUpdate(id, doc, { new: true }).lean();
  }

  /**
   * @param {String} id
   */
  async delete(id) {
    return this.model.findByIdAndDelete(id).lean();
  }
}

export default class GenericRepository {
  /**
   * @param {import('mongoose').Model} model
   */
  constructor(model) {
    this.model = model;
  }

  /**
   * Devuelve todos los documentos que cumplan el filtro
   * @param {Object} filter
   */
  async getAll(filter = {}) {
    return this.model.find(filter).lean();
  }

  async get(filter={}) {
    return this.getAll(filter);
  }

  /**
   * Devuelve un único documento que cumpla el filtro
   * @param {Object} filter
   */
  async getBy(filter) {
    return this.model.findOne(filter).lean();
  }

  /**
   * Crea un nuevo documento en la colección
   * @param {Object} doc
   */
  async create(doc) {
    return this.model.create(doc);
  }

  /**
   * Actualiza un documento por su _id y devuelve el documento actualizado
   * @param {String} id
   * @param {Object} doc
   */
  async update(id, doc) {
    return this.model.findByIdAndUpdate(id, doc, { new: true }).lean();
  }

  /**
   * Elimina un documento por su _id
   * @param {String} id
   */
  async delete(id) {
    return this.model.findByIdAndDelete(id).lean();
  }
}

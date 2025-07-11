import GenericRepository from "./GenericRepository.js";

export default class AdoptionRepository extends GenericRepository {
  constructor(model) {
    super(model);
  }

  // Sobrescribe el método 'save' para usar 'create' del GenericRepository
  async save(data) {
    return await this.create(data); 
  }
}
import GenericRepository from "./GenericRepository.js";

export default class AdoptionRepository extends GenericRepository {
  constructor(model) {
    super(model);
  }

  async save(data) {
    return await this.create(data); 
  }
}
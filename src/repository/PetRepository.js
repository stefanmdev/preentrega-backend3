import mongoose from 'mongoose';
import GenericRepository from './GenericRepository.js';

const petSchema = new mongoose.Schema({
  name:     { type: String, required: true },
  species:  { type: String, required: true },
  birthday: { type: Date, required: true }
}, { timestamps: true });

const PetModel = mongoose.model('Pet', petSchema);

export default class PetRepository extends GenericRepository {
  constructor() {
    super(PetModel);
  }

}

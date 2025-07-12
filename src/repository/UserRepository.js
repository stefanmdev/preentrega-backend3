import mongoose from 'mongoose';
import GenericRepository from './GenericRepository.js';

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  role:      { type: String, enum: ['user','admin'], default: 'user' },
  pets:      { type: [String], default: [] }
}, { timestamps: true });

const UserModel = mongoose.model('User', userSchema);

export default class UserRepository extends GenericRepository {
  constructor() {
    super(UserModel);
  }

  getUserByEmail = (email) => {
    return this.getBy({ email });
  }

  getUserById = (id) => {
    return this.getBy({ _id: id });
  }
}

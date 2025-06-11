// src/routes/mocks.router.js
import { Router } from 'express';
import { generateUsersMock, generatePetsMock } from '../utils/mocking.js';
import UserRepository from '../repository/UserRepository.js';
import PetRepository  from '../repository/PetRepository.js';

const router   = Router();
const userRepo = new UserRepository();
const petRepo  = new PetRepository();

// 1) GET /api/mocks/mockingpets
router.get('/mockingpets', (req, res) => {
  const count = parseInt(req.query.count) || 10;
  const pets  = generatePetsMock(count);
  res.json({ status: 'success', data: pets });
});

// 2) GET /api/mocks/mockingusers
router.get('/mockingusers', (req, res) => {
  const count = parseInt(req.query.count) || 50;
  const users = generateUsersMock(count);
  res.json({ status: 'success', data: users });
});

// 3) POST /api/mocks/generateData
//    Genera y guarda en BD la cantidad de users y pets indicada
router.post('/generateData', async (req, res, next) => {
  try {
    const { users = 0, pets = 0 } = req.body;
    const usersArr = generateUsersMock(+users);
    const petsArr  = generatePetsMock(+pets);

    // Inserta cada mock usando tu capa de repositorio
    const insertedUsers = await Promise.all(
      usersArr.map(u => userRepo.create(u))
    );
    const insertedPets = await Promise.all(
      petsArr.map(p => petRepo.create(p))
    );

    res.json({
      status: 'success',
      inserted: {
        users: insertedUsers.length,
        pets:  insertedPets.length
      }
    });
  } catch (err) {
    next(err);
  }
});

export default router;

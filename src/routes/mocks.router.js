import { Router } from 'express';
import { generateUsersMock, generatePetsMock } from '../utils/mocking.js';
import UserRepository from '../repository/UserRepository.js';
import PetRepository  from '../repository/PetRepository.js';

const router = Router();
const userRepo = new UserRepository();
const petRepo  = new PetRepository();

router.get('/mockingusers', (req, res) => {
  const users = generateUsersMock(5);
  res.json({ users });
});

router.get('/mockingpets', (req, res) => {
  const pets = generatePetsMock(5);
  res.json({ pets });
});

router.post('/generateData', async (req, res) => {
  try {
    const { users = 5, pets = 5 } = req.body;

    const usersMock = generateUsersMock(users);
    const petsMock  = generatePetsMock(pets);

    const insertedUsers = await Promise.all(
      usersMock.map(u => userRepo.create(u))
    );

    const insertedPets = await Promise.all(
      petsMock.map(p => petRepo.create(p))
    );

    res.status(201).json({
      message: 'Datos mock insertados correctamente',
      inserted: {
        users: insertedUsers.length,
        pets: insertedPets.length
      }
    });
  } catch (error) {
    console.error('Error generando datos mock:', error);
    res.status(500).json({ error: 'No se pudieron generar datos mock' });
  }
});

export default router;

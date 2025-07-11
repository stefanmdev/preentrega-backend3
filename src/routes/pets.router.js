import { Router } from 'express';
import petsController from '../controllers/pets.controller.js';

const router = Router();

// Asegúrate de que petsController tenga estos métodos exportados
router.get('/', petsController.getAllPets);
router.post('/', petsController.createPet);
router.put('/:pid', petsController.updatePet);
router.delete('/:pid', petsController.deletePet);

export default router;
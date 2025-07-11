import { Router } from 'express';
import AdoptionsController from '../controllers/adoptions.controller.js';

const router = Router();

router.get('/', AdoptionsController.getAllAdoptions.bind(AdoptionsController));
router.get('/:id', AdoptionsController.getAdoption.bind(AdoptionsController));
router.post('/', AdoptionsController.createAdoption.bind(AdoptionsController));

export default router;
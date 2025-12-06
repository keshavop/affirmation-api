import { Router } from 'express';
import { getRandomAffirmation, getCategories, getAffirmation } from '../controllers/affirmationController.js';

const router = Router();

router.get('/affirmations/random', getRandomAffirmation);
router.get('/categories', getCategories);
router.get('/affirmations', getAffirmation);

export default router;

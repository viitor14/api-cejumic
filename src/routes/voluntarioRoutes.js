import { Router } from 'express';
import voluntarioController from '../controllers/VoluntarioController';

const router = new Router();

router.post('/', voluntarioController.store);
router.get('/', voluntarioController.index);
export default router;

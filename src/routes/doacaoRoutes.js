import { Router } from 'express';
import doacaoController from '../controllers/DoacaoController';

const router = new Router();

router.post('/', doacaoController.store);
router.get('/', doacaoController.index);

export default router;

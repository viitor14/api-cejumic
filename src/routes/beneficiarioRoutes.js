import { Router } from 'express';
import beneficiarioController from '../controllers/BeneficiarioController';

const router = new Router();

router.post('/', beneficiarioController.store);
router.get('/', beneficiarioController.index);
router.put('/:id', beneficiarioController.update);

export default router;

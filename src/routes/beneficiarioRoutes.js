import { Router } from 'express';
import beneficiarioController from '../controllers/BeneficiarioController';

const router = new Router();

router.post('/', beneficiarioController.store);
router.get('/', beneficiarioController.Active);
router.get('/all', beneficiarioController.All);
router.put('/:id', beneficiarioController.update);

export default router;

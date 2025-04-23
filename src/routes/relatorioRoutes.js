import express from 'express';
import relatorioController from '../controllers/relatorioController';

const router = express.Router();

router.get('/', relatorioController.gerarRelatorio);

export default router;

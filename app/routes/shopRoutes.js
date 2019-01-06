import { Router } from 'express';
import shopController from '../controllers/shopController';

const router = Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

export default router;

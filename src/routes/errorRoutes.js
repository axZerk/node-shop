import { Router } from 'express';
import errorController from '../controllers/errorController';

const router = Router();

router.get('*', errorController.get404);

export default router;

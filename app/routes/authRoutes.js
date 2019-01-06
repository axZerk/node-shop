import { Router } from 'express';
import authController from '../controllers/authController';

const router = Router();

router.get('/signin', authController.getSignIn);
router.post('/signin', authController.postSignIn);

router.get('/signup', authController.getSignUp);
router.post('/signup', authController.postSignUp);

router.post('/signout', authController.postSignOut);

export default router;

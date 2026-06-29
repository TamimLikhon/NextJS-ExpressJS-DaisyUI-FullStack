import { Router } from 'express';
import { oauthSignin } from '../controllers/authController.js';

const router = Router();

router.post('/oauth-signin', oauthSignin);

export default router;

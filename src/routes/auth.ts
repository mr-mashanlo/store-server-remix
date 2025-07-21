import { Router } from 'express';

import { AuthController } from '../controllers/auth.js';
import { authMiddleware } from '../middlewares/auth.js';
import { UserModel } from '../models/user.js';
import { AuthService } from '../services/auth.js';
import { UserType } from '../types/user.js';

const router = Router();
const service = new AuthService<UserType>( UserModel );
const controller = new AuthController( service );

router.post( '/signin', controller.signIn );
router.post( '/signup', controller.signUp );
router.get( '/signout', authMiddleware, controller.signOut );
router.get( '/refresh', authMiddleware, controller.refresh );

export { router as authRouter };
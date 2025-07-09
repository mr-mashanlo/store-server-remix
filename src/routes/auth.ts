import { Router } from 'express';

import { AuthController } from '@/controllers/auth';
import { authMiddleware } from '@/middlewares/auth';
import { UserModel } from '@/models/user';
import { AuthService } from '@/services/auth';
import { UserType } from '@/types/user';

const router = Router();
const service = new AuthService<UserType>( UserModel );
const controller = new AuthController( service );

router.post( '/signin', controller.signIn );
router.post( '/signup', controller.signUp );
router.get( '/signout', authMiddleware, controller.signOut );
router.get( '/refresh', authMiddleware, controller.refresh );

export { router as authRouter };
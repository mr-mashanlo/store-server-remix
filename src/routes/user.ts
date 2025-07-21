import { Router } from 'express';

import { UserController } from '@/controllers/user.js';
import { authMiddleware } from '@/middlewares/auth.js';
import { UserModel } from '@/models/user.js';
import { BaseService } from '@/services/base.js';
import { UserType } from '@/types/user.js';

const router = Router();
const service = new BaseService<UserType>( UserModel );
const controller = new UserController<UserType>( service );

router.delete( '/', authMiddleware, controller.delete );
router.put( '/', authMiddleware, controller.update );
router.get( '/me', authMiddleware, controller.getOne );

export { router as userRouter };
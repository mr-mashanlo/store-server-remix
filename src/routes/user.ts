import { Router } from 'express';

import { UserController } from '@/controllers/user';
import { authMiddleware } from '@/middlewares/auth';
import { UserModel } from '@/models/user';
import { BaseService } from '@/services/base';
import { UserType } from '@/types/user';

const router = Router();
const service = new BaseService<UserType>( UserModel );
const controller = new UserController<UserType>( service );

router.delete( '/', authMiddleware, controller.delete );
router.put( '/', authMiddleware, controller.update );
router.get( '/me', authMiddleware, controller.getOne );

export { router as userRouter };
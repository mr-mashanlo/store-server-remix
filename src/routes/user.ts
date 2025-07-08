import Router from 'express';

import { BaseController } from '@/controllers/base';
import { authMiddleware } from '@/middlewares/auth';
import { UserModel } from '@/models/user';
import { BaseService } from '@/services/base';
import { UserType } from '@/types/user';

// @ts-expect-error - need to fix type
const router = new Router();
const service = new BaseService<UserType>( UserModel );
const controller = new BaseController<UserType>( service );

router.get( '/', authMiddleware, controller.getMany );
router.get( '/:id', authMiddleware, controller.getOne );

export { router as userRouter };
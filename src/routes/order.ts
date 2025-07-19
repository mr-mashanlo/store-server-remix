import { Router } from 'express';

import { UserController } from '@/controllers/user';
import { authMiddleware } from '@/middlewares/auth';
import { OrderModel } from '@/models/order';
import { BaseService } from '@/services/base';
import { OrderType } from '@/types/order';

const router = Router();
const service = new BaseService<OrderType>( OrderModel );
const controller = new UserController<OrderType>( service );

router.post( '/', authMiddleware, controller.create );
router.put( '/', authMiddleware, controller.update );
router.get( '/', authMiddleware, controller.getMany );
router.get( '/:id', authMiddleware, controller.getByID );

export { router as orderRouter };
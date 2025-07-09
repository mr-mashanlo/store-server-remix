import { Router } from 'express';

import { BaseController } from '@/controllers/base';
import { authMiddleware } from '@/middlewares/auth';
import { OrderModel } from '@/models/order';
import { BaseService } from '@/services/base';
import { OrderType } from '@/types/order';

const router = Router();
const service = new BaseService<OrderType>( OrderModel );
const controller = new BaseController<OrderType>( service );

router.post( '/', authMiddleware, controller.create );
router.delete( '/', authMiddleware, controller.delete );
router.put( '/', authMiddleware, controller.update );
router.get( '/', controller.getMany );
router.get( '/:id', controller.getOne );

export { router as orderRouter };
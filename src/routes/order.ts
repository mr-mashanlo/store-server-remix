import { Router } from 'express';

import { UserController } from '../controllers/user.js';
import { authMiddleware } from '../middlewares/auth.js';
import { OrderModel } from '../models/order.js';
import { BaseService } from '../services/base.js';
import { OrderType } from '../types/order.js';

const router = Router();
const service = new BaseService<OrderType>( OrderModel );
const controller = new UserController<OrderType>( service );

router.post( '/', authMiddleware, controller.create );
router.put( '/', authMiddleware, controller.update );
router.get( '/', authMiddleware, controller.getMany );
router.get( '/:id', authMiddleware, controller.getByID );

export { router as orderRouter };
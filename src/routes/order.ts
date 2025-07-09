import { Router } from 'express';

import { BaseController } from '@/controllers/base';
import { OrderModel } from '@/models/order';
import { BaseService } from '@/services/base';
import { OrderType } from '@/types/order';

const router = Router();
const service = new BaseService<OrderType>( OrderModel );
const controller = new BaseController<OrderType>( service );

router.post( '/', controller.create );
router.delete( '/', controller.delete );
router.put( '/', controller.update );
router.get( '/', controller.getMany );
router.get( '/:id', controller.getOne );

export { router as orderRouter };
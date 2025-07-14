import { Router } from 'express';

import { BaseController } from '@/controllers/base';
import { authMiddleware } from '@/middlewares/auth';
import { ProductModel } from '@/models/product';
import { BaseService } from '@/services/base';
import { ProductType } from '@/types/product';

const router = Router();
const service = new BaseService<ProductType>( ProductModel );
const controller = new BaseController<ProductType>( service );

router.post( '/', authMiddleware, controller.create );
router.delete( '/', authMiddleware, controller.delete );
router.put( '/', authMiddleware, controller.update );
router.get( '/', controller.getMany );
router.get( '/:id', controller.getByID );

export { router as productRouter };
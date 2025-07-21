import { Router } from 'express';

import { BaseController } from '../controllers/base.js';
import { authMiddleware } from '../middlewares/auth.js';
import { ProductModel } from '../models/product.js';
import { BaseService } from '../services/base.js';
import { ProductType } from '../types/product.js';

const router = Router();
const service = new BaseService<ProductType>( ProductModel );
const controller = new BaseController<ProductType>( service );

router.get( '/a', controller.aggregate );
router.post( '/', authMiddleware, controller.create );
router.delete( '/', authMiddleware, controller.delete );
router.put( '/', authMiddleware, controller.update );
router.get( '/', controller.getMany );
router.get( '/:id', controller.getByID );

export { router as productRouter };
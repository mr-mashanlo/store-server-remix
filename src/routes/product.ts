import Router from 'express';

import { BaseController } from '@/controllers/base';
import { ProductModel } from '@/models/product';
import { BaseService } from '@/services/base';
import { ProductType } from '@/types/product';

// @ts-expect-error - need to fix type
const router = new Router();
const service = new BaseService<ProductType>( ProductModel );
const controller = new BaseController<ProductType>( service );

router.get( '/', controller.getMany );
router.get( '/:id', controller.getOne );

export { router as productRouter };
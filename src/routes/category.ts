import { Router } from 'express';

import { BaseController } from '@/controllers/base';
import { CategoryModel } from '@/models/category';
import { BaseService } from '@/services/base';
import { CategoryType } from '@/types/category';

const router = Router();
const service = new BaseService<CategoryType>( CategoryModel );
const controller = new BaseController<CategoryType>( service );

router.post( '/', controller.create );
router.delete( '/', controller.delete );
router.put( '/', controller.update );
router.get( '/', controller.getMany );
router.get( '/:id', controller.getOne );

export { router as categoryRouter };
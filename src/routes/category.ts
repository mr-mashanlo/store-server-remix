import { Router } from 'express';

import { BaseController } from '@/controllers/base';
import { authMiddleware } from '@/middlewares/auth';
import { CategoryModel } from '@/models/category';
import { BaseService } from '@/services/base';
import { CategoryType } from '@/types/category';

const router = Router();
const service = new BaseService<CategoryType>( CategoryModel );
const controller = new BaseController<CategoryType>( service );

router.post( '/', authMiddleware, controller.create );
router.delete( '/', authMiddleware, controller.delete );
router.put( '/', authMiddleware, controller.update );
router.get( '/', controller.getMany );
router.get( '/:id', controller.getOne );

export { router as categoryRouter };
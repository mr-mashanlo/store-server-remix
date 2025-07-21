import { Router } from 'express';

import { BaseController } from '../controllers/base.js';
import { authMiddleware } from '../middlewares/auth.js';
import { CategoryModel } from '../models/category.js';
import { BaseService } from '../services/base.js';
import { CategoryType } from '../types/category.js';

const router = Router();
const service = new BaseService<CategoryType>( CategoryModel );
const controller = new BaseController<CategoryType>( service );

router.get( '/a', controller.aggregate );
router.post( '/', authMiddleware, controller.create );
router.delete( '/', authMiddleware, controller.delete );
router.put( '/', authMiddleware, controller.update );
router.get( '/', controller.getMany );
router.get( '/:id', controller.getByID );

export { router as categoryRouter };
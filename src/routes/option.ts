import { Router } from 'express';

import { BaseController } from '../controllers/base.js';
import { authMiddleware } from '../middlewares/auth.js';
import { OptionModel } from '../models/option.js';
import { BaseService } from '../services/base.js';
import { OptionType } from '../types/option.js';

const router = Router();
const service = new BaseService<OptionType>( OptionModel );
const controller = new BaseController<OptionType>( service );

router.get( '/a', controller.aggregate );
router.post( '/', authMiddleware, controller.create );
router.delete( '/', authMiddleware, controller.delete );
router.put( '/', authMiddleware, controller.update );
router.get( '/', controller.getMany );
router.get( '/:id', controller.getByID );

export { router as optionRouter };
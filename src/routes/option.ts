import { Router } from 'express';

import { BaseController } from '@/controllers/base';
import { authMiddleware } from '@/middlewares/auth';
import { OptionModel } from '@/models/option';
import { BaseService } from '@/services/base';
import { OptionType } from '@/types/option';

const router = Router();
const service = new BaseService<OptionType>( OptionModel );
const controller = new BaseController<OptionType>( service );

router.post( '/', authMiddleware, controller.create );
router.delete( '/', authMiddleware, controller.delete );
router.put( '/', authMiddleware, controller.update );
router.get( '/', controller.getMany );
router.get( '/:id', controller.getByID );

export { router as optionRouter };
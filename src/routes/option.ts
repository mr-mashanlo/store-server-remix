import { Router } from 'express';

import { BaseController } from '@/controllers/base';
import { OptionModel } from '@/models/option';
import { BaseService } from '@/services/base';
import { OptionType } from '@/types/option';

const router = Router();
const service = new BaseService<OptionType>( OptionModel );
const controller = new BaseController<OptionType>( service );

router.post( '/', controller.create );
router.delete( '/', controller.delete );
router.put( '/', controller.update );
router.get( '/', controller.getMany );
router.get( '/:id', controller.getOne );

export { router as optionRouter };
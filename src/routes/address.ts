import { Router } from 'express';

import { BaseController } from '@/controllers/base';
import { authMiddleware } from '@/middlewares/auth';
import { AddressModel } from '@/models/address';
import { BaseService } from '@/services/base';
import { AddressType } from '@/types/address';

const router = Router();
const service = new BaseService<AddressType>( AddressModel );
const controller = new BaseController<AddressType>( service );

router.post( '/', authMiddleware, controller.create );
router.delete( '/', authMiddleware, controller.delete );
router.put( '/', authMiddleware, controller.update );
router.get( '/', controller.getMany );
router.get( '/:id', controller.getOne );

export { router as addressRouter };
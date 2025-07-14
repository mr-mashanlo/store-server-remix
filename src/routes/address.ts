import { Router } from 'express';

import { UserController } from '@/controllers/user';
import { authMiddleware } from '@/middlewares/auth';
import { AddressModel } from '@/models/address';
import { BaseService } from '@/services/base';
import { AddressType } from '@/types/address';

const router = Router();
const service = new BaseService<AddressType>( AddressModel );
const controller = new UserController<AddressType>( service );

router.post( '/', authMiddleware, controller.create );
router.delete( '/', authMiddleware, controller.delete );
router.put( '/', authMiddleware, controller.update );
router.get( '/me', authMiddleware, controller.getOne );

export { router as addressRouter };
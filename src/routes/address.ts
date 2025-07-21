import { Router } from 'express';

import { UserController } from '@/controllers/user.js';
import { authMiddleware } from '@/middlewares/auth.js';
import { AddressModel } from '@/models/address.js';
import { BaseService } from '@/services/base.js';
import { AddressType } from '@/types/address.js';

const router = Router();
const service = new BaseService<AddressType>( AddressModel );
const controller = new UserController<AddressType>( service );

router.post( '/', authMiddleware, controller.create );
router.delete( '/', authMiddleware, controller.delete );
router.put( '/', authMiddleware, controller.update );
router.get( '/me', authMiddleware, controller.getOne );

export { router as addressRouter };
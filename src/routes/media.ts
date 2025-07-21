import { Router } from 'express';

import { MediaController } from '@/controllers/media.js';
import { authMiddleware } from '@/middlewares/auth.js';
import { mediaMiddleware } from '@/middlewares/media.js';
import { vercelMiddleware } from '@/middlewares/vercel.js';
import { ImageModel } from '@/models/image.js';
import { MediaService } from '@/services/media.js';
import { ImageType } from '@/types/image.js';

const router = Router();
const service = new MediaService<ImageType>( ImageModel );
const controller = new MediaController( service );

router.get( '/', controller.getMany );
router.post( '/', authMiddleware, process.env.DEV_MODE ? mediaMiddleware : vercelMiddleware, controller.create );
router.delete( '/:id', authMiddleware, controller.delete );

export { router as mediaRouter };
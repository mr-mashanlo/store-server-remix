import { Router } from 'express';

import { MediaController } from '@/controllers/media';
import { mediaMiddleware } from '@/middlewares/media';
import { ImageModel } from '@/models/image';
import { MediaService } from '@/services/media';
import { ImageType } from '@/types/image';

const router = Router();
const service = new MediaService<ImageType>( ImageModel );
const controller = new MediaController( service );

router.get( '/', controller.getMany );
router.post( '/', mediaMiddleware, controller.create );
router.delete( '/:id', controller.delete );

export { router as mediaRouter };
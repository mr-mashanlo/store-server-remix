import { Router } from 'express';

// import { MediaController } from '../controllers/media.js';
import { VercelController } from '../controllers/vercel.js';
import { authMiddleware } from '../middlewares/auth.js';
// import { mediaMiddleware } from '../middlewares/media.js';
import { vercelMiddleware } from '../middlewares/vercel.js';
import { ImageModel } from '../models/image.js';
import { MediaService } from '../services/media.js';
import { ImageType } from '../types/image.js';

const router = Router();
const service = new MediaService<ImageType>( ImageModel );
// const mediaController = new MediaController( service );
const vercelController = new VercelController( service );

// router.post( '/', authMiddleware, mediaMiddleware, mediaController.create );
// router.delete( '/:id', authMiddleware, mediaController.delete );

router.post( '/', authMiddleware, vercelMiddleware, vercelController.create );
router.delete( '/:id', authMiddleware, vercelController.delete );

export { router as mediaRouter };
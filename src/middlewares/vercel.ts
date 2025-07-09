import multer from 'multer';

const storage = multer.memoryStorage();
export const vercelMiddleware = multer( { storage } ).single( 'image' );
import { Request } from 'express';
import fs from 'fs';
import multer, { diskStorage, FileFilterCallback } from 'multer';
import path from 'path';

const UPLOAD_DIR = 'uploads';
const MAX_FILE_SIZE = 2 * 1024 * 1024;
const ALLOWED_MIME_TYPES = [ 'image/jpeg', 'image/jpg', 'image/png', 'image/webp' ];

if ( !fs.existsSync( UPLOAD_DIR ) ) fs.mkdirSync( UPLOAD_DIR );

const storage = diskStorage( {
  destination: ( req, file, cb ) => cb( null, UPLOAD_DIR ),
  filename: ( req, file, cb ) => cb( null, Date.now() + path.extname( file.originalname ).toLowerCase() )
} );

const fileFilter = ( req: Request, file: Express.Multer.File, cb: FileFilterCallback ) => {
  if ( ALLOWED_MIME_TYPES.includes( file.mimetype ) ) cb( null, true );
  else cb( new Error( 'Invalid file type' ) );
};

const upload = multer( {
  storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter
} );

export const mediaMiddleware = upload.single( 'image' );
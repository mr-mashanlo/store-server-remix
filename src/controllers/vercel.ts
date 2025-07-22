import { del, put } from '@vercel/blob';
import { RequestHandler } from 'express';
import path from 'path';

import { MediaServiceInterface } from '../services/media.js';
import { ImageType } from '../types/image.js';

export class VercelController {

  private service;

  constructor( service: MediaServiceInterface<ImageType> ) { this.service = service; };

  create: RequestHandler = async ( req, res, next ) => {
    try {
      const { buffer, originalname } = req.file!;
      const ext = path.extname( originalname );
      const name = Date.now().toString( 36 ) + ext;
      const { url } = await put( name, buffer, { access: 'public' } );
      const document = await this.service.create( { name, path: url, alt: req.body.alt || '' } );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  delete: RequestHandler = async ( req, res, next ) => {
    try {
      const name = req.body.name || '';
      await del( name );
      res.json( { ok: true } );
    } catch ( error ) {
      next( error );
    }
  };

};
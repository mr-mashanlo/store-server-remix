import { del, put } from '@vercel/blob';
import { RequestHandler } from 'express';

import { MediaServiceInterface } from '@/services/media.js';
import { ImageType } from '@/types/image.js';

export class MediaController {

  private service;

  constructor( service: MediaServiceInterface<ImageType> ) { this.service = service; };

  create: RequestHandler = async ( req, res, next ) => {
    try {
      const file = req.file;
      const blob = await put( file!.originalname.toLowerCase(), file!.buffer, { access: 'public' } );
      const document = await this.service.create( { name: file!.originalname.toLowerCase(), path: blob.url, alt: req.body.alt || '' } );
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
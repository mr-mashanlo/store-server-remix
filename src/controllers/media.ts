import { RequestHandler } from 'express';
import fs from 'fs';
import path from 'path';

import { MediaServiceInterface } from '../services/media.js';
import { ImageType } from '../types/image.js';
import { CustomError } from '../utils/error.js';

export class MediaController {

  private service;

  constructor( service: MediaServiceInterface<ImageType> ) { this.service = service; };

  create: RequestHandler = async ( req, res, next ) => {
    try {
      const { filename, path } = req.file!;
      const document = await this.service.create( { name: filename, path: `http://localhost:${process.env.PORT}/${path}`, alt: req.body.alt || '' } );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  delete: RequestHandler = async ( req, res, next ) => {
    try {
      const id = req.params.id;
      const document = await this.service.getOne( { _id: id } );
      if ( !document ) throw new CustomError( { status: 400, name: 'document', message: 'Image not found' } );
      const deletedDocument = await this.service.delete( { _id: id } );
      fs.unlinkSync( path.resolve( document.path ) );
      res.json( deletedDocument );
    } catch ( error ) {
      next( error );
    }
  };

};
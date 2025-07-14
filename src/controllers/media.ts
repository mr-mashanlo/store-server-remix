import { RequestHandler } from 'express';
import fs from 'fs';
import path from 'path';

import { MediaServiceInterface } from '@/services/media';
import { ImageType } from '@/types/image';
import { CustomError } from '@/utils/error';

export class MediaController {

  private service;

  constructor( service: MediaServiceInterface<ImageType> ) { this.service = service; };

  create: RequestHandler = async ( req, res, next ) => {
    try {
      const file = req.file;
      const alt = req.body.alt || '';
      const document = await this.service.create( file!, alt );
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

  getMany: RequestHandler = async ( req, res, next ) => {
    try {
      const filter = req.query.filter || '%7B%7D';
      const query = JSON.parse( decodeURIComponent( String( filter ) ) );
      const documents = await this.service.getMany( query );
      res.json( documents );
    } catch ( error ) {
      next( error );
    }
  };

  getOne: RequestHandler = async ( req, res, next ) => {
    try {
      const id = req.params.id;
      const document = await this.service.getOne( { _id: id } );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

};
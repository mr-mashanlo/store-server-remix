import { RequestHandler } from 'express';

import { BaseServiceInterface } from '@/services/base';

export class BaseController<T> {

  private service;

  constructor( service: BaseServiceInterface<T> ) { this.service = service; };

  getOne: RequestHandler = async ( req, res, next ) => {
    try {
      const query = JSON.parse( decodeURIComponent( String( req.query.query || '%7B%7D' ) ) );
      const option = JSON.parse( decodeURIComponent( String( req.query.option || '%7B%7D' ) ) );
      const document = await this.service.getOne( query, option );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getMany: RequestHandler = async ( req, res, next ) => {
    try {
      const query = JSON.parse( decodeURIComponent( String( req.query.query || '%7B%7D' ) ) );
      const option = JSON.parse( decodeURIComponent( String( req.query.option || '%7B%7D' ) ) );
      const documents = await this.service.getMany( query, option );
      res.json( documents );
    } catch ( error ) {
      next( error );
    }
  };

  create: RequestHandler = async ( req, res, next ) => {
    try {
      const body = req.body;
      const document = await this.service.create( body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  delete: RequestHandler = async ( req, res, next ) => {
    try {
      const query = JSON.parse( decodeURIComponent( String( req.query.query || '%7B%7D' ) ) );
      const document = await this.service.delete( query );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  update: RequestHandler = async ( req, res, next ) => {
    try {
      const { query, body } = req.body;
      const document = await this.service.update( query, body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

};
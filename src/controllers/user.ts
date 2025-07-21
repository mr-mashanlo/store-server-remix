import { RequestHandler } from 'express';

import { BaseServiceInterface } from '@/services/base.js';

export class UserController<T> {

  private service;

  constructor( service: BaseServiceInterface<T> ) { this.service = service; };

  aggregate: RequestHandler = async ( req, res, next ) => {
    try {
      const { sort, filter, lookup } = JSON.parse( decodeURIComponent( String( req.query.pipeline || '%5B%5D' ) ) );
      const pipeline = [];

      if ( lookup && lookup.length > 0 ) {
        lookup.forEach( ( option: object ) => pipeline.push( option ) );
      }

      if ( filter && Object.keys( filter ).length > 0 ) {
        pipeline.push( { $match: filter } );
      }

      if ( sort && Object.keys( sort ).length > 0 ) {
        pipeline.push( { $sort: sort } );
      }

      const document = await this.service.aggregate( pipeline );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  create: RequestHandler = async ( req, res, next ) => {
    try {
      const body = req.body;
      const user = { user: req.user?.id };
      const document = await this.service.create( { ...body, ...user } );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  delete: RequestHandler = async ( req, res, next ) => {
    try {
      const query = { user: req.user?.id };
      const document = await this.service.delete( query );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getByID: RequestHandler = async ( req, res, next ) => {
    try {
      const query = { _id: req.params.id };
      const document = await this.service.getOne( query );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getMany: RequestHandler = async ( req, res, next ) => {
    try {
      const query = { user: req.user?.id };
      const document = await this.service.getMany( query );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getOne: RequestHandler = async ( req, res, next ) => {
    try {
      const query = { user: req.user?.id };
      const document = await this.service.getOne( query );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  update: RequestHandler = async ( req, res, next ) => {
    try {
      const body = req.body;
      const query = { user: req.user?.id };
      const document = await this.service.update( query, body );
      res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

};
import { RequestHandler } from 'express';

import { BaseServiceInterface } from '@/services/base';

export class UserController<T> {

  private service;

  constructor( service: BaseServiceInterface<T> ) { this.service = service; };

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
import { NextFunction, Request, Response } from 'express';

import { BaseServiceInterface } from '@/services/base';

export class BaseController<T> {

  private service;

  constructor( service: BaseServiceInterface<T> ) { this.service = service; };

  getOne = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
      const id = req.params.id;
      const document = await this.service.getOne( { _id: id } );
      return res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  getMany = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
      const filter = req.query.filter || '%7B%7D';
      const query = JSON.parse( decodeURIComponent( String( filter ) ) );
      const documents = await this.service.getMany( query );
      return res.json( documents );
    } catch ( error ) {
      next( error );
    }
  };

  create = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
      const body = req.body;
      const document = await this.service.create( body );
      return res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  delete = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
      const filter = req.query.filter || '%7B%7D';
      const query = JSON.parse( decodeURIComponent( String( filter ) ) );
      const document = await this.service.delete( query );
      return res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

  update = async ( req: Request, res: Response, next: NextFunction ) => {
    try {
      const filter = req.query.filter || '%7B%7D';
      const query = JSON.parse( decodeURIComponent( String( filter ) ) );
      const body = req.body;
      const document = await this.service.update( query, body );
      return res.json( document );
    } catch ( error ) {
      next( error );
    }
  };

};
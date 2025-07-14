import { RequestHandler } from 'express';

import { AuthServiceInterface } from '@/services/auth';
import { UserType } from '@/types/user';
import { deleteAuthCookie, saveAuthCookie } from '@/utils/cookie';
import { CustomError } from '@/utils/error';
import { comparePasswords, hashPassword } from '@/utils/password';
import { decodeToken, generateToken } from '@/utils/token';
import { validateUserData } from '@/utils/user-validator';

export class AuthController {

  private service;

  constructor( service: AuthServiceInterface<UserType> ) { this.service = service; };

  signIn: RequestHandler = async ( req, res, next ) => {
    try {
      const body = req.body;
      const validatedInputData = validateUserData( body );
      const document = await this.service.signIn( { email: validatedInputData.email } );
      if ( !document ) throw new CustomError( { status: 400, name: 'document', message: 'User not found' } );
      comparePasswords( validatedInputData.password, document.password );
      const token = generateToken( { id: document._id } );
      saveAuthCookie( res, token );
      res.json( { id: document._id, token } );
    } catch ( error ) {
      next( error );
    }
  };

  signUp: RequestHandler = async ( req, res, next ) => {
    try {
      const body = req.body;
      const validatedInputData = validateUserData( body );
      const document = await this.service.signIn( { email: validatedInputData.email } );
      if ( document ) throw new CustomError( { status: 400, name: 'document', message: 'User already exists' } );
      const password = hashPassword( validatedInputData.password );
      const createdDocument = await this.service.signUp( { email: validatedInputData.email, password } );
      const token = generateToken( { id: createdDocument._id } );
      saveAuthCookie( res, token );
      res.json( { id: createdDocument._id, token } );
    } catch ( error ) {
      next( error );
    }
  };

  signOut: RequestHandler = async ( req, res, next ) => {
    try {
      deleteAuthCookie( res );
      res.json( { ok: true } );
    } catch ( error ) {
      next( error );
    }
  };

  refresh: RequestHandler = async ( req, res, next ) => {
    try {
      const token = req.cookies.token;
      const body = decodeToken( token );
      const createdToken = generateToken( { id: body.id } );
      saveAuthCookie( res, createdToken );
      res.json( { id: body.id, token: createdToken } );
    } catch ( error ) {
      next( error );
    }
  };

};
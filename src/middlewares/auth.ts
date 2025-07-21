import { NextFunction, Request, Response } from 'express';

import { CustomError } from '@/utils/error.js';
import { decodeToken } from '@/utils/token.js';

export const authMiddleware = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const token = req.cookies.token;
    if ( !token ) throw new CustomError( { status: 419, name: 'token', message: 'Token not found' } );
    req.user = decodeToken( token );
    next();
  } catch ( error ) {
    next( error );
  }
};
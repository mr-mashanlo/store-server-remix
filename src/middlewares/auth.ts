import { NextFunction, Request, Response } from 'express';

import { CustomError } from '@/utils/error';

export const authMiddleware = async ( req: Request, res: Response, next: NextFunction ) => {
  try {
    const token = req.cookies.token;
    if ( !token ) throw new CustomError( { status: 419, name: 'token', message: 'Token not found' } );
    next();
  } catch ( error ) {
    next( error );
  }
};
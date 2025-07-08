import { ErrorRequestHandler } from 'express';

import { CustomError } from '@/utils/error';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const errorMiddleware: ErrorRequestHandler = ( err, req, res, next ): void => {
  if ( err instanceof CustomError ) res.status( err.getStatus() ).json( { status: err.status, name: err.name, message: err.message } );
  res.status( 500 ).json( { status: 500, name: 'Error', message: err.message || 'Something went wrong' } );
};

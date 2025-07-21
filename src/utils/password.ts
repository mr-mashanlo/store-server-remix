import bcrypt from 'bcryptjs';

import { CustomError } from './error.js';

export const hashPassword = ( password: string ) => {
  return bcrypt.hashSync( password, 7 );
};

export const comparePasswords = ( password: string, hash: string ) => {
  if ( !bcrypt.compareSync( password, hash ) ) throw new CustomError( { status: 400, name: 'password', message: 'Incorrect password' } ) ;
};
import { Response } from 'express';

export const saveAuthCookie = ( res: Response, token: string ) => {
  res.cookie( 'token', token, { maxAge: 7_200_000, httpOnly: true, sameSite: 'lax', secure: false } );
};

export const deleteAuthCookie = ( res: Response ) => {
  res.clearCookie( 'token' );
};
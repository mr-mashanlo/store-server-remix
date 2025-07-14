import jwt, { JwtPayload } from 'jsonwebtoken';

interface CustomJwtPayload extends JwtPayload {
  id: string
}

export const generateToken = ( data: { id: string } ) => {
  return jwt.sign( { id: data.id }, process.env.SECRET_KEY || '', { expiresIn: '2h' } );
};

export const validateToken = ( token: string ): CustomJwtPayload => {
  // @ts-expect-error - need to fix type
  return jwt.verify( token, process.env.SECRET_KEY || '', ( error, decoded ) => decoded );
};

export const decodeToken = ( token: string ): { id: string, iat: number, exp: number } => {
  // @ts-expect-error - need to fix type
  return jwt.decode( token );
};
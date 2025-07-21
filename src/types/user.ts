import z from 'zod';

import { AddressZod } from './address.js';

export const UserInputZod = z.object( {
  email: z.string().email( { message: 'Invalid email address' } ),
  password: z.string().min( 8, { message: 'Must be 8 or more characters long' } )
} );

export const UserZod = UserInputZod.extend( {
  _id: z.string(),
  address: AddressZod.optional()
} );

export type UserInputType = z.infer<typeof UserInputZod>

export type UserType = z.infer<typeof UserZod>
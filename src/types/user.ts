import z from 'zod';

export const UserInputZod = z.object( {
  email: z.string().email( { message: 'Invalid email address' } ),
  password: z.string().min( 8, { message: 'Must be 8 or more characters long' } )
} );

export const UserZod = z.object( {
  _id: z.string(),
  email: z.string().email( { message: 'Invalid email address' } ),
  password: z.string()
} );

export type UserInputType = z.infer<typeof UserInputZod>

export type UserType = z.infer<typeof UserZod>
import z from 'zod';

export const AddressInputZod = z.object( {
  address: z.string()
} );

export const AddressZod = AddressInputZod.extend( {
  _id: z.string()
} );

export type AddressInputType = z.infer<typeof AddressInputZod>

export type AddressType = z.infer<typeof AddressZod>
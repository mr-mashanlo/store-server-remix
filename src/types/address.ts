import z from 'zod';

export const AddressZod = z.object( {
  _id: z.string(),
  address: z.string()
} );

export type AddressType = z.infer<typeof AddressZod>
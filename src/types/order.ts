import z from 'zod';

import { AddressZod } from './address';
import { OptionZod } from './option';
import { UserZod } from './user';

export const OrderZod = z.object( {
  _id: z.string(),
  user: UserZod,
  address: AddressZod,
  options: z.array( z.object( {
    option: OptionZod,
    price: z.number(),
    quantity: z.number()
  } ) )
} );

export type OrderType = z.infer<typeof OrderZod>
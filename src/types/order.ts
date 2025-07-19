import z from 'zod';

import { OptionZod } from './option';
import { UserZod } from './user';

export const OrderZod = z.object( {
  _id: z.string(),
  uid: z.string(),
  user: UserZod,
  options: z.array( z.object( {
    option: OptionZod,
    price: z.number(),
    quantity: z.number()
  } ) ),
  address: z.string(),
  status: z.string(),
  created: z.number()
} );

export type OrderType = z.infer<typeof OrderZod>
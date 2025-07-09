import z from 'zod';

import { ImageZod } from './image';

export const OptionZod = z.object( {
  _id: z.string(),
  name: z.string(),
  price: z.number(),
  image: ImageZod
} );

export type OptionType = z.infer<typeof OptionZod>
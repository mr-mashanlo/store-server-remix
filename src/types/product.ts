import z from 'zod';

import { ImageZod } from './image';
import { OptionZod } from './option';

export const ProductZod = z.object( {
  _id: z.string(),
  name: z.string(),
  excerpt: z.string(),
  description: z.string(),
  images: z.array( ImageZod ),
  options: z.array( OptionZod )
} );

export type ProductType = z.infer<typeof ProductZod>
import z from 'zod';

import { CategoryZod } from './category';
import { ImageZod } from './image';
import { OptionZod } from './option';

export const ProductZod = z.object( {
  _id: z.string(),
  uid: z.string(),
  name: z.string(),
  excerpt: z.string(),
  description: z.string(),
  categories: z.array( CategoryZod ),
  options: z.array( OptionZod ),
  images: z.array( ImageZod )
} );

export type ProductType = z.infer<typeof ProductZod>
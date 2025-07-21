import { SchemaDefinitionProperty } from 'mongoose';
import z from 'zod';

import { ImageZod } from './image.js';

export const OptionZod = z.object( {
  _id: z.string(),
  uid: z.string(),
  name: z.string(),
  value: z.string(),
  price: z.number(),
  image: ImageZod
} );

type BaseType = z.infer<typeof OptionZod>

export interface OptionType extends BaseType {
  product: SchemaDefinitionProperty
}
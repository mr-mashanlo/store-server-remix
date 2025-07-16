import { SchemaDefinitionProperty } from 'mongoose';
import z from 'zod';

export const AddressZod = z.object( {
  _id: z.string(),
  address: z.string()
} );

type BaseType = z.infer<typeof AddressZod>

export interface AddressType extends BaseType {
  user: SchemaDefinitionProperty
}
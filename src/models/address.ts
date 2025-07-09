import { model, Schema } from 'mongoose';

import { AddressType } from '@/types/address';

export const AddressSchema = new Schema<AddressType>( {
  address: { type: String, require: true }
} );

export const AddressModel = model( 'Address', AddressSchema );
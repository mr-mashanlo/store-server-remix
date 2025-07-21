import { model, Schema } from 'mongoose';

import { AddressType } from '@/types/address.js';

export const AddressSchema = new Schema<AddressType>( {
  user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  address: { type: String, require: true }
} );

export const AddressModel = model( 'Address', AddressSchema );
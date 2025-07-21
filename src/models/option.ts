import { model, Schema } from 'mongoose';
import autopopulate from 'mongoose-autopopulate';
import { uid } from 'uid';

import { OptionType } from '@/types/option.js';

export const OptionSchema = new Schema<OptionType>( {
  uid: { type: String, default: () => uid( 6 ) },
  product: { type: Schema.Types.ObjectId, ref: 'Product', require: true },
  name: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: Schema.Types.ObjectId, ref: 'Image', require: true, autopopulate: true }
} );

OptionSchema.plugin( autopopulate );

export const OptionModel = model( 'Option', OptionSchema );
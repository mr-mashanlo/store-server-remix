import { model, Schema } from 'mongoose';

import { OptionType } from '@/types/option';

export const OptionSchema = new Schema<OptionType>( {
  name: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: Schema.Types.ObjectId, ref: 'Image', require: true }
} );

export const OptionModel = model( 'Option', OptionSchema );
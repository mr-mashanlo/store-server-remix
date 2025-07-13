import { model, Schema } from 'mongoose';
import autopopulate from 'mongoose-autopopulate';

import { OptionType } from '@/types/option';

export const OptionSchema = new Schema<OptionType>( {
  name: { type: String, require: true },
  price: { type: Number, require: true },
  image: { type: Schema.Types.ObjectId, ref: 'Image', require: true, autopopulate: true }
} );

OptionSchema.plugin( autopopulate );

export const OptionModel = model( 'Option', OptionSchema );
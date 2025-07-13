import { model, Schema } from 'mongoose';
import autopopulate from 'mongoose-autopopulate';

import { ProductType } from '@/types/product';

export const ProductSchema = new Schema<ProductType>( {
  name: { type: String, require: true },
  excerpt: { type: String, require: true },
  description: { type: String, require: true },
  categories: [ { type: Schema.Types.ObjectId, ref: 'Category', autopopulate: true } ],
  options: [ { type: Schema.Types.ObjectId, ref: 'Option', autopopulate: true } ],
  images: [ { type: Schema.Types.ObjectId, ref: 'Image', autopopulate: true } ]
} );

ProductSchema.plugin( autopopulate );

export const ProductModel = model( 'Product', ProductSchema );
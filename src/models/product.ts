import { model, Schema } from 'mongoose';

import { ProductType } from '@/types/product';

export const ProductSchema = new Schema<ProductType>( {
  name: { type: String, require: true },
  excerpt: { type: String, require: true },
  description: { type: String, require: true },
  images: [ { type: Schema.Types.ObjectId, ref: 'Image', require: true } ],
  options: [ { type: Schema.Types.ObjectId, ref: 'Option', require: true } ]
} );

export const ProductModel = model( 'Product', ProductSchema );
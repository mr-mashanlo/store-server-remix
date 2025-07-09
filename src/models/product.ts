import { model, Schema } from 'mongoose';

import { ProductType } from '@/types/product';

export const ProductSchema = new Schema<ProductType>( {
  name: { type: String, require: true },
  excerpt: { type: String, require: true },
  description: { type: String, require: true },
  categories: [ { type: Schema.Types.ObjectId, ref: 'Category' } ],
  options: [ { type: Schema.Types.ObjectId, ref: 'Option' } ],
  images: [ { type: Schema.Types.ObjectId, ref: 'Image' } ]
} );

export const ProductModel = model( 'Product', ProductSchema );
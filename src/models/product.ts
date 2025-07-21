import { model, Schema } from 'mongoose';
import autopopulate from 'mongoose-autopopulate';
import { uid } from 'uid';

import { ProductType } from '../types/product.js';

export const ProductSchema = new Schema<ProductType>( {
  uid: { type: String, default: () => uid( 6 ) },
  name: { type: String, require: true },
  excerpt: { type: String, require: true },
  description: { type: String, require: true },
  categories: [ { type: Schema.Types.ObjectId, ref: 'Category', autopopulate: true } ],
  images: [ { type: Schema.Types.ObjectId, ref: 'Image', autopopulate: true } ]
} );

ProductSchema.plugin( autopopulate );

export const ProductModel = model( 'Product', ProductSchema );
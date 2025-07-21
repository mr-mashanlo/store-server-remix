import { model, Schema } from 'mongoose';

import { CategoryType } from '../types/category.js';

export const CategorySchema = new Schema<CategoryType>( {
  name: { type: String, require: true },
  slug: { type: String, require: true },
  description: { type: String, require: true }
} );

export const CategoryModel = model( 'Category', CategorySchema );
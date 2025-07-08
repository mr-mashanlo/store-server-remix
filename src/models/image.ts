import { model, Schema } from 'mongoose';

export const ImageSchema = new Schema( {
  url: { type: String, require: true },
  alt: { type: String, require: true }
} );

export const ImageModel = model( 'Image', ImageSchema );
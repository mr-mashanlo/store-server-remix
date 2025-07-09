import { model, Schema } from 'mongoose';

import { ImageType } from '@/types/image';

export const ImageSchema = new Schema<ImageType>( {
  name: { type: String, require: true },
  path: { type: String, require: true },
  alt: { type: String }
} );

export const ImageModel = model( 'Image', ImageSchema );
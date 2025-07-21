import { model, Schema } from 'mongoose';
import autopopulate from 'mongoose-autopopulate';

import { UserType } from '@/types/user.js';

export const UserSchema = new Schema<UserType>( {
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true }
} );

UserSchema.plugin( autopopulate );;

export const UserModel = model( 'User', UserSchema );
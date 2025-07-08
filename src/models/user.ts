import { model, Schema } from 'mongoose';

import { UserType } from '@/types/user';

export const UserSchema = new Schema<UserType>( {
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true }
} );

export const UserModel = model( 'User', UserSchema );
import { model, Schema } from 'mongoose';
import autopopulate from 'mongoose-autopopulate';

import { UserType } from '@/types/user';

export const UserSchema = new Schema<UserType>( {
  email: { type: String, unique: true, require: true },
  password: { type: String, require: true },
  address: { type: Schema.Types.ObjectId, ref: 'Address', autopopulate: true }
} );

UserSchema.plugin( autopopulate );;

export const UserModel = model( 'User', UserSchema );
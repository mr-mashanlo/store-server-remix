import { model, Schema } from 'mongoose';

import { OrderType } from '@/types/order';

export const OrderSchema = new Schema<OrderType>( {
  user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  address: { type: Schema.Types.ObjectId, ref: 'Address', require: true },
  options: [ {
    option: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    price: { type: Number, require: true },
    quantity: { type: Number, require: true }
  } ]
} );

export const OrderModel = model( 'Order', OrderSchema );
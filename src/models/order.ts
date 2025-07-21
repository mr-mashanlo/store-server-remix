import { model, Schema } from 'mongoose';
import autopopulate from 'mongoose-autopopulate';
import { uid } from 'uid';

import { OrderType } from '@/types/order.js';

export const OrderSchema = new Schema<OrderType>( {
  uid: { type: String, default: () => uid( 6 ) },
  user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
  options: [ {
    option: { type: Schema.Types.ObjectId, ref: 'Option', require: true, autopopulate: true },
    price: { type: Number, require: true },
    quantity: { type: Number, require: true }
  } ],
  address: { type: String, require: true },
  status: { type: String, require: true, default: 'Processing' },
  created: { type: Number, require: true, default: () => Date.now() }
} );

OrderSchema.plugin( autopopulate );

export const OrderModel = model( 'Order', OrderSchema );
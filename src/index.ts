import 'dotenv/config';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import path from 'path';

import { errorMiddleware } from './middlewares/error.js';
import { addressRouter } from './routes/address.js';
import { authRouter } from './routes/auth.js';
import { categoryRouter } from './routes/category.js';
import { mediaRouter } from './routes/media.js';
import { optionRouter } from './routes/option.js';
import { orderRouter } from './routes/order.js';
import { productRouter } from './routes/product.js';
import { userRouter } from './routes/user.js';

const app = express();
app.use( cors( { credentials: true, origin: [ process.env.FRONT_URL || '' ] } ) );
app.use( cookieParser() );
app.use( express.json() );

app.use( '/uploads', express.static( path.join( 'uploads' ) ) );
app.use( '/media', mediaRouter );
app.use( '/auth', authRouter );
app.use( '/users', userRouter );
app.use( '/addresses', addressRouter );
app.use( '/products', productRouter );
app.use( '/options', optionRouter );
app.use( '/categories', categoryRouter );
app.use( '/orders', orderRouter );

app.use( errorMiddleware );

mongoose.connect( process.env.MONGODB_URL || '' );

app.listen( process.env.PORT, () => console.log( `Server is running on port ${process.env.PORT}` ) );

export default app;
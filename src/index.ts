import 'dotenv/config';

import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';

import { errorMiddleware } from './middlewares/error';
import { authRouter } from './routes/auth';
import { productRouter } from './routes/product';
import { userRouter } from './routes/user';

const app = express();
app.use( cors( { credentials: true, origin: [ process.env.FRONT_URI || '' ] } ) );
app.use( cookieParser() );
app.use( express.json() );

app.use( '/auth', authRouter );
app.use( '/user', userRouter );
app.use( '/product', productRouter );

app.use( errorMiddleware );

const start = async () => {
  try {
    await mongoose.connect( process.env.MONGODB_URI || '' );
    app.listen( process.env.PORT, () => console.log( `Server is running on port ${process.env.PORT}` ) );
  } catch ( error ) {
    console.log( error );
  }
};

start();
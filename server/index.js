import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import 'dotenv/config';

import authRouter from './routers/authRouter.js';
import postsRouter from './routers/postsRouter.js';

const app = express();

app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);

const PORT = process.env.PORT;

mongoose
	.connect(process.env.MONGODB_URI)
	.then(() => {
		console.log('Connected to MongoDB');
	})
	.catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => 
	console.log(`Server running on port ${PORT}`)
);

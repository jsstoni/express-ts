import compression from 'compression';
import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to compress responses
app.use(compression());

// Middelware CORS
app.use(cors());
app.options('*', cors());

// Middleware security
app.use(helmet());
app.disable('x-powered-by');

export { app };

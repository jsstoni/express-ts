import compression from 'compression';
import express, { Application } from 'express';

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to compress responses
app.use(compression());

export { app };

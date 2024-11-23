/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import cors from 'cors';
import express from 'express';

import productRoutes from './routes/products';

const app = express();

// Enable CORS
app.use(cors());

// Add more routes here, orders etc
app.use('/api/products', productRoutes);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/products`);
});

server.on('error', console.error);

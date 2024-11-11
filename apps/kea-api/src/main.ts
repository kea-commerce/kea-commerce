/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import path from 'node:path';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (request, response) => {
  response.send({ message: 'Welcome to kea-api!' });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);

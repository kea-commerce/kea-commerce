import express, { type Router } from 'express';

const router: Router = express.Router();

router.post('/', (request, response, next) => {
  console.log('body:', request.body);
  response.status(200).send(request.body);
});

export default router;

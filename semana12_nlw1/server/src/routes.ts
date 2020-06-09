import express from 'express';
import upload from './config/multer';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();


routes.get('/items', itemsController.index);

routes.post('/points', upload.single('image'), pointsController.create);
// routes.post('/points', upload.array('images'), pointsController.create); // para receber mais de uma imagem
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;

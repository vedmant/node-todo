import express from 'express';
import config from './config';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import setupController from './controllers/setup-controller';
import apiController from './controllers/api-controller';
dotenv.config();

const app = express();
const port = process.env.port || 3000;

app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.database.connectionString());
setupController(app);
apiController(app);

app.listen(port);

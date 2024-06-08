import express from 'express';
import bodyParser from 'body-parser';
import coursesRouter from './routes/courses-routes';
import * as dotenv from 'dotenv';

dotenv.config(); // Load the environment variables from .env to process.env object

const PORT = 5000;
const app = express();

const version = '1.0.1';
console.log('Starting backend version:', version);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/version', (req, res) => {
  res.send(version);
});

app.use('/api/courses', coursesRouter);

app.listen(PORT, () => {
  console.log('App started at', PORT);
});

import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import todoRouter from './routes/todo';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use('/', todoRouter);


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
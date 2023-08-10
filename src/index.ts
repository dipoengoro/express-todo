import 'dotenv/config';
import express, {NextFunction, Request, Response} from 'express';
import bodyParser from 'body-parser';
import Default from './util/default';
import MyError from './models/my-error';
import todoRouter from './routes/todo';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use('/', todoRouter);

app.use((e: MyError, _req: Request, res: Response, _next: NextFunction) => {
  const {message, code} = e;
  if (e.data) {
    return res.status(code).json({
      message: message,
      data: e.data
    });
  }
  res.status(code).json({message: message});
});


app.listen(PORT, () => {
  console.log(Default.LISTENING(PORT));
});
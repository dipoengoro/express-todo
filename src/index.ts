import 'dotenv/config';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res, next) => {
  res.status(200).json({message: 'It works'});
});


app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}/`);
});
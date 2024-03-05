// @deno-types="npm:@types/cors@2"
import cors from 'npm:cors@2.8.5';
import { currencies } from './consts.ts';
// @deno-types="npm:@types/express@4"
import express from 'npm:express@4.18.2';

const app = express();
app.use(cors());

app.get('/', (_req, res) => {
  res.send('Welcome to the Dinosaur API!');
});

app.get('/getCurrencies', (_req, res) => {
  res.send(JSON.stringify(currencies));
});

app.listen(8000);

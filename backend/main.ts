import { currencies } from './consts.ts';
// @deno-types="npm:@types/express@4"
import express from 'npm:express@4.18.2';

const app = express();

app.get('/', (_req, res) => {
  res.send('Welcome to the Dinosaur API!');
});

app.get('/getCurrencies', (_req, res) => {
  res.send(JSON.stringify(currencies));
});

app.listen(8000);

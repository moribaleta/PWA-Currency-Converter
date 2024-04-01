// @deno-types="npm:@types/cors@2"
import cors from 'npm:cors@2.8.5';
import { currencies } from './consts.ts';
// @deno-types="npm:@types/express@4"
import express from 'npm:express@4.18.2';
import { QueryManager } from './queryManager.ts';
import { Query } from './types.ts';

const app = express();
app.use(cors());
app.use(express.json());
//app.use(bodyParser.json());

app.get('/', (_req, res) => {
  res.send('Welcome to the Dinosaur API!');
});

app.get('/getCurrencies', (_req, res) => {
  res.send(JSON.stringify(currencies));
});

app.post('/addQuery', (req, res) => {
  //console.log('@addQuery', req.body);
  const query = req.body as Query;
  console.log(query);
  QueryManager.addQuery(query);
  res.send({ success: true });
});

app.get('/getQueries', (_req, res) => {
  const queries = QueryManager.getQueries();
  res.send(JSON.stringify(queries));
});

app.listen(8000);

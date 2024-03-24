// @deno-types="npm:@types/cors@2"
import cors from 'npm:cors@2.8.5';
import { currencies } from './consts.ts';
// @deno-types="npm:@types/express@4"
import express from 'npm:express@4.18.2';
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const app = express();
app.use(cors());

app.get('/', (_req, res) => {
  res.send('Welcome to the Dinosaur API!');
});

app.get('/getCurrencies', (_req, res) => {
  res.send(JSON.stringify(currencies));
});

const options = {
  schema: 'public',
  headers: { 'x-my-custom-header': 'my-app-name' },
  autoRefreshToken: true,
  persistSession: true,
  detectSessionInUrl: true,
};

const supabase = createClient(
  'https://jefuwuiydynsyyxrubdh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplZnV3dWl5ZHluc3l5eHJ1YmRoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTEwNjg5NDcsImV4cCI6MjAyNjY0NDk0N30.i8d9aZhz6EeEbs1V28685jjFsYMkSzibveguFRefLI8',
);

app.get('/server', (_req, res) => {
  res.send(JSON.stringify(currencies));
});

app.listen(8000);

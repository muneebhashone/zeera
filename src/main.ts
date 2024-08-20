import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { logger } from 'hono/logger';

const app = new Hono();
app.use(logger());

app.get('/', async (c) => {
  const search = c.req.queries();

  return c.json({ search: search });
});

serve(app, (info) => {
  console.log(info);
});

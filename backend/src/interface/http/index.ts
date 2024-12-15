import { Hono } from 'hono';
import { serve } from '@hono/node-server';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello, world!');
});

// Utilisation de Node.js pour configurer le port
const PORT = 3000;

serve(app).listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

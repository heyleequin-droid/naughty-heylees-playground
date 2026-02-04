import express from 'express';
import path from 'path';
import { barMenu } from './barMenu';

const app = express();

// Serve static assets: prefer built client, fallback to public
const clientDist = path.join(process.cwd(), 'dist', 'client');
const publicDir = path.join(process.cwd(), 'public');

if (require('fs').existsSync(clientDist)) {
  app.use(express.static(clientDist));
} else {
  app.use(express.static(publicDir));
}

app.get('/api/menu', (_req, res) => {
  res.json(barMenu);
});

// SPA fallback to index.html from clientDist when available
app.get('*', (_req, res) => {
  const indexInClient = path.join(clientDist, 'index.html');
  const indexInPublic = path.join(publicDir, 'index.html');
  if (require('fs').existsSync(indexInClient)) return res.sendFile(indexInClient);
  if (require('fs').existsSync(indexInPublic)) return res.sendFile(indexInPublic);
  res.status(404).send('Not found');
});

export default app;

import express from 'express';
import cors from 'cors';

// Fake "database" – later replace with Prisma
const categories = [
  { id: 1, name: 'Monitory', slug: 'monitors' },
  { id: 2, name: 'Laptopy', slug: 'laptops' },
  { id: 3, name: 'Smartfony', slug: 'smartphones' },
];

const app = express();
require('dotenv').config();

const serverPort = process.env.SERVER_PORT;
const clientUrl = process.env.CLIENT_URL;

app.use(cors({ origin: `${clientUrl}` }));

app.get('/api/health', (req, res) => {
  res.send('Ok, server Express is running');
});

// app.get('/api/categories', (req, res) => {
//   res.json(categories);
// });

app.get('/api/categories/:slug', (req, res) => {
  const category = categories.find((c) => c.slug === req.params.slug);

  if (!category) {
    res.status(404).json({ error: 'Category not found', errorCode: 'NOT_FOUND' });
    return;
  }

  res.json(category);
});
// app.get('/api/products', (req, res) => {
//   res.send('Products');
// });
// app.get('/api/products/:slug', (req, res) => {
//   res.send(`Product: ${req.params.slug}`);
// });

app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});

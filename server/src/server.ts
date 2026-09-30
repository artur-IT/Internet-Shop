import express from 'express';
import cors from 'cors';
import categoryRoutes from './routes/category.routes';
import { categories } from '../prisma/seed';

const app = express();
require('dotenv').config();

const serverPort = process.env.SERVER_PORT;
const clientUrl = process.env.CLIENT_URL;

app.use(cors({ origin: `${clientUrl}` }));

app.get('/api/health', (req, res) => {
  res.send('Ok, server Express is running');
});

// app.get('/api/category', (req, res) => {
//   res.json(categories);
// });
app.use('/api/category', categoryRoutes);
app.get('/api/category/:slug', categoryRoutes);

// app.get('/api/category/:slug', (req, res) => {
//   const category = categories.find((c) => c.slug === req.params.slug);

//   if (!category) {
//     res.status(404).json({ error: 'Category not found' });
//     return;
//   }

//   res.json(category);
// });
// app.get('/api/products', (req, res) => {
//   res.send('Products');
// });
// app.get('/api/products/:slug', (req, res) => {
//   res.send(`Product: ${req.params.slug}`);
// });

app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});

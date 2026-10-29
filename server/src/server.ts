import express from 'express';
import cors from 'cors';
import categoryRoutes from './routes/category.routes';
import productsRoutes from './routes/products.routes';

const app = express();
require('dotenv').config();

const serverPort = process.env.SERVER_PORT;
const clientUrl = process.env.CLIENT_URL;

app.use(cors({origin: `${clientUrl}`}));

app.get('/api/health', (req, res) => {
  res.send('Ok, server Express is running');
});

app.use('/api/category', categoryRoutes);
app.use('/api/products', productsRoutes);

app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});

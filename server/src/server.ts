import express from 'express';
import cors from 'cors';
import categoryRoutes from './routes/category.routes';
import productsRoutes from './routes/products.routes';
import searchRoutes from './routes/search.routes';
import cartRoutes from './routes/cart.routes';
import orderRoutes from './routes/order-history.routes';
import authRoutes from './routes/auth.routes';
import ordersRoutes from './routes/order-history.routes';

const app = express();
require('dotenv').config();
app.use(express.json());

const serverPort = process.env.SERVER_PORT;
const clientUrl = process.env.CLIENT_URL;

app.use(cors({origin: `${clientUrl}`}));

app.get('/api/health', (req, res) => {
  res.send('Ok, server Express is running');
});

app.use('/api/category', categoryRoutes);
app.use('/api/product', productsRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order-history', orderRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/orders', ordersRoutes);

app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});

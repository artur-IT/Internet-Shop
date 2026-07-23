import express from 'express';
import cors from 'cors';

const app = express();
require('dotenv').config()

const serverPort = process.env.SERVER_PORT
const clientUrl = process.env.CLIENT_URL

app.use(cors({origin: `${clientUrl}`}));

app.get('/api/health', (req, res) => {
  res.send('Ok, server Express is running');
});

app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
});

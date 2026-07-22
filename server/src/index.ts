console.log('Hello World from server');

import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({origin: 'http://localhost:5173'}));

app.get('/api/health', (req, res) => {
  res.send('Ok, server Express is running');
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

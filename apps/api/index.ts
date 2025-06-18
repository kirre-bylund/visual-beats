import express from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('API is running');
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});

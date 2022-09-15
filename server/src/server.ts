import express from 'express';

const app = express();

app.get('/', (req, res) => {
  return res.json({ ok: true });
});

app.listen(3333, () => {
  console.log('Example app listening on port 3333!');
});

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const french = new Intl.DateTimeFormat('fr', { weekday: 'long' });

  res.send(
    `Bonjour Node.js ${process.version}.
    Aujourd'hui nous sommes ${french.format(new Date())}`
  );
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});

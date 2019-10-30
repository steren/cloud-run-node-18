const express = require('express');
const app = express();

app.get('/', (req, res) => {

  // Node.js 13 has better internationalization built internationalization
  // Read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
  const french = new Intl.DateTimeFormat('fr', { weekday: 'long' });

  res.send(
    `Hello Node.js ${process.version}.
    Aujourd'hui nous sommes ${french.format(new Date())}`
  );
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});
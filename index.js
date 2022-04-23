import express from 'express';

const app = express();

app.get('/', async (req, res) => {
  const french = new Intl.DateTimeFormat('fr', { weekday: 'long' });

  // see https://www.weather.gov/documentation/services-web-api
  const response = await fetch('https://api.weather.gov/gridpoints/MTR/85,105/forecast');
  const weatherData = await response.json();

  res.send(
    `
    Congrats, you're running  Node.js ${process.version}.<br><br>
    Thanks to <code>Intl</code>, it's easy to format dates: "Aujourd'hui nous sommes ${french.format(new Date())}".<br>
    Thanks to <code>fetch()</code>, we can get the weather forecast for San Francisco: ${weatherData?.properties?.periods[0]?.detailedForecast}<br>
    `
  );
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Node.js demo is listening on port', port);
});

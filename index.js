import express from 'express';

const app = express();

app.get('/', (req, res) => {
  const french = new Intl.DateTimeFormat('fr', { weekday: 'long' });

  // see https://www.weather.gov/documentation/services-web-api
  const res = await fetch('https://api.weather.gov/gridpoints/MTR/85,105/forecast');
  const weatherData = await res.json();

  res.send(
    `Congrats, you're running  Node.js ${process.version}.

    Thanks to Intl, it's easy to format dates: "Aujourd'hui nous sommes ${french.format(new Date())}".
    
    Thanks to fetch, we can get the weather forcast for San Francisco: ${weatherData.properties.periods[0]?.detailedForecast}.
    `
  );
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log('Hello world listening on port', port);
});

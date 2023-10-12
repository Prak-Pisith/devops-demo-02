const express = require('express');

const app = express();

const port = process.env.PORT || 3000;


app.use('/', (req, res) => {
  res.send(`
  <h2>Welcome to the Application</h2>
  <h3>These API running on Docker containers</h3>
  <h3>For learning purpose.</h3>
  <h3>Listening to Runnin-Adam</h3>
  <h3>Listening to Roar-Katty</h3>
  `);
})


app.listen(port, () => console.log('Application listening on port: ' + port));
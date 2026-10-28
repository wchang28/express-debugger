const express = require('express');
const app = express();
const hostname = process.env.HOSTNAME || "0.0.0.0";
const port = process.env.PORT || 8080;

// install the log middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}]: host=${req.connection.remoteAddress},method=${req.method},url=${req.originalUrl},headers=${JSON.stringify(req.headers)},query=${JSON.stringify(req.query)}\n`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/health', (req, res) => {
  res.send('Good');
});

app.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});
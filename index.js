const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const PORT = process.env.PORT || 3000;

const ACCESS_KEY = process.env.ACCESS_KEY;
const SECRET_KEY = process.env.SECRET_KEY;

app.get('/generate-token', (req, res) => {
  const payload = {
    accessKey: ACCESS_KEY,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 300
  };

  const token = jwt.sign(payload, SECRET_KEY);
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`JWT generator running on port ${PORT}`);
});

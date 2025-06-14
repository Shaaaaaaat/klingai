const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const PORT = process.env.PORT || 3000;

const ACCESS_KEY = process.env.ACCESS_KEY;
const SECRET_KEY = process.env.SECRET_KEY;

app.get('/generate-token', (req, res) => {
  const token = jwt.sign(
    {},
    SECRET_KEY,
    {
      algorithm: 'HS256',
      expiresIn: '30m',
      notBefore: '5s',
      issuer: ACCESS_KEY
    }
  );
  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`JWT generator running on port ${PORT}`);
});

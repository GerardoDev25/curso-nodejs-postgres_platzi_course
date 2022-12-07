const jwt = require('jsonwebtoken');

const secret = 'mysecret';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY3MDQzMTkzNn0.-cs8syAaBEpFkaymWyuvmS8L1s4c1bLMGjk3Gn4MiN4';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const value = verifyToken(token, secret);

console.log(value);

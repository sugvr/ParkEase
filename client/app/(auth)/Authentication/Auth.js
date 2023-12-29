// utils/auth.js

const jwt = require('jsonwebtoken');

const secretKey = 'mI8sZu$yEwBq4tH&dRgUkXn2p5s8v/A?D(G+KbPeShVmYq3t6w9z$C&F)J@NcRf';

const generateToken = (userId) => {
  const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' }); // Token expires in 1 hour
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null; 
  }
};

module.exports = { generateToken, verifyToken };

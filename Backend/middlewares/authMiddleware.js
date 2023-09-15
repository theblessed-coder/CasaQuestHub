const jwt = require('jsonwebtoken');
const config = require('../config/jwt');

exports.verifyToken = (req, res, next) => {
  // 1. Extract the token from the request header
  const token = req.headers.authorization;

  // 2. Check if the token is missing
  if (!token) {
    return res.status(401).json({ error: 'Authentication failed. Token missing.' });
  }

  try {
    // 3. Verify the token
    const decoded = jwt.verify(token, config.jwtSecret);

    // 4. Attach the decoded user information to the request object
    req.user = decoded;

    // Continue to the next middleware or route handler
    next();
  } catch (err) {
    // 5. Handle invalid tokens or token expiration errors
    return res.status(401).json({ error: 'Authentication failed. Invalid token.' });
  }
};

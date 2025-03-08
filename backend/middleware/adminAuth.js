import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
  // Log the Authorization header to check if it's being sent properly
  
  // Check if the Authorization header exists
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  // Extract the token from the Authorization header (assumes the header is in "Bearer <token>" format)
  const token = authHeader.split(' ')[1]; // Extract the token
  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  try {
    // Verify the token using JWT secret from environment variable
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach the decoded user info to the request object

    // Pass control to the next middleware or route handler
    next();
  } catch (err) {
    // If token verification fails, respond with an error
    res.status(403).json({ message: 'Invalid token', error: err.message });
  }
};

export default adminAuth;

import jwt from 'jsonwebtoken';

// Middleware to check the user's role
const roleCheck = (roles = []) => {
  return (req, res, next) => {
    // If no roles are provided, just proceed to the next middleware
    if (roles.length === 0) {
      return next();
    }

    // Get token from Authorization header
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
      // Verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // Attach the user data to the request object

      // Check if the user has the required role
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Forbidden. You do not have the necessary role.' });
      }

      // If everything is good, proceed to the next middleware
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token.' });
    }
  };
};

export default roleCheck;

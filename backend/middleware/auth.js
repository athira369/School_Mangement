import jwt from 'jsonwebtoken';
const auth = (roles = []) => {
  return (req, res, next) => {
    console.log(req.header('Authorization'));

    const token = req.header('Authorization');

    try {
      // Extract and verify the token
      const token = req.header('Authorization')?.replace('Bearer ', '');
      if (!token) return res.status(401).json({ message: 'No token provided' });
      
      console.log(token);
      console.log(process.env.JWT_SECRET);

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log(decoded);

      req.user = decoded;

      // Check role access
      if (roles.length && !roles.includes(req.user.role)) {
        return res.status(403).json({ message: 'Access denied' });
      }

      next();
    } catch (err) {
      console.error(err);
      res.status(401).json({ message: 'Invalid token' });
    }
  };
};

export default auth;

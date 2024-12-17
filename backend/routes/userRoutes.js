const express = require('express');
const router = express.Router();
const {
  registerUser,
  loginUser,
  getUsers,
  deleteUser,
} = require('../controllers/userController'); // Importing the user controller functions
const auth = require('../middleware/auth'); // Middleware for authentication

// POST /api/users/register - Register a new user
router.post('/register', auth(['admin']), registerUser);

// POST /api/users/login - Login a user
router.post('/login', loginUser);

// GET /api/users - Get all users (admin only)
router.get('/', auth(['admin']), getUsers);

// DELETE /api/users/:id - Delete a specific user (admin only)
router.delete('/:id', auth(['admin']), deleteUser);
//  Example of a protected route
router.get('/protected-endpoint', auth(['admin']), (req, res) => {
  res.status(200).json({ message: 'You have access to this protected endpoint' });
});

module.exports = router;

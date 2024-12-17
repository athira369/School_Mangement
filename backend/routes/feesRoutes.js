const express = require('express');
const router = express.Router();
const {
  addFeeRecord,
  getFeeRecords,
  updateFeeRecord,
  deleteFeeRecord,
} = require('../controllers/feesController'); // Importing the fees controller functions
const auth = require('../middleware/auth'); // Middleware for authentication

// POST /api/fees - Add a new fee record
router.post('/', auth(['admin', 'office_staff']), addFeeRecord);

// GET /api/fees - Get all fee records
router.get('/', auth(['admin', 'office_staff']), getFeeRecords);

// PUT /api/fees/:id - Update a specific fee record
router.put('/:id', auth(['admin', 'office_staff']), updateFeeRecord);

// DELETE /api/fees/:id - Delete a specific fee record
router.delete('/:id', auth(['admin']), deleteFeeRecord);

module.exports = router;

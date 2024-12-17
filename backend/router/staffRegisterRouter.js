import express from 'express';
import * as staffRegisterController from '../controllers/staffRegisterController.js';

const router = express.Router();

// Route for staff registration
router.post('/register', staffRegisterController.register);

//  // Route for staff login
//  router.post('/login', staffRegisterController.login);

// // Route to get details of a specific staff by ID
// router.get('/:id', staffRegisterController.getStaffById);

// // Route to get all staff members
// router.get('/', staffRegisterController.getAllStaff);

// // Route to update staff details
// router.put('/:id', staffRegisterController.updateStaff);

// // Route to delete a staff member
// router.delete('/:id', staffRegisterController.deleteStaff);

export default router;

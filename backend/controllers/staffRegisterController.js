// import Staff from "../models/staffRegisterSchema.js"
import Staff from "../models/staffRegisterSchema.js";

// Register staff
export const register = async (staffData) => {
  try {
    debugger;
    const { Id, firstName, lastName, email, role, contactNumber, address, joiningDate, password } = staffData;
    debugger
    // Check if staff already exists
    const existingStaff = await Staff.findOne({ email });
    if (existingStaff) {
      throw new Error('Staff already exists');
    }
    debugger
    // Create a new staff record
    const newStaff = new Staff({
      Id,
      firstName,
      lastName,
      email,
      role,
      contactNumber,
      address,
      joiningDate,
      password, // Remember to hash the password before saving it
    });
    debugger

    // Save staff to the database
    const savedStaff = await newStaff.save();
    debugger

    // Log the message based on the role
    console.log(`${savedStaff.role} registered successfully!`); // This will print the role to the console

    return savedStaff;
  } catch (error) {
    debugger
    throw new Error(error.message);
  }
};

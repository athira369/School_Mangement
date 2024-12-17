import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; // For password hashing

const staffRegisterSchema = new mongoose.Schema(
  {
    Id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Invalid email address'], // Basic email validation
    },
    role: {
      type: String,
      required: true,
      enum: ['Teacher', 'Admin', 'Librarian', 'Office Staff'], // Allowed roles
      default: 'Teacher',
    },
    contactNumber: {
      type: String,
      trim: true,
      match: [/^\d{10}$/, 'Invalid contact number'], // Basic validation for 10-digit numbers
    },
    address: {
      type: String,
      trim: true,
    },
    joiningDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // Minimum password length
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // Automatically manages createdAt and updatedAt fields
);

// Pre-save hook to hash the password before saving
staffRegisterSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Static method to compare passwords during login
staffRegisterSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Staff = mongoose.model('Staff', staffRegisterSchema);

export default Staff;

// /backend/models/memberSchema.js

import mongoose from 'mongoose';

// Define the schema for a member
const memberSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,  // Ensure the email is unique
      lowercase: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Please enter a valid email address']
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true
    },
    membershipStartDate: {
      type: Date,
      required: true,
      default: Date.now
    },
    membershipEndDate: {
      type: Date,
    },
    membershipStatus: {
      type: String,
      enum: ['active', 'inactive', 'suspended'],
      default: 'active'
    },
    address: {
      street: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      state: {
        type: String,
        required: true
      },
      zip: {
        type: String,
        required: true
      }
    },
    booksBorrowed: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    }],
    fines: [{
      amount: {
        type: Number,
        default: 0
      },
      date: {
        type: Date,
        default: Date.now
      },
      reason: {
        type: String
      }
    }]
  },
  { timestamps: true }  // Automatically add createdAt and updatedAt fields
);

// Create and export the Member model
const Member = mongoose.model('Member', memberSchema);

export default Member;

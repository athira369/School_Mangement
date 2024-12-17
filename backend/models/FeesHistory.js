const mongoose = require('mongoose');

const feesHistorySchema = new mongoose.Schema({
  student: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Student',  // Reference to the Student model
    required: true 
  },
  amount: { 
    type: Number, 
    required: true 
  },
  paidOn: { 
    type: Date, 
    default: Date.now  // Defaults to the current date when the record is created
  },
  status: { 
    type: String, 
    enum: ['paid', 'unpaid', 'partially paid'], 
    default: 'unpaid' 
  },
  paymentMethod: { 
    type: String, 
    enum: ['cash', 'bank transfer', 'cheque', 'online'], 
    required: true 
  },
  receiptNumber: { 
    type: String, 
    unique: true 
  },
  dueDate: { 
    type: Date, 
    required: true 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Optional: Virtual field to calculate the balance (if applicable)
feesHistorySchema.virtual('balance').get(function() {
  return this.status === 'paid' ? 0 : this.amount;
});

module.exports = mongoose.model('FeesHistory', feesHistorySchema);

const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  class: { type: String, required: true },
  feesHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'FeesHistory' }],
  libraryHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LibraryHistory' }],
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);

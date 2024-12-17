const FeesHistory = require('../models/FeesHistory');

// Add a fee record
const addFeeRecord = async (req, res) => {
  try {
    const feeRecord = new FeesHistory(req.body);
    await feeRecord.save();
    res.status(201).json(feeRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all fee records
const getFeeRecords = async (req, res) => {
  try {
    const feeRecords = await FeesHistory.find();
    res.status(200).json(feeRecords);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a fee record
const updateFeeRecord = async (req, res) => {
  try {
    const feeRecord = await FeesHistory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!feeRecord) {
      return res.status(404).json({ message: 'Fee record not found' });
    }
    res.status(200).json(feeRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a fee record
const deleteFeeRecord = async (req, res) => {
  try {
    const feeRecord = await FeesHistory.findByIdAndDelete(req.params.id);
    if (!feeRecord) {
      return res.status(404).json({ message: 'Fee record not found' });
    }
    res.status(200).json({ message: 'Fee record deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addFeeRecord,
  getFeeRecords,
  updateFeeRecord,
  deleteFeeRecord,
};

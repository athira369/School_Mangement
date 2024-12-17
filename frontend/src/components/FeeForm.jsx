import React, { useState } from 'react';

function FeeForm({ onSubmit, fee }) {
  const [studentId, setStudentId] = useState(fee?.studentId || '');
  const [amount, setAmount] = useState(fee?.amount || '');
  const [paidOn, setPaidOn] = useState(fee?.paidOn || '');
  const [status, setStatus] = useState(fee?.status || 'unpaid');
  const [paymentMethod, setPaymentMethod] = useState(fee?.paymentMethod || 'cash');
  const [receiptNumber, setReceiptNumber] = useState(fee?.receiptNumber || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const feeData = { studentId, amount, paidOn, status, paymentMethod, receiptNumber };
    onSubmit(feeData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded">
      <h2 className="text-2xl mb-4">{fee ? 'Update Fee Record' : 'Add Fee Record'}</h2>
      <input
        type="text"
        placeholder="Student ID"
        value={studentId}
        onChange={(e) => setStudentId(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
        required
      />
      <input
        type="date"
        placeholder="Paid On"
        value={paidOn}
        onChange={(e) => setPaidOn(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
        required
      >
        <option value="unpaid">Unpaid</option>
        <option value="paid">Paid</option>
        <option value="partially paid">Partially Paid</option>
      </select>
      <select
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
        required
      >
        <option value="cash">Cash</option>
        <option value="bank transfer">Bank Transfer</option>
        <option value="cheque">Cheque</option>
        <option value="online">Online</option>
      </select>
      <input
        type="text"
        placeholder="Receipt Number"
        value={receiptNumber}
        onChange={(e) => setReceiptNumber(e.target.value)}
        className="block w-full p-3 mb-4 border border-gray-300 rounded"
        required
      />
      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
        {fee ? 'Update Fee Record' : 'Add Fee Record'}
      </button>
    </form>
  );
}

export default FeeForm;

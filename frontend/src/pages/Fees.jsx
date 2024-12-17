import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../components/Table';
import FeeForm from '../components/FeeForm';

function Fees() {
  const [fees, setFees] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFee, setSelectedFee] = useState(null);

  // Fetch fee records from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/fees')
      .then(response => setFees(response.data))
      .catch(error => console.error(error));
  }, []);

  // Handle form submission for adding or updating fee records
  const handleFormSubmit = (feeData) => {
    if (isEditing) {
      // Update fee record
      axios.put(`http://localhost:5000/api/fees/${selectedFee._id}`, feeData)
        .then(() => {
          setFees(prev => prev.map(fee => fee._id === selectedFee._id ? { ...fee, ...feeData } : fee));
          setIsEditing(false);
          setSelectedFee(null);
        })
        .catch(error => console.error(error));
    } else {
      // Add new fee record
      axios.post('http://localhost:5000/api/fees', feeData)
        .then(response => setFees([...fees, response.data]))
        .catch(error => console.error(error));
    }
  };

  // Handle editing fee record
  const handleEditFee = (fee) => {
    setIsEditing(true);
    setSelectedFee(fee);
  };

  // Table columns
  const columns = ['Student', 'Amount', 'Paid On', 'Status', 'Actions'];

  const data = fees.map(fee => ({
    ...fee,
    actions: (
      <button onClick={() => handleEditFee(fee)} className="text-blue-600 hover:underline">
        Edit
      </button>
    ),
  }));

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Fees</h1>
      <FeeForm onSubmit={handleFormSubmit} fee={selectedFee} />
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Fees;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { register } from "../../services/RegisterService"; // Import register service to make the API call

const Register = () => {
  const [formData, setFormData] = useState({
    Id: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "Teacher", // Default role is Teacher
    contactNumber: "",
    address: "",
    joiningDate: "",
    password: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    debugger
    e.preventDefault();
    try {
      const response = await register(formData);
      setResponseMessage(`${formData.role} registered successfully!`);
      console.log("Response:", response);

      // After successful registration, navigate to respective dashboard based on the role
      if (formData.role === "Admin") {
        navigate("/admin/dashboard"); // Navigate to Admin Dashboard
      } else if (formData.role === "Office Staff") {
        navigate("/office-dashboard"); // Navigate to Office Staff Dashboard
      } else if (formData.role === "Librarian") {
        navigate("/librarian-dashboard"); // Navigate to Librarian Dashboard
      } else {
        navigate("/teacher-dashboard"); // Navigate to Teacher Dashboard (default)
      }

      // Clear form fields
      setFormData({
        Id: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "Teacher",
        contactNumber: "",
        address: "",
        joiningDate: "",
        password: "",
      });
    } catch (error) {
      debugger;
      console.error("Error registering staff:", error);
      setResponseMessage("Failed to register staff. Please try again.");
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="bg-white p-8 rounded-md shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Register New {formData.role}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Fields for staff */}
        <div>
          <label className="block text-sm font-medium">ID</label>
          <input
            type="text"
            name="Id"
            value={formData.Id}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
          >
            <option value="Teacher">Teacher</option>
            <option value="Admin">Admin</option>
            <option value="Office Staff">Office Staff</option>
            <option value="Librarian">Librarian</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Joining Date</label>
          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mr-2"
        >
          Register {formData.role}
        </button>

        <button
          type="button"
          onClick={handleBack}
          className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 mt-4"
        >
          Back
        </button>

        {responseMessage && (
          <p className="text-sm text-green-500 mt-2">{responseMessage}</p>
        )}
      </form>
    </div>
  );
};

export default Register;

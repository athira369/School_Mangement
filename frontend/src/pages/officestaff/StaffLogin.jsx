import React, { useState } from "react";
import {login} from "../../services/RegisterService.js";

const StaffLogin = () => {
  const [loginData, setLoginData] = useState({
    staffId: "",
    password: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(loginData); // API call
      setResponseMessage("Login successful!");
      console.log("Logged in:", response);
      // Redirect to dashboard or handle session
    } catch (error) {
      console.error("Error logging in:", error);
      setResponseMessage("Invalid staff ID or password.");
    }
  };

  return (
    <div className="bg-white p-8 rounded-md shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-6">Staff Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Staff ID */}
        <div>
          <label className="block text-sm font-medium">Staff ID</label>
          <input
            type="text"
            name="staffId"
            value={loginData.staffId}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        {/* Password */}
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
        {responseMessage && (
          <p className="text-sm text-red-500 mt-2">{responseMessage}</p>
        )}
      </form>
    </div>
  );
};

export default StaffLogin;

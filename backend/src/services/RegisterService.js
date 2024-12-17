import axios from "axios";

const API_URL = "http://localhost:5000/api/v1/staff"; // Backend URL

// Register Staff
export const register = async (staffData) => {
  try {
    debugger
    const response = await axios.post(`${API_URL}/register`, staffData);
    debugger
    return response.data;
  } catch (error) {
    debugger
    console.error("Error registering :", error);
    throw error;
  }
};

// Login Staff
export const login = async (loginData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, loginData);
    return response.data;
  } catch (error) {
    console.error("Error logging :", error);
    throw error;
  }
};

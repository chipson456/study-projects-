import React, { useState } from "react";
import axios from "axios";

function UserRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to the server
      const response = await axios.post("http://localhost:5000/register", formData);
      setMessage(response.data.message); // Display success message
    } catch (error) {
      setMessage("Failed to register user. Please try again.");
    }
  };

  return (
    <div style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
      <h2>Register New User</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "green", color: "white" }}>
          Submit
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default UserRegistrationForm;

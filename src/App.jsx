import React, { useState } from "react";
import UserRegistrationForm from "./components/UserRegistrationForm";

function App() {
  // State to control form visibility
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true); // Show the form on button click
  };

  return (
    <div>
      <button onClick={handleButtonClick} style={{ padding: "10px 20px", backgroundColor: "blue", color: "white" }}>
        Register New User
      </button>
      {showForm && <UserRegistrationForm />}
    </div>
  );
}

export default App;

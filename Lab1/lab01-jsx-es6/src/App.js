import React, { useState } from "react";
import InfoPage from "./InfoPage";
import TaskC from "./taskc";
const Welcome = () => {
  const [name, setName] = useState("React");
  const [message, setMessage] = useState(`Hello, welcome to ${name}!`);
  // Event handler (arrow function)
  const handleChange = (e) => setName(e.target.value);
  const handleClick = () => setMessage(`Hello, welcome to ${name}!`);
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>{message}</h1>
      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter a name"
      />
      <button onClick={handleClick}>Change Message</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <Welcome />
      <InfoPage />
      <TaskC />
    </div>
  );
}
export default App;

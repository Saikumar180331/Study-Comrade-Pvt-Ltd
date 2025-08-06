import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${name}!`);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact Page</h2>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <button>Submit</button>
    </form>
  );
}

export default Contact;

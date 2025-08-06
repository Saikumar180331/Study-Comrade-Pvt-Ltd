import React, { useState } from "react";

function Task24_LoginFunction() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || password.length < 6) {
      setError("Invalid email or password (must be 6+ characters)");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Login Form (Functional Component)</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Login</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {submitted && (
        <div>
          <h4>Login Success</h4>
          <p>Email: {email}</p>
        </div>
      )}
    </div>
  );
}

export default Task24_LoginFunction;

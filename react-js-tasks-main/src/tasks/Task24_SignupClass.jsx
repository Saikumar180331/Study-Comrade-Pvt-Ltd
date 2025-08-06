import React, { Component } from "react";

class Task24_SignupClass extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    submitted: false,
    error: ""
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = this.state;

    if (!name || !email || password.length < 6) {
      this.setState({ error: "Please fill all fields. Password must be 6+ characters." });
      return;
    }

    this.setState({ submitted: true, error: "" });
  };

  render() {
    const { name, email, password, submitted, error } = this.state;

    return (
      <div>
        <h2>Signup Form (Class Component)</h2>
        <form onSubmit={this.handleSubmit}>
          <input name="name" placeholder="Name" value={name} onChange={this.handleChange} />
          <input name="email" type="email" placeholder="Email" value={email} onChange={this.handleChange} />
          <input name="password" type="password" placeholder="Password" value={password} onChange={this.handleChange} />
          <button type="submit">Sign Up</button>
        </form>

        {error && <p style={{ color: "red" }}>{error}</p>}
        {submitted && (
          <div>
            <h4>Submitted Data:</h4>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Task24_SignupClass;

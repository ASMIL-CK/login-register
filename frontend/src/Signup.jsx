import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Signup.css"; // Import CSS file for styling

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2 className="signup-title">Create an Account</h2>
        <p className="signup-subtitle">Join us today!</p>
        <form onSubmit={handleSubmit} className="signup-form">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            required
            className="signup-input"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            required
            className="signup-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            required
            className="signup-input"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signup-button">Register</button>
        </form>
        <p className="signup-text">Already have an account?</p>
        <Link to="/login" className="login-button">Login</Link>
      </div>
    </div>
  );
}

export default Signup;

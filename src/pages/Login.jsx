import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  return (
    <section className="login-container">
      <div className="login-card">
        <div>
          <form className="login-form" onSubmit={(e) => submitHandler(e)}>
            <label htmlFor="username">Log In</label>
            <input
              className="email-input"
              id="username"
              type="text"
              placeholder="Email *"
            />
            <button className="primary-btn continue-btn " type="submit">
              Continue
            </button>
          </form>
          <div className="google login">
            <span className="span">or continue with</span>
            <button className="primary-btn">
              <div className="g-content">
                <FcGoogle size={30} /> <div className="g-text">Google</div>
              </div>
            </button>
          </div>
          <div className="register login">
            <span className="span">- New to CraftyCharm? -</span>
            <button className="register-btn ">Register</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

import React, { useState } from "react";
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
            <input id="username" type="text" placeholder="Email *" />
            <button type="submit">Continue</button>
          </form>
          <div className="google login">
            <span>-or login with Google-</span>
            <button>Google</button>
          </div>
          <div className="register login">
            <span>-New to CraftyCharm?-</span>
            <button>Register</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;

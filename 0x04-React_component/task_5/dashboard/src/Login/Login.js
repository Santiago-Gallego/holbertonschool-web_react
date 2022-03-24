import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <div className="App-login">
        <p>Login to access the full dashboard</p>
        <form>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Password:
            <input type="text" nam="password" />
          </label>
          <button>OK</button>
        </form>
      </div>
    </>
  );
};

export default Login;

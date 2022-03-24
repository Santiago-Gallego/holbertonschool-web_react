import React from "react";
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <div className="App-login">
      <div className={css(styles.loginStyle)}>
        <p className={css(styles.loginPStyle)}>Login to access the full dashboard</p>
        <form className={css(styles.loginFormStyle)}>
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
    </div>
  );
};

const styles = StyleSheet.create({
  loginStyle: {
    minHeight: 150,
    margin: '40px auto 150px auto',
  },

  loginPStyle: {
    margin: '3rem 0rem 0rem 2rem',
  },

  loginFormStyle: {
    margin: '1rem 0rem 2rem 2rem',
  },
})

export default Login;

import React, { useState } from "react";
import "./Login.css";
import login_img from "../../assets/login_logo.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../storage";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    // firebase login goes here.....
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // It successfully created a new user with email and password
        if (userCredential) {
          navigate('/');
        }
        console.log(userCredential);
      })
      .catch((error) => alert(error.message));
  };


  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // It successfully created a new user with email and password
        if (userCredential) {
          navigate('/');
        }
        console.log(userCredential);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={login_img} alt="" className="login-logo" />
      </Link>

      <div className="login-container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password"
          />

          <button type="submit" className="login-signinButton" onClick={signIn}>
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sales.
          Please, see our Privacy Notice, our Cookie notice and our Interest
          Based Ads notice.
        </p>

        <button className="login-registerButton" onClick={register}>
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;

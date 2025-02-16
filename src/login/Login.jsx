import React, { useState } from "react";
import classes from "./Login.module.css";
import icon from "../Icons";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("Login successful", user);

      localStorage.setItem(
        "user",
        JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          accessToken: await user.getIdToken(),
        })
      );

      navigate('/mainPage');
      
      setError("");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("wrong password");
      } else if (error.code === "auth/user-not-found") {
        setError("user-not-found");
      } else {
        setError("login error " + error.message);
      }
      setTimeout(() => setError(""), 5000);
    }
  };

  return (
    <div>
      <div className={classes.login}>
        <div className={classes.loginBody}>
          <div className={classes.loginText}>
            <h2>Login</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className={classes.loginForms}>
              <input
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <img src={icon.email} alt="icon" />
            </div>

            <div className={classes.loginForms}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <img src={icon.lock} alt="icon" />
            </div>

            <button type="submit">Sign In</button>
          </form>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}
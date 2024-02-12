"use client"
import React, { useState } from "react";
import "./loginCompany.css";
import { useRouter } from 'next/navigation';


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
console.log(email,password)
    try {
      // Make a POST request to your server
      const response = await fetch("/api/company/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Response:", data);
        router.push('/dashboard')
    }
    else{
      const data = await response.json();
      window.alert(data)
    }
     
      
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Error:", error);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="split-screen">
      <div className="left">
        <div className="makecenter">
          <section className="copy">
            <h1>Welcome Back To</h1>
            <p>CareerLink</p>
          </section>
        </div>
      </div>

      <div className="right">
        <form onSubmit={handleSubmit}>
          <section className="copy">
            <h2>Find the perfect fit for your Company</h2>
            <div className="login-container">
              <p>
                Don't have an account?
                <a href="#">
                  <strong>Register Now</strong>
                </a>
              </p>
            </div>
          </section>

          <div className="input-container email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="forget">
            Forget password?
            <a href="#">
              <strong>Reset Now</strong>
            </a>
          </div>

            <button className="signup-btn" type="submit" onClick={handleSubmit}>
              Login
            </button>
         

          <section className="copy legal">
            <p>
              <span className="small">
                By continuing, you agree to accept our <br />
                <a href="#">Privacy Policy</a>&amp;
                <a href="#">Terms of Service</a>.
              </span>
            </p>
          </section>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
}

export default Login;
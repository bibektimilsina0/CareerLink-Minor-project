'use client'
import React, { useState } from "react";
import './signupCompany.css'
import { postReq } from "../hooks/service";

import { useRouter } from "next/navigation";
const page = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
    confirmPassword:""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!(formData.password===formData.confirmPassword)){
      window.alert("Password and Confirm Password must be same")
      return {msg:"Password and Confirm Password must be same"}
    }
    console.log(formData)
    const response = await postReq("/api/company/register", formData)
    console.log(response)
    if (!response.error) {
      window.alert(response.msg)
      const router=useRouter()
      router.push('/loginCompany')

    }
    else {
      console.log(response.error)
      window.alert(response.message)

    };
  }
  return (
    <div class="body">
      <div class="split-screen">
        <div class="left">
          <div className="makecenter">

            <section class="copy">
              <h1>Welcome To</h1>
              <p>CareerLink</p>
            </section>
          </div>
        </div>
        <div class="right">
          <form onSubmit={handleSubmit}>
            <section class="copy">

              <div class="login-container">
                <h2>Create an account. It's fast & easy.</h2>
                <p>
                  Already have an account?{" "}
                  <a href="#">
                    <strong>Log In</strong>
                  </a>
                </p>
              </div>
            </section>
            <div className="input-container name">
              <label htmlFor="cname">Company Name</label>
              <input
                type="text"
                id="cname"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="cname"
                placeholder="Full Name"
              />
            </div>

            <div className="input-container email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="email"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="input-container password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="password"
                placeholder="Must be at least 6 characters"
              />
            </div>
            <div className="input-container password">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="password"
                placeholder="Must be at least 6 characters"
              />
            </div>

            <button class="signup-btn" type="submit">
              Affiliate
            </button>
            <section class="copy legal">
              <p>
                <span class="small">
                  By continuing,you agree to accept our <br />
                  <a href="#">Privacy Policy</a>&amp;
                  <a href="#">Terms of Service</a>.
                </span>
              </p>
            </section>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;

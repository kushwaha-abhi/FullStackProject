import React, {  useContext, useState, useEffect } from "react";
import "./Login.css";
import { StoreContext } from "../../Context/storeContext";
import axios from "axios";

const Login = ({ showLogin, setShowLogin }) => {
  const [currentState, setCurrentState] = useState("login");
  const { url , token, setToken } = useContext(StoreContext);
  const toggleForm = () => {
    setCurrentState(currentState === "login" ? "signup" : "login");
  };

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });



  const onChangeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  //  useEffect(() => {console.log(data)},[data]);

  const submitHandler = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currentState === "login") {
      newUrl += "/api/user/login";
    } 
    if(currentState === "signup"){
      newUrl += "/api/user/register";
    }

    try {
      console.log(newUrl);
      const response = await axios.post(newUrl, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.status === 200) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert(error.response?.data?.message || "An error occurred while sub99");
    }
  };

  return (
    <div className={`login-popup ${showLogin ? "show" : ""}`}>
      <div className="login-container">
        <span className="close-btn" onClick={() => setShowLogin(false)}>
          &times;
        </span>
        <h2>{currentState === "login" ? "Login" : "Sign Up"}</h2>
        <form onSubmit={submitHandler}>
          {currentState === "signup" && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                value={data.name}
                onChange={onChangeHandler}
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              value={data.email}
              onChange={onChangeHandler}
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={data.password}
              onChange={onChangeHandler}
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button type="submit" >
            {currentState === "login" ? "Login" : "Sign Up"}
          </button>
        </form>
        <p onClick={toggleForm}>
          {currentState === "login"
            ? "Don't have an account? Sign Up"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
};

export default Login; 

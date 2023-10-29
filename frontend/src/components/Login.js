import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successfull");
      navigate("/");
    }
  };
  return (
    <div>
      <form method="POST">
        <div className="form-group">
          <label htmlFor="email">
            <i className="zmdi zmdi-account material-icons-name">Email</i>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Confirm Your Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cpassword">
            <i className="zmdi zmdi-account material-icons-name">C-Password</i>
          </label>
          <input
            type="password"
            name="cpassword"
            id="cpassword"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Confirm Your Password"
          />
        </div>
        <div className="form-group form-button">
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit"
            value="Login"
            onClick={loginUser}
          />
        </div>
      </form>
      <NavLink to="/register" className="signup">
        New User. Create an account.
      </NavLink>
    </div>
  );
};

export default Login;

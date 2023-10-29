import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <h1>Page not found</h1>
      <NavLink to="/">Back to homepage</NavLink>
    </div>
  );
};

export default Errorpage;

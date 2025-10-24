import React from "react";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <h1>This is header</h1>
      <Outlet></Outlet>
      <p>This is Footer</p>
    </div>
  );
};

export default Root;

import React from "react";
import NavUpdated from "./NavUpdated";

const Layout = ({ children }) => {
  return (
    <div>
      <NavUpdated />
      <div>{children}</div>
    </div>
  );
};

export default Layout;

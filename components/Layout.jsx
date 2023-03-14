import React from "react";
import Guard from "./login/Guard";
import NavUpdated from "./NavUpdated";

const Layout = ({ children }) => {
  return (
    <div>
      <NavUpdated />
      <Guard>{children}</Guard>
    </div>
  );
};

export default Layout;

import React from "react";
import { UseAuth } from "@/context/AuthContext";
import Guard from "./login/Guard";
import NavUpdated from "./NavUpdated";

const Layout = ({ children }) => {
  const { currentUser } = UseAuth();
  return (
    <div>
      <NavUpdated />
      <p>Currently logged in as: &nbsp;{currentUser && currentUser.email}</p>
      <p>UID: &nbsp;{currentUser && currentUser.uid}</p>
      <Guard>{children}</Guard>
    </div>
  );
};

export default Layout;

import React from "react";
import { UseAuth } from "@/context/AuthContext";

const Layout = ({ children }) => {
  const { currentUser } = UseAuth();
  return (
    <div>
      <p>Currently logged in as: &nbsp;{currentUser && currentUser.email}</p>
      <p>UID: &nbsp;{currentUser && currentUser.uid}</p>
      <div>{children}</div>
    </div>
  );
};

export default Layout;

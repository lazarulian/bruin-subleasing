import React from "react";
import { useState, useEffect } from "react";
import { UseAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import LoginRegister from "./LoginRegister";

const Guard = ({ children }) => {
  // Authentication Functions
  const { currentUser } = UseAuth();

  if (currentUser) {
    return <div>{children}</div>;
  } else {
    return (
      <div>
        <LoginRegister />
      </div>
    );
  }
};

export default Guard;

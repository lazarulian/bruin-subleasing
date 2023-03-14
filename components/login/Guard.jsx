import React from "react";
import { useState, useEffect } from "react";
import { UseAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";
import LoginForm from "./LoginForm";

const Guard = ({ children }) => {
  // Authentication Functions
  const { signup, currentUser } = UseAuth();

  if (currentUser) {
    return <div>{children}</div>;
  } else {
    return (
      <div>
        <LoginForm />
      </div>
    );
  }
};

export default Guard;

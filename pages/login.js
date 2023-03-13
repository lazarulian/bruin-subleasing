import LoginForm from "@/components/login/LoginForm";
import React from "react";

const login = () => {
  return (
    <div className="container mx-auto lg:px-10 px-2">
      <div className="flex my-4 items-center justify-center h-screen">
        <div className="h-4/6">
          <div className="text-center justify-center bg-gray-100 p-8 rounded-lg border-slate-300 border-2">
            <h1 className="text-4xl text-semi-bold">Please Login.</h1>
            <br></br>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;

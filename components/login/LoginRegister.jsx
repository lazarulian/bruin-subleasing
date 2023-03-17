import React from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const LoginRegister = () => {
  return (
    <section className="h-screen">
      <div className="mx-auto py-10 px-2">
        <div className="text-center pb-5">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Please Login to use the Platform
          </h1>
        </div>
        <div className="flex flex-col md:flex-row justify-center space-y-5 md:space-y-0 md:space-x-5">
          <LoginForm />
          <RegisterForm />
        </div>
      </div>
    </section>
  );
};

export default LoginRegister;

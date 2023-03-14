import { UseAuth } from "@/context/AuthContext";
import React, { useState } from "react";

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Errormessage, setErrormessage] = useState(null);
  const [IsLoggingIn, setIsLoggingIn] = useState(true);

  const { login } = UseAuth();

  async function loginSubmitHandler() {
    if (!Email || !Password) {
      setErrormessage("Please enter username and password.");
    }
    if (IsLoggingIn) {
      try {
        await login(Email, Password);
      } catch (err) {
        setErrormessage("Incorrect email or password");
      }
    }
  }

  return (
    <div>
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
            Log In
          </h1>
          <div>
            <div>
              <label
                className="block mb-2 text-sm font-medium  text-white"
                for="email"
              >
                Email
              </label>
              <input
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                id="email"
                type="text"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium  text-white"
              for="password"
            >
              Password
            </label>
            <input
              className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              id="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
            {Errormessage && (
              <p className="text-red-400 text-xs italic">{Errormessage}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="w-full text-white bg-gray-600 hover:bg-gray-300 hover:text-black duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
              type="button"
              onClick={() => loginSubmitHandler()}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

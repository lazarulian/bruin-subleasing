import { UseAuth } from "@/context/AuthContext";
import React, { useState } from "react";

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Errormessage, setErrormessage] = useState(null);
  const [IsLoggingIn, setIsLoggingIn] = useState(true);

  const { login, signup, currentUser } = UseAuth();

  console.log(currentUser);

  async function submitHandler() {
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
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="mb-4">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="email"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="email"
            type="text"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-grey-darker text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          {Errormessage && (
            <p class="text-red-400 text-xs italic">{Errormessage}</p>
          )}
        </div>
        <div class="flex items-center justify-between">
          <button
            class="duration-500 bg-slate-600 hover:bg-slate-100 hover:text-black text-white font-bold py-2 px-4 rounded"
            type="button"
            onClick={() => submitHandler()}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

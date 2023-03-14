import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { UseAuth } from "@/context/AuthContext";
import { db } from "@/pages/api/firebase-config";
import { collection, getDocs, addDoc, where, query } from "firebase/firestore";

const RegisterForm = () => {
  // The Registration form for Adding Users to Firebase Auth and Firebase UserBase
  // Firebase Storage Information
  const apartmentsCollectionRef = collection(db, "users");

  // UseState Snippets
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [uid, setUid] = useState(null);
  const [Errormessage, setErrormessage] = useState(null);
  const [signingUp, setsigningUp] = useState(true);

  // Authentication Functions
  const { signup, currentUser } = UseAuth();

  async function updateUserInformation() {
    await addDoc(apartmentsCollectionRef, {
      email: Email,
      firstname: FirstName,
      lastname: LastName,
      phonenumber: Phone,
      uid: uid,
    });
  }

  async function submitHandler() {
    if (!Email || !Password) {
      setErrormessage("Please enter username and password.");
    }
    // Create Signup Firebase Auth
    if (signingUp) {
      try {
        await signup(Email, Password).then((response) => {
          setUid(response.user.uid);
        });
      } catch (err) {
        if (err.code == "auth/email-already-in-use") {
          setErrormessage("Email already in use.");
        }
      }
    }
  }

  useEffect(() => {
    if (uid != null) {
      updateUserInformation();
      console.log(uid);
    }
  }, [uid]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-4xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="w-15 h-15 mr-2"
            src="/static/images/bruin-logo.png"
            alt="logo"
            width={64}
            height={64}
          />
          Bruin Subleasing
        </Link>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>

            <div className="space-y-4 md:space-y-6">
              <div>
                <label
                  for="firstname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstname"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Joe Bruin"
                  required
                />
              </div>
              <div>
                <label
                  for="lastname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  value={LastName}
                  onChange={(e) => setLastName(e.target.value)}
                  id="lastname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Joe Bruin"
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  value={Email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="joebruin@ucla.edu"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={Password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                  placeholder="Password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                />
              </div>
              <div>
                <label
                  for="phonenumber"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  value={Phone}
                  onChange={(e) => setPhone(e.target.value)}
                  id="phonenumber"
                  placeholder="310-435-2198"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              {Errormessage && (
                <p className="text-red-400 text-xs italic">{Errormessage}</p>
              )}
              <button
                type="submit"
                onClick={() => submitHandler()}
                className="w-full text-white bg-gray-600 hover:bg-gray-300 hover:text-black duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

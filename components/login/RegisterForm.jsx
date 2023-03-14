import React from "react";
import { useState, useEffect } from "react";
import { UseAuth } from "@/context/AuthContext";
import { db } from "@/pages/api/firebase-config";
import { collection, addDoc } from "firebase/firestore";

const RegisterForm = () => {
  // The Registration form for Adding Users to Firebase Auth and Firebase UserBase
  // Firebase Storage Information
  const userCollectionRef = collection(db, "users");

  // UseState Snippets
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Phone, setPhone] = useState("");
  const [uid, setUid] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [Errormessage, setErrormessage] = useState(null);
  const [ConfirmMessage, setConfirmMessage] = useState(null);
  const [signingUp, setsigningUp] = useState(true);

  // Authentication Functions
  const { signup } = UseAuth();

  async function updateUserInformation() {
    await addDoc(userCollectionRef, {
      email: Email,
      firstname: FirstName,
      lastname: LastName,
      phonenumber: Phone,
      uid: uid,
      avatar: avatar,
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
          setConfirmMessage("Successfully registered your account!");
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
    }
  }, [uid]);

  return (
    <div>
      <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
            Create an account
          </h1>
          <div className="space-y-4 md:space-y-6">
            <div>
              <label
                for="firstname"
                className="block mb-2 text-sm font-medium  text-white"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Joe Bruin"
                required
              />
            </div>
            <div>
              <label
                for="lastname"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                value={LastName}
                onChange={(e) => setLastName(e.target.value)}
                id="lastname"
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="Joe Bruin"
                required
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Your email
              </label>
              <input
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                placeholder="joebruin@ucla.edu"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Password
              </label>
              <input
                type="password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                placeholder="Password"
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                required=""
              />
            </div>
            <div>
              <label
                for="phonenumber"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Phone Number:
              </label>
              <input
                type="tel"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                id="phonenumber"
                placeholder="310-435-2198"
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                for="avatar"
                className="block mb-2 text-sm font-medium  text-white"
              >
                Profile Picture URL:
              </label>
              <input
                type="text"
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                id="avatar"
                placeholder="https://google.com/img.jpeg"
                className=" border   sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {Errormessage && (
              <p className="text-red-400 text-xs italic">{Errormessage}</p>
            )}
            {ConfirmMessage && (
              <p className="text-green-400 text-xs italic">{ConfirmMessage}</p>
            )}
            <button
              type="submit"
              onClick={() => submitHandler()}
              className="w-full text-white bg-gray-600 hover:bg-gray-300 hover:text-black duration-300 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800"
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;

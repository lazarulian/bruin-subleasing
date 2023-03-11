{ /* API keys in pages/api/firebase-config.js */}

import React, { useState, useEffect } from "react";
import { LoginForm, RegisterUser } from "@/components";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  getRedirectResult,
  signOut
} from "firebase/auth";
import { db, auth, provider } from "/src/firebase-config.js";
import "/pages/api/firebase-config.js";


const process = async () => {

  try {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (error) {
    // error handling
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email; // The email of the user's account used.
    const credential = GoogleAuthProvider.credentialFromError(error); // The AuthCredential type that was used.
  
  }
};


const login = () => {
  return (
    <div className="mx-12 px-8 my-8">
      <div className="grid lg:grid-cols-3 lg:gap-3">
        <div className="col-span 1" />
            <div className="text-center m-8 p-8 bg-slate-300 rounded-xl">
          <h1 className="font-semibold text-gray-700 text-4xl pb-4">
            Login
          </h1>
                <div className="p-8 m-8 justify-center">
                        <button className="googleButton" alt="sign in button" onClick={process}>
                        {" "}
                         Sign in with Google
                    </button>
                </div>
            </div>
        <div className="col-span-1" />
      </div>
      
    </div>
    
  );
};
export default login;
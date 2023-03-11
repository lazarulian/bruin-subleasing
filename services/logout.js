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


const handleSignOut = async () => {
    firebase.auth().signOut()
}


const logout = () => {
    return (
      <div className="mx-12 px-8 my-8">
        <div className="grid lg:grid-cols-3 lg:gap-3">
          <div className="col-span 1" />
              <div className="text-center m-8 p-8 bg-slate-300 rounded-xl">
                
            <h1 className="font-semibold text-gray-700 text-4xl pb-4">
              Logout Here:
            </h1>

                  <div className="p-8 m-8 justify-center">
                          <button className="signOutButton" alt="sign out button" onClick={handleSignOut}>
                          {" "}
                           Sign Out
                      </button>
                  </div>
              </div>
          <div className="col-span-1" />
        </div>
        
      </div>
    );
};

export default logout;
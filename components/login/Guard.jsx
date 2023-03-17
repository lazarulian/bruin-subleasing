import React from "react";
import { UseAuth } from "@/context/AuthContext";
import app_routes from "@/data/app_routes";

const isBrowser = () => typeof window !== "undefined";

const Guard = ({ router, children }) => {
  // Authentication Functions
  const { currentUser } = UseAuth();

  // Checking for Authentication

  let unprotectedRoutes = [app_routes.register, app_routes.home];

  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !currentUser && pathIsProtected) {
    router.push(app_routes.register);
  }

  return children;
};

export default Guard;

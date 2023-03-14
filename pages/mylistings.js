import MyPosts from "@/components/MyPosts";
import React from "react";

const mylistings = () => {
  return (
    <div className="mx-auto my-5 py-5">
      <h1 className="flex justify-center text-4xl font-semibold pb-6">
        My Listings
      </h1>
      <MyPosts />
    </div>
  );
};

export default mylistings;

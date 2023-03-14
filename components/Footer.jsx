import React from "react";

const Footer = () => {
  return (
    <div className="w-screen h-[80px] z-10 bg-gray-900 fixed drop-shadow-lg flex justify-center">
      <div className="px-2 flex justify-center items-center w-full h-full content">
        <div className="items-center text-center content-center">
          <h1 className="text-2xl mr-4 text-white text-center snap-center mx-auto content-center">
             Made for CS35L Project
          </h1>
          <p className="text-white"> Our project aims to alleviate the painful process of creating a sublease! </p>
         
        </div>
      </div>
    </div>

  );
};

export default Footer;

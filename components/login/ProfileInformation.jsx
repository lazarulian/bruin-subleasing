import React from "react";
import Link from "next/link";

const ProfileInformation = ({ fname, lname, phone, email, avatar }) => {
  return (
    <div class="p-5 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col items-center pb-5">
        <img
          class="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={avatar}
          alt="Profile Avatar"
        />
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {fname}&nbsp;{lname}
        </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{phone}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{email}</span>
      </div>
    </div>
  );
};

export default ProfileInformation;

import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[60px] z-10 bg-gray-900 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          {/* List of NavBar Items */}
          <Link href="/homepage">
            <h1 className="text-3xl font-bold mr-4 sm:text-2xl text-white">
              Bruin-Subleasing
            </h1>
          </Link>
          <ul className="hidden md:flex text-white">
            <Link href="/about">
              <li className="p-4"> About </li>
            </Link>
            <Link href="/browse">
              <li className="p-4"> Browse </li>
            </Link>
            <Link href="/admins/users">
              <li className="p-4"> Users </li>
            </Link>
            <Link href="/listings">
              <li className="p-4"> Listings </li>
            </Link>
          </ul>
        </div>

        {/*Navbar Sign In Buttons*/}
        <div className="hidden md:flex pr-4">
          <button className="px-3 hover:underline border-none bg-transparent text-white mr-4">
            Sign In
          </button>
          <button className="px-6 py-2 text-white border bg-blue-500 border-blue-500 hover:bg-transparent hover:text-blue-500 rounded-md ">
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu Conditional Code; Replace with newwer Hamburger Menu */}
        <div onClick={handleClick} className="md:hidden">
          {!nav ? (
            <Bars3Icon className="w-5 text-white" />
          ) : (
            <XMarkIcon className="w-5 text-white" />
          )}
        </div>
        {/* End Hamburger Menu Code */}
      </div>

      {/*Drop Down Menu*/}
      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <Link href="/homepage">
          <li className="p-4 border-b-2 border-zinc-300 w-full">Home</li>
        </Link>
        <Link href="/about">
          <li className="p-4 border-b-2 border-zinc-300 w-full">About</li>
        </Link>
        <Link href="/support">
          <li className="p-4 border-b-2 border-zinc-300 w-full">Support</li>
        </Link>
        <Link href="/admin/users">
          <li className="p-4 border-b-2 border-zinc-300 w-full">Users</li>
        </Link>
        <Link href="/listings">
          <li className="p-4 border-b-2 border-zinc-300 w-full">Listings</li>
        </Link>

        <div className="flex flex-col my-4">
          {/*SignUp/Sign In buttons*/}
          <Link href="/login">
            <button className="hover:underline bg-transparent text-blue-500 mb-4 px-8 py-3">
              Sign In
            </button>
          </Link>
          <Link href="/register">
            <button className="px-8 py-3 text-white border bg-blue-500 border-blue-500 hover:bg-transparent hover:text-blue-500 rounded-md ">
              Sign Up
            </button>
          </Link>
        </div>
      </ul>
      {/*End Drop Down Menu*/}
    </div>
  );
};

export default Navbar;

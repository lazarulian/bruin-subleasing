import UserList from "@/components/login/UserList";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const users = () => {
  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900 h-screen p-5 mx-auto">
        <div className="flex justify-center">
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
            Registered Users
          </Link>
        </div>
        <UserList />
      </section>
    </div>
  );
};

export default users;

import UserList from "@/components/login/UserList";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const users = () => {
  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="top-0">
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
            <UserList />
          </div>
        </div>
      </section>
    </div>
  );
};

export default users;

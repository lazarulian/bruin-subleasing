import React from "react";

const UserComponent = ({ firstname, lastname, email, phonenumber }) => {
  return (
    <div>
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {
              <p>
                {firstname} &nbsp;{lastname}
              </p>
            }
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Email: {email}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Phone Number: {phonenumber}
        </p>
      </div>
    </div>
  );
};

export default UserComponent;

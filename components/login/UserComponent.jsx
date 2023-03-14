import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const UserComponent = ({
  firstname,
  lastname,
  email,
  phonenumber,
  profile_image,
}) => {
  return (
    <div>
      <div class="max-w-m p-6 border-2 border-slate-400 bg-slate-100 rounded-lg text-center shadow-md">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-slate-900 underline">
            Contact Leaser
          </h5>
          <h4 class="mb-2 text-xl font-bold tracking-tight text-slate-900">
            {
              <p>
                {firstname} &nbsp;{lastname}
              </p>
            }
          </h4>
        </a>
        <div className="flex flex-row justify-center">
          <EmailIcon className="h-6 w-6"></EmailIcon>
          <p class="mb-3 font-normal text-slate-700 indent-1"> {email}</p>
        </div>
        <div className="flex flex-row justify-center">
          <PhoneIcon className="h-6 w-6"></PhoneIcon>
          <p class="mb-3 font-normal text-slate-700 indent-1"> {phonenumber}</p>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;

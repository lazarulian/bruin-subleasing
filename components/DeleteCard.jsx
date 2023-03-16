import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { collection, addDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { db } from "../pages/api/firebase-config";
import { useState, Fragment } from "react";
import { UseAuth } from "@/context/AuthContext";

const DeleteCard = ({
  address,
  bedrooms,
  bathrooms,
  price,
  imageUrl,
  season,
  docid,
  uid,
}) => {
  // Delete Function
  async function handleDelete() {
    await deleteDoc(doc(db, "apartments", docid));
    handleClick();
  }

  // Snackbar
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // Permissions
  const { currentUser } = UseAuth();
  const [permissions, setpermissions] = useState(false);

  useEffect(() => {
    if (currentUser.uid == uid) {
      setpermissions(true);
    }
  }, []);

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return (
    <div className="w-full h-75 rounded-lg shadow-md overflow-hidden hover:scale-105 duration-300">
      <img
        className="object-cover w-full h-full"
        src={imageUrl}
        alt="Apartment"
      />
      <div className="bg-white p-4">
        <div className="text-gray-600 font-medium text-lg mb-2 text-center">
          {address}
        </div>
        <div className="flex justify-center">
          <div className="flex items-center mr-4 text-gray-600">
            <span className="mr-1">
              {bedrooms} bd / {bathrooms} ba
            </span>
          </div>
          <div className="flex items-center text-gray-600 font-medium">
            <span>{price}</span>
            <span className="text-sm">/ mo</span>
          </div>
        </div>
        <div className="text-gray-400 text-sm mt-2 text-center">{season}</div>
        {permissions && (
          <div className="flex justify-center p-2">
            <button
              class="bg-transparent duration-500 hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        )}
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="❌  Sublease Successfully Deleted  ❌ "
        action={action}
      />
    </div>
  );
};

export default DeleteCard;

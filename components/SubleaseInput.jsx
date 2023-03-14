import { React, useState, useEffect } from "react";
import { db } from "../pages/api/firebase-config";
import { collection, getDocs, addDoc, where, query } from "firebase/firestore";
import { storage } from "firebase/storage";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import { UseAuth } from "@/context/AuthContext";

const handleImageUpload = (event) => {
  const imageFile = event.target.files[0];
  var storageRef = storage().ref().child(images);

  storageRef
    .getDownloadURL()
    .then(function (url) {
      setImageURL(url);
      console.log(url);
    })
    .catch(function (error) {
      // pass
    });
};

const SubleaseInput = () => {
  // Authorization Information
  const { currentUser } = UseAuth();

  const apartmentsCollectionRef = collection(db, "apartments");
  const [newAddress, setNewAddress] = useState("");
  const [newRating, setNewRating] = useState(0);
  const [newRent, setNewRent] = useState(0);
  const [newYear, setNewYear] = useState(0);
  const [newStreetName, setNewStreetName] = useState("");
  const [numBed, setNumBed] = useState("");
  const [numBath, setNumBath] = useState("");
  const [newQuarter, setNewQuarter] = useState("");
  const [imageURL, setImageURL] = useState("");

  const clearInput = () => {
    setNewAddress("");
    setNewRating(NaN);
    setNewRent(0);
    setNewYear(NaN);
    setNewStreetName("");
    setNumBed("");
    setNumBath("");
    setNewQuarter("");
    setImageURL("");
    document.getElementById("apartment").value = "";
    document.getElementById("rent").value = "";
    document.getElementById("quarter").value = "";
    document.getElementById("year").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("street-name").value = "";
    document.getElementById("beds").value = "";
    document.getElementById("baths").value = "";
    document.getElementById("URL").value = "";
  };

  {
    /* const convertInt = (data) => {
    return parseInt(data);
  }; */
  }

  const createApartment = async () => {
    await addDoc(apartmentsCollectionRef, {
      address: newAddress,
      rating: parseInt(newRating),
      rent: parseInt(newRent),
      year: parseInt(newYear),
      streetname: newStreetName,
      baths: parseInt(numBath),
      beds: parseInt(numBed),
      quarter: newQuarter,
      imageurl: imageURL,
      uid: currentUser.uid,
    });
  };

  return (
    <div className="grid grid-cols-1 m-8 p-8 .bg-gray-500 gap-3">
      <h1 class="text-4xl m-3 font-bold text-center"> Add a sublease here: </h1>
      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        placeholder="558 Glenrock Ave"
        type="text"
        label="Apartment"
        id="apartment"
        required
        onChange={(event) => {
          setNewAddress(event.target.value);
        }}
      />
      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="number"
        placeholder="3500"
        label="Rent"
        id="rent"
        required
        onChange={(event) => {
          setNewRent(event.target.value);
        }}
      />

      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="text"
        placeholder="Fall"
        label="Quarter"
        id="quarter"
        required
        onChange={(event) => {
          setNewQuarter(event.target.value);
        }}
      />

      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="number"
        placeholder="2023"
        label="Year"
        id="year"
        required
        onChange={(event) => {
          setNewYear(event.target.value);
        }}
      />
      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="number"
        placeholder="4"
        label="Rating"
        id="rating"
        required
        onChange={(event) => {
          setNewRating(parseInt(event.target.value));
        }}
      />
      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        placeholder="Glenrock"
        label="Street Name"
        id="street-name"
        required
        onChange={(event) => {
          setNewStreetName(event.target.value.toLowerCase());
        }}
      />
      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="number"
        placeholder="2"
        label="Number of Beds"
        id="beds"
        required
        onChange={(event) => {
          setNumBed(parseInt(event.target.value));
        }}
      />
      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="number"
        placeholder="2"
        label="Number of Baths"
        id="baths"
        required
        onChange={(event) => {
          setNumBath(parseInt(event.target.value));
        }}
      />

      {/* <Input 
        className="rounded-lg border-2 p-2 m-2.5 "
        type="file"
        placeholder="insert an image"
        label="put image here"
        accept="image/*"
        optional
        onChange={handleImageUpload}
      />  */}

      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="number"
        placeholder="2"
        label="Image URL"
        id="URL"
        required
        onChange={(event) => {
          setImageURL(event.target.value);
        }}
      />

      <button
        className="bg-blue-100 rounded-md p-3 m-2 hover:bg-blue-600 hover:text-white duration-200"
        onClick={createApartment}
      >
        Create Sublease
      </button>

      <button
        className="bg-blue-100 rounded-md p-3 m-2 hover:bg-blue-600 hover:text-white duration-200"
        onClick={clearInput}
      >
        Clear Input
      </button>
    </div>
  );
};

export default SubleaseInput;

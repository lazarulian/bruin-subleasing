import { React, useState, useEffect, Fragment } from "react";
import { db } from "../pages/api/firebase-config";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { UseAuth } from "@/context/AuthContext";

// MUI Icons
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AcUnitIconBorder from "@mui/icons-material/AcUnitOutlined";
import PoolIcon from "@mui/icons-material/Pool";
import PoolIconOutlined from "@mui/icons-material/PoolOutlined";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsCarIconOutlined from "@mui/icons-material/DirectionsCarOutlined";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import LocalLaundryServiceIconOutlined from "@mui/icons-material/LocalLaundryServiceOutlined";
import WifiIcon from "@mui/icons-material/Wifi";
import WifiIconOutlined from "@mui/icons-material/WifiOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FitnessCenterIconOutlined from "@mui/icons-material/FitnessCenterOutlined";

import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const SubleaseInput = () => {
  // Authorization Information
  const { currentUser } = UseAuth();

  const apartmentsCollectionRef = collection(db, "apartments");
  const [newAddress, setNewAddress] = useState("");
  const [newRent, setNewRent] = useState(0);
  const [newYear, setNewYear] = useState(0);
  const [numBed, setNumBed] = useState("");
  const [numBath, setNumBath] = useState("");
  const [newQuarter, setNewQuarter] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [roommates, setRoommates] = useState(0);
  const [squarefootage, setSquareFootage] = useState(0);
  const [streetName, setStreetName] = useState("");
  const [summary, setSummary] = useState("");
  // Amenities
  const [ac, setAc] = useState(false);
  const [pool, setPool] = useState(false);
  const [parking, setParking] = useState(false);
  const [laundry, setLaundry] = useState(false);
  const [fitness, setFitness] = useState(false);
  const [wifi, setWifi] = useState(false);

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

  // AC pool parking laundry fitness wifi
  const clearInput = () => {
    setNewAddress("");
    setNewRent(0);
    setNewYear(NaN);
    setNumBed("");
    setNumBath("");
    setNewQuarter("");
    setImageURL("");
    setRoommates(0);
    setSquareFootage(0);
    document.getElementById("apartment").value = "";
    document.getElementById("rent").value = "";
    document.getElementById("quarter").value = "";
    document.getElementById("year").value = "";
    document.getElementById("beds").value = "";
    document.getElementById("baths").value = "";
    document.getElementById("imageURL").value = "";
    document.getElementById("roommates").value = "";
    document.getElementById("sqft").value = "";
  };

  const createApartment = async () => {
    const docRef = doc(collection(db, "apartments"));
    await setDoc(docRef, {
      address: newAddress,
      rent: parseInt(newRent),
      year: parseInt(newYear),
      baths: parseInt(numBath),
      beds: parseInt(numBed),
      quarter: newQuarter,
      imageurl: imageURL,
      uid: currentUser.uid,
      streetname: streetName,
      summary: summary,
      sqft: squarefootage,
      roommates: roommates,

      docid: docRef.id,

      amenities: {
        ac: ac,
        pool: pool,
        parking: parking,
        laundry: laundry,
        fitness: fitness,
        wifi: wifi,
      },
    });
    clearInput();
    handleClick();
  };

  return (
    <div className="grid grid-cols-1 p-8 m-3 rounded-lg gap-3">
      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        placeholder="558 Glenrock Ave"
        type="text"
        label="Apartment Address"
        id="apartment"
        required
        onChange={(event) => {
          setNewAddress(event.target.value);
          const array = event.target.value.split(" ");
          setStreetName(array[1]);
        }}
      />
      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="number"
        placeholder="950"
        label="Monthly Rent"
        id="rent"
        required
        onChange={(event) => {
          setNewRent(event.target.value);
        }}
      />

      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="text"
        placeholder="Spring"
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
      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="text"
        placeholder="Image URL"
        label="Image URL"
        id="imageURL"
        required
        onChange={(event) => {
          setImageURL(event.target.value);
        }}
      />
      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="number"
        placeholder="1200"
        label="Square Footage"
        id="sqft"
        required
        onChange={(event) => {
          setSquareFootage(event.target.value);
        }}
      />
      <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="number"
        placeholder="3"
        label="Number of Roommates"
        id="roommates"
        required
        onChange={(event) => {
          setRoommates(event.target.value);
        }}
      />

     <TextField
        className="rounded-lg border-2 border-blue-400 p-2 m-1"
        type="text"
        placeholder="Summary"
        label="Summary"
        id="summary"
        required
        onChange={(event) => {
          setSummary(event.target.value);
        }}
      />

      <div className="flex justify-center">
        <Checkbox
          icon={<AcUnitIconBorder />}
          checkedIcon={<AcUnitIcon />}
          onChange={() => setAc(!ac)}
        />
        <Checkbox
          icon={<PoolIconOutlined />}
          checkedIcon={<PoolIcon />}
          onChange={() => setPool(!pool)}
        />
        <Checkbox
          icon={<DirectionsCarIconOutlined />}
          checkedIcon={<DirectionsCarIcon />}
          onChange={() => setParking(!parking)}
        />
        <Checkbox
          icon={<LocalLaundryServiceIconOutlined />}
          checkedIcon={<LocalLaundryServiceIcon />}
          onChange={() => setLaundry(!laundry)}
        />
        <Checkbox
          icon={<WifiIconOutlined />}
          checkedIcon={<WifiIcon />}
          onChange={() => setWifi(!wifi)}
        />
        <Checkbox
          icon={<FitnessCenterIcon />}
          checkedIcon={<FitnessCenterIconOutlined />}
          onChange={() => setFitness(!fitness)}
        />
      </div>
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
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="✅  Sublease Submitted  ✅ "
        action={action}
      />
    </div>
  );
};

export default SubleaseInput;

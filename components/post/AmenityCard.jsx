import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PoolIcon from "@mui/icons-material/Pool";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import WifiIcon from "@mui/icons-material/Wifi";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const AmenityCard = ({ ac, pool, parking, laundry, fitness, wifi }) => {
  return (
    <div className="rounded-lg border-2 drop-shadow-md mx-auto mr-0 h-72 w-96 bg-slate-50 hover:bg-slate-100 duration-300 ease-in-out text-center">
      <p className="pt-5 pb-7 text-xl"> Amenities </p>
      {ac && (
        <div className="flex flex-row ml-28">
          <AcUnitIcon className="h-6 w-6"> </AcUnitIcon>
          <p className="pb-5 indent-2 text-l">Air Conditioning</p>
        </div>
      )}
      {pool && (
        <div className="flex flex-row ml-28">
          <PoolIcon className="h-6 w-6"> </PoolIcon>
          <p className="pb-5 indent-2 text-l"> Pool</p>
        </div>
      )}
      {parking && (
        <div className="flex flex-row ml-28">
          <DirectionsCarIcon className="h-6 w-6"> </DirectionsCarIcon>
          <p className="pb-5 indent-2 text-l"> Parking</p>
        </div>
      )}
      {laundry && (
        <div className="flex flex-row ml-28">
          <LocalLaundryServiceIcon className="h-6 w-6"></LocalLaundryServiceIcon>
          <p className="pb-5 indent-2 text-l"> Washer/Dryer</p>
        </div>
      )}
      {fitness && (
        <div className="flex flex-row ml-28">
          <FitnessCenterIcon className="h-6 w-6"></FitnessCenterIcon>
          <p className="pb-5 indent-2 text-l"> Fitness</p>
        </div>
      )}
      {wifi && (
        <div className="flex flex-row ml-28">
          <WifiIcon className="h-6 w-6"></WifiIcon>
          <p className="pb-5 indent-2 text-l"> Wifi</p>
        </div>
      )}
    </div>
  );
};

export default AmenityCard;

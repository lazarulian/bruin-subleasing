import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PoolIcon from "@mui/icons-material/Pool";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import WifiIcon from "@mui/icons-material/Wifi";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";

const AmenityCard = ({ ac, pool, parking, laundry, fitness, wifi }) => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-4 text-center">
        {ac && (
          <div className="border-2  border-slate-400 rounded h-36 drop-shadow hover:bg-slate-200 duration-300">
            <br></br>
            <br></br>
            <AcUnitIcon className="h-16 w-16" />
            <br></br>
            <div className="text-xl">Air Conditioning</div>
          </div>
        )}
        {pool && (
          <div className="border-2  border-slate-400 rounded h-36 drop-shadow  hover:bg-slate-200 duration-300">
            <br></br>
            <br></br>
            <PoolIcon className="h-16 w-16" />
            <br></br>
            <div className="text-xl">Pool</div>
          </div>
        )}
        {parking && (
          <div className="border-2  border-slate-400 rounded h-36 drop-shadow  hover:bg-slate-200 duration-300">
            <br></br>
            <br></br>
            <DirectionsCarIcon className="h-16 w-16" />
            <br></br>
            <div className="text-xl">Parking</div>
          </div>
        )}
        {laundry && (
          <div className="border-2  border-slate-400 rounded h-36 drop-shadow  hover:bg-slate-200 duration-300">
            <br></br>
            <br></br>
            <LocalLaundryServiceIcon className="h-16 w-16" />
            <br></br>
            <div className="text-xl">Washer/Dryer</div>
          </div>
        )}
        {wifi && (
          <div className="border-2  border-slate-400 rounded h-36 drop-shadow  hover:bg-slate-200 duration-300 ">
            <br></br>
            <br></br>
            <WifiIcon className="h-16 w-16" />
            <br></br>
            <div className="text-xl">Wifi</div>
          </div>
        )}
        {fitness && (
          <div className="border-2  border-slate-400 rounded h-36 drop-shadow  hover:bg-slate-200 duration-300">
            <br></br>
            <br></br>
            <FitnessCenterIcon className="h-16 w-16" />
            <br></br>
            <div className="text-xl">Fitness Center</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmenityCard;

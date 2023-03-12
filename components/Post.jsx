import React from "react";
import Image from "next/image";
import { FireIcon } from "@heroicons/react/24/solid";
import { BeakerIcon } from "@heroicons/react/24/solid";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PoolIcon from "@mui/icons-material/Pool";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";

const Post = ({ title, image, poster, timeframe, description }) => {
  return (
    <div className="max-w-4xl py-10 mx-auto dark:text-gray-800 ">
      <div className="text-left font-semibold ml-0">
        <h1 className="text-4xl font-medium ml-0 pb-5">{title}</h1>

        <Image
          src={image}
          alt="cheeks"
          width={892}
          height={700}
          className="mx-auto pb-10 drop-shadow-md opacity-90 transition duration-300 ease-in-out hover:opacity-100"
        />
        <div className=" border-t dark:border-gray-300 "></div>

        <div className="text-xl py-5 flex flex-row font-bold">
          <h2 className="ml-0 mx-auto"> Subleaser: John Smith </h2>
          <h2 className="mr-0 mx-auto">
            Available: August 15th - September 20th{" "}
          </h2>
        </div>

        <div className=" grid grid-cols-2">
          <div>
            <p className="text-left indent-5 pt-5">{description}</p>
          </div>
          <div>
            <div className="rounded-lg border-2 drop-shadow-md mx-auto mr-0 h-72 w-96 bg-slate-50 hover:bg-slate-100 duration-300 ease-in-out text-center">
              <p className="pt-5 pb-7 text-xl"> Amenities </p>
              <div className="flex flex-row ml-28">
                <AcUnitIcon className="h-6 w-6"> </AcUnitIcon>
                <p className="pb-5 indent-2 text-l"> Air Conditioning</p>
              </div>
              <div className="flex flex-row ml-28">
                <PoolIcon className="h-6 w-6"> </PoolIcon>
                <p className="pb-5 indent-2 text-l"> Pool</p>
              </div>
              <div className="flex flex-row ml-28">
                <DirectionsCarIcon className="h-6 w-6"> </DirectionsCarIcon>
                <p className="pb-5 indent-2 text-l"> Parking</p>
              </div>
              <div className="flex flex-row ml-28">
                <LocalLaundryServiceIcon className="h-6 w-6"></LocalLaundryServiceIcon>
                <p className="pb-5 indent-2 text-l"> Washer/Dryer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

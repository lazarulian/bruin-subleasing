import React from "react";
import Image from "next/image";
import AmenityCard from "./AmenityCard";
import profile from "./profilepic.png";

const Post = ({
  title,
  image,
  poster,
  timeframe,
  description,
  datePosted,
  rent,
  bed,
  bath,
  squareFeet,
  roomates,
  amenities,
}) => {
  return (
    <div className="max-w-5xl py-10 mx-auto dark:text-gray-800 ">
      <div className="text-left font-semibold ml-0">
        <h1 className="text-5xl font-medium ml-0 pb-5">{title}</h1>
        <img
          src={image}
          alt="Post Image"
          width={1000}
          height={800}
          className="mx-auto pb-8 drop-shadow-md opacity-90 transition duration-300 ease-in-out hover:opacity-100"
        />

        <div className="text-2xl py-4 flex flex-row font-semibold">
          <h2 className="ml-0 mx-auto">
            {" "}
            Dates Available: {timeframe} {datePosted}
          </h2>
        </div>

        <div className=" border-t border-stone-600 py-5 "></div>

        <div class=" bg-white border-solid border-2 border-slate-400 w-full p-4">
          <div class="grid grid-cols-4 gap-8 divide-gray-400">
            <div className="text-black border-r-2 border-slate-400 p-6">
              Monthly Rent
              <p className="font-medium text-stone-600">${rent}</p>
            </div>
            <div className="text-black border-r-2 border-slate-400 p-6">
              Bed/Bath
              <p className="font-medium text-stone-600">
                {bed} bed/{bath} bath
              </p>
            </div>
            <div className="text-black border-r-2 border-slate-400 p-6">
              Square Feet
              <p className="font-medium text-stone-600">{squareFeet} sq feet</p>
            </div>
            <div className="text-black border-slate-400 p-6">
              Roommates
              <p className="font-medium text-stone-600">{roomates}</p>
            </div>
          </div>
        </div>
        <br></br>

        <h1 className="text-2xl font-semibold">
          About {title}
          <p className=" font-medium text-base pt-5 ">{description}</p>
        </h1>
        <br></br>

        <h1 className="text-2xl font-semibold pb-3">Details and Fees</h1>

        <div className="grid grid-cols-2 text-base  border-2  border-slate-400">
          <div className="bg-slate-200 p-1">Utilities</div>
          <div className="bg-slate-200 p-1"></div>
          <div className="p-1"> Gas, Electricity, Water</div>
          <div className="text-right pr-5 p-1"> $50/mo</div>
          <div className="bg-slate-200 p-1">Parking</div>
          <div className="bg-slate-200 p-1"></div>
          <div className="p-1">1 Tandem Spot</div>
          <div className="text-right pr-5 p-1"> $100/mo</div>
        </div>
        <br></br>

        <h1 className="text-2xl font-semibold pb-3">Amenities</h1>

        <AmenityCard
          ac={amenities.ac}
          pool={amenities.pool}
          parking={amenities.parking}
          laundry={amenities.laundry}
          fitness={amenities.fitness}
          wifi={amenities.wifi}
        />
      </div>
    </div>
  );
};

export default Post;

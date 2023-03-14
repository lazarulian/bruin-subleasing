import React from "react";
import Image from "next/image";
import AmenityCard from "./AmenityCard";

const Post = ({ title, image, poster, timeframe, description, amenities }) => {
  return (
    <div className="max-w-4xl py-10 mx-auto dark:text-gray-800 ">
      <div className="text-left font-semibold ml-0">
        <h1 className="text-4xl font-medium ml-0 pb-5">{title}</h1>

        <Image
          src={image}
          alt="cheeks"
          width={892}
          height={700}
          className="mx-auto pb-10 drop-shadow-md opacity-90 transition duration-300 ease-in-out hover:opacity-100 rounded-xl"
        />
        <div className=" border-t dark:border-gray-300 "></div>

        <div className="text-xl py-5 flex flex-row font-bold">
          <h2 className="ml-0 mx-auto"> Subleaser: {poster} </h2>
          <h2 className="mr-0 mx-auto"> Available: {timeframe}</h2>
        </div>

        <div className=" grid grid-cols-2">
          <div>
            <p className="text-left indent-5 pt-5">{description}</p>
          </div>
          <div>
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
      </div>
    </div>
  );
};

export default Post;

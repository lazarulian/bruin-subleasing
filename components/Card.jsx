import React from 'react';

const Card = ({ address, bedrooms, bathrooms, price, imageUrl, season }) => {
  return (
    <div className="w-60 h-75 rounded-lg shadow-md overflow-hidden">
      <img className="object-cover w-full h-full" src={imageUrl} alt="Apartment" />
      <div className="bg-white p-4">
        <div className="text-gray-600 font-medium text-lg mb-2 text-center">{address}</div>
        <div className="flex justify-center">
          <div className="flex items-center mr-4 text-gray-600">
            <span className="mr-1">{bedrooms} bd / {bathrooms} ba</span>
          </div>
          <div className="flex items-center text-gray-600 font-medium">
            <span>{price}</span>
            <span className="text-sm">/ mo</span>
          </div>
        </div>
        <div className="text-gray-400 text-sm mt-2 text-center">{season}</div>
      </div>
    </div>
  );
};

export default Card;

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
      <div class="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg sm:p-6 dark:bg-gray-800 dark:border-gray-700 drop-shadow-xl">
        <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
          Amenities
        </h5>

        <ul class="my-4 space-y-3">
          {ac && (
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">
                  Air Conditioning
                </span>
                <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                  <AcUnitIcon />
                </span>
              </a>
            </li>
          )}
          {pool && (
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Pool</span>
                <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                  <PoolIcon />
                </span>
              </a>
            </li>
          )}
          {parking && (
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Parking</span>
                <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                  <DirectionsCarIcon />
                </span>
              </a>
            </li>
          )}
          {laundry && (
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Laundry</span>
                <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                  <LocalLaundryServiceIcon />
                </span>
              </a>
            </li>
          )}
          {wifi && (
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Wifi</span>
                <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                  <WifiIcon />
                </span>
              </a>
            </li>
          )}
          {fitness && (
            <li>
              <a
                href="#"
                class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Fitness</span>
                <span class="inline-flex items-center justify-center px-2 py-0.5 ml-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                  <FitnessCenterIcon />
                </span>
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AmenityCard;

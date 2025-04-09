import axios from "axios";
import { MapPin, House, Heart, User } from "lucide-react";
import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";

export const DayCard = ({ weather, handleChange, input }) => {

  return (
    weather && (
      <div className="relative flex w-[567px] justify-center z-10">
       <div>
       </div>
        <div className="absolute -top-18 left-0 bg-radial-[at_50%_50%] from-[rgba(255,255,205,0.25)] to-[rgba(255,255,255,0.00)] bg-[#F58C27] h-44 w-44 rounded-full"></div>
        <div className="w-103.5 h-207 z-20 rounded-3xl  overflow-hidden shadow-lg backdrop-blur-md">
          <div className="space-y-12 px-10 py-14 backdrop-blur-lg">
            <div className="flex items-center justify-between">
              <div className="space-y-2 ">
                <div className="date text-[#9CA3AF] font-medium">
                  {weather.location.localtime}
                </div>
                <div className="city-name h-12 text-5xl font-extrabold text-gray-900 flex">
                  {weather.location.name}
                </div>
              </div>
              <MapPin size={32} color="#000000" />
            </div>
            <img className="h-65.5 w-65.5 z-60" src="/sun.png" alt="" />
          </div>
          <div className="px-12 ">
            <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-black to-white">
              {weather.forecast.forecastday[0].day.maxtemp_c}°
            </div>
            <div className="font-extrabold mb-18 text-[#FF8E27] text-2xl h-6">
              {weather.forecast.forecastday[0].day.condition.text}{" "}
            </div>
            <div className="flex items-center justify-between">
              <House size={32} color="#000000" />
              <MapPin size={32} color="#D1D5DB" />
              <Heart size={32} color="#D1D5DB" />
              <User size={32} color="#D1D5DB" />
            </div>
          </div>
        </div>
        <SearchBar/>
      </div>
    )
  );
};

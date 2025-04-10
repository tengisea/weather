import React from "react";
import { Search } from "lucide-react";

export const SearchBar = ({ handleChange, input, countries, setCityName }) => {

  const mappedCountries= countries.map((country) =>{
    // countryName=country.country
    // hotNer=country.cities
  })


  return (
    <div className="absolute right-[70px] -top-16 z-40">
      <div className="searchBar relative h-12 py-10 px-8 gap-4 rounded-full flex bg-white items-center min-w-80 w-128 border-0">
        <div className="searchLogo">
          <Search size={30} color="#CCC" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className=" text-[32px] font-bold"
          onChange={handleChange}
        />
      </div>

      {input && (
        <div className="mt-2.5 rounded-3xl bg-white/80 py-4 shadow-lg backdrop-blur-md">
          <button className="flex w-full items-center gap-x-4 px-6 py-2 transition-all duration-300 hover:bg-gray-100 " onChange={setCityName(hotNer)}></button>
          <button className="flex w-full items-center gap-x-4 px-6 py-2 transition-all duration-300 hover:bg-gray-100"></button>
          <button className="flex w-full items-center gap-x-4 px-6 py-2 transition-all duration-300 hover:bg-gray-100"></button>
          <button className="flex w-full items-center gap-x-4 px-6 py-2 transition-all duration-300 hover:bg-gray-100"></button>
        </div>
      )}
    </div>
  );
};

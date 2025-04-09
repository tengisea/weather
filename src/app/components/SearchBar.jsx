import React from "react";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="absolute right-[70px] -top-16 z-30">
      <div className="searchBar relative h-12 py-8 px-8 gap-4 rounded-full flex bg-white items-center min-w-80 w-128">
        <div className="searchLogo">
          <Search size={30} color="#CCC" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className=" text-[32px] font-bold"
        />
      </div>
    </div>
  );
};

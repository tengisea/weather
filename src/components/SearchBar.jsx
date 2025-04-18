import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

export const SearchBar = ({
  handleChange,
  input,
  countries,
  setCityName,
  setInput,
}) => {
  const mappedCountries = countries.map((country) => ({
    countryName: country.country,
    cities: country.cities,
  }));

  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (input.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filteredSuggestions = countries
      .flatMap((country) =>
        country.cities.map((city) => `${city}, ${country.country}`)
      )
      .filter((location) =>
        location.toLowerCase().startsWith(input.toLowerCase())
      )
      .slice(0, 4);

    setSuggestions(filteredSuggestions);
  }, [input, countries]);

  const selectCityName = (suggestion) => {
    setCityName(suggestion);
    setInput("");
  };

  return (
    <div className="absolute right-[70px] -top-16 z-40">
      <div className="searchBar relative h-12 py-10 px-8 gap-4 rounded-full flex bg-white items-center min-w-80 w-128 border-0">
        <div className="searchLogo">
          <Search size={30} color="#CCC" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="w-full py-4 pl-5 pr-6 outline-none text-[32px] font-bold"
          onChange={handleChange}
        />
      </div>

      {input && suggestions.length > 0 && (
        <div className="flex  gap-1 mt-2.5 rounded-3xl bg-white/80 font-extrabold py-4 shadow-lg backdrop-blur-md text-2xl">
          <div>
            {suggestions.map((suggestion, index) => (
              <div className="flex felx-col" key={index}>
                <div className="flex flex-col pl-6 py-2 gap-5">
                  <MapPin size={28} />
                </div>
                <button
                  className="flex w-full items-center gap-x-4 px-6 py-2 transition-all duration-300 hover:bg-gray-100"
                  onClick={() => selectCityName(suggestion)}
                >
                  {suggestion}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

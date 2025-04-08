"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { DayCard } from "./components/DayCard";
import { NightCard } from "./components/NightCard";
import { Search } from "lucide-react";

const Home = () => {
  const [input, setInput] = useState("");
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState(null);


  useEffect(() => {
    const weatherKey = process.env.WEATHERAPIKEY;
    console.log(weatherKey);
    const response = async () => {
      const { data } = await axios(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${cityName}`
      );

      setWeather(data);
    };

    response();
  }, [cityName]);

  useEffect(() =>{

  })

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  console.log(weather);

  return (
    weather && (
      <>
        <div className="flex min-h-screen">
          <div className="day relative flex flex-1 items-center justify-center">
            
          <DayCard weather={weather} handleChange={handleChange} input={input} />
          </div>
          <div className="night bg-[#0F141E] relative flex flex-1 items-center justify-center">
            <div className="rounded-full bg-amber-300 h-30 w-30 border absolute z-30 left-1 top-74"></div>
            <div className="rounded-full bg-amber-300 h-30 w-30 border absolute z-30 left-1 top-131"></div>
            <NightCard weather={weather} />
          </div>
        </div>
        <div className="flex absolute inset-0 z-10 items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 opacity-<0.08> rounded-full h-35 w-35"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 opacity-<0.08> rounded-full h-85 w-85"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 opacity-<0.08> rounded-full h-135 w-135"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 opacity-<0.08> rounded-full h-235 w-235"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F3F4F6] rounded-full h-34 w-34"></div>
        </div>
      </>
    )
  );
};

export default Home;

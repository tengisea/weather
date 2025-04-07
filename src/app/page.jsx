"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const weatherKey = process.env.WEATHERAPIKEY;
    console.log(weatherKey);
    const response = async () => {
      const { data } = await axios(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${cityName}`
      );

      console.log({ data });
    };

    response();
  }, [cityName]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div className="flex min-h-screen">
      <div className="eclipse w-140 h-140">
        
      </div>
      <div className="day relative flex flex-1 items-center justify-center" >
      </div>
      <div className="night bg-[#0F141E] relative flex flex-1 items-center justify-center"></div>
    </div>
    
  );
};

export default Home;

{/* <input
        type="text"
        placeholder="Enter"
        onChange={handleChange}
        value={input}
      /> */}
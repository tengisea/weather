"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { DayCard } from "../components/DayCard";
import { NightCard } from "../components/NightCard";
import { Logo } from "../components/Logo";

const Home = () => {
  const [input, setInput] = useState("");
  const [cityName, setCityName] = useState("Ulaanbaatar");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState([{ country: "" }]);

  useEffect(() => {
    const weatherKey = process.env.WEATHERAPIKEY;
    setLoading(true);
    const response = async () => {
      const { data } = await axios(
        `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${cityName}`
      );

      setWeather(data);
      setLoading(false);
    };

    response();
  }, [cityName]);

  useEffect(() => {
    const getCountries = async () => {
      const { data } = await axios(
        "https://countriesnow.space/api/v0.1/countries"
      );

      setCountries(data.data);
    };

    getCountries();
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    weather && (
      <>
        <div className="flex min-h-screen">
          <div className="day relative flex flex-1 items-center justify-center">
            <DayCard
              weather={weather}
              handleChange={handleChange}
              input={input}
              loading={loading}
              countries={countries}
              setCityName={setCityName}
              setInput={setInput}
            />
          </div>
          <div className="night bg-[#0F141E] relative flex flex-1 items-center justify-center">
            <NightCard weather={weather} loading={loading} />
          </div>
        </div>
        <div className="flex absolute inset-0 z-1 items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 opacity-<0.08> rounded-full h-35 w-35"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 opacity-<0.08> rounded-full h-85 w-85"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 opacity-<0.08> rounded-full h-135 w-135"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 opacity-<0.08> rounded-full h-235 w-235"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 opacity-<0.08> rounded-full h-335 w-335"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-gray-300 opacity-<0.08> rounded-full h-435 w-435"></div>
        </div>
        <Logo />
      </>
    )
  );
};

export default Home;

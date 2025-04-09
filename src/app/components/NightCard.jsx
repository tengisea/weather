import { MapPin, House, Heart, User } from "lucide-react";

export const NightCard = ({ weather }) => {
  return (
    weather && (
      <div className="relative flex w-[567px] justify-center z-10">
        <div className="w-103.5 h-207 z-20 rounded-3xl bg-[rgba(17, 24, 39, 0.75)] overflow-hidden shadow-lg backdrop-blur-md ">
          <div className="space-y-12 px-10 py-14 ">
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="date text-[#9CA3AF] font-medium">
                  {weather.location.localtime}
                </div>
                <div className="city-name h-12 text-5xl font-extrabold text-white flex">
                  {weather.location.name}
                </div>
              </div>
              <MapPin size={32} color="#9CA3AF" />
            </div>
            <img className="h-65.5 w-65.5 z-60" src="/moon.png" alt="" />
          </div>
          <div className="px-12">
            <div className="text-transparent bg-clip-text font-extrabold text-[110px] -mt-10 bg-gradient-to-b from-white to-black">
              {weather.forecast.forecastday[0].day.mintemp_c}°
            </div>
            <div className="font-extrabold mb-18 text-[#777CCE] text-2xl h-6">
              {weather.forecast.forecastday[0].day.condition.text}{" "}
            </div>
            <div className="flex items-center justify-between">
              <House size={32} color="#F9FAFB" />
              <MapPin size={32} color="#4B5563" />
              <Heart size={32} color="#4B5563" />
              <User size={32} color="#4B5563" />
            </div>
          </div>
        </div>
        <div className="absolute top-190 right-5 bg-radial-[at_50%_50%] from-[rgba(255,255,255,0.41)] to-[rgba(255,255,255,0.00)] bg-[#6E72C9] h-32 w-32 rounded-full"></div>
      </div>
    )
  );
};

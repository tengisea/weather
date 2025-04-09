export const Logo = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#F3F4F6] rounded-full h-35 w-35 ">
      <div className="top relative">
        <div className="absolute -top-10 left-17.5 w-10 h-12 bg-[#F3F4F6]"></div>
        <div className="absolute -top-11.25 left-[70px] w-15 h-15 bg-[#0F141E] rounded-bl-full"></div>
      </div>

      
      <div className="bottom relative">
      <div className="absolute top-32.5 left-17.5 w-10 h-12 bg-[#F3F4F6]"></div>
      <div className="absolute top-31.25 left-[70px] w-15 h-15 bg-[#0F141E] rounded-tl-full"></div>
      </div>
      <img src="/pine-left.svg" alt="" className="absolute top-6 left-5" />
      <img src="/pine-right.svg" alt="" className="absolute top-6 left-20" />
    </div>
  );
};

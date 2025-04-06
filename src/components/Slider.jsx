import React from "react";

const Slider = () => {
  return (
    <div className="flex flex-col text-sm gap-3 relative h-[200px] transition duration-200 border border-neutral-800 rounded-md items-center justify-center">
      <div className="slider-container w-[60%] relative">
        <input
          type="range"
          className="slider w-full h-1 appearance-none bg-transparent cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Slider;

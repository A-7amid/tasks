import React from "react";

const Slider = () => {
  return (
    <div className="flex flex-col h-52  text-sm gap-3 relative lg:h-full transition duration-200 border border-neutral-800 rounded-xl items-center justify-center">
      <div className="slider-container lg:w-[60%] relative">
        <input
          type="range"
          className="slider w-full h-1 appearance-none bg-transparent cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Slider;

import React from "react";

const RadioGroups = () => {
  return (
    <div className="flex flex-col text-sm gap-3 w-[400px] h-[200px] transition duration-200 border border-neutral-800 rounded-md items-center justify-center">
      <div>
        <h4 className="font-semibold">Notify me about...</h4>

        <input type="radio" name="" id="" />
        <input type="radio" name="" id="" />
        <input type="radio" name="" id="" />
      </div>
    </div>
  );
};

export default RadioGroups;

import React from "react";

const RadioGroups = () => {
  return (
    <div className="flex flex-col text-sm gap-3 relative h-[200px] transition duration-200 border border-zinc-800 rounded-md items-center justify-center">
      <fieldset className="flex flex-col gap-2">
        <h4 className="font-semibold">Notify me about...</h4>

        <label htmlFor="all" className="flex gap-2 items-center">
          <input type="radio" name="" id="all" />
          All new messages
        </label>

        <label htmlFor="mentions" className="flex gap-2 items-center">
          <input type="radio" name="" id="mentions" className="" />
          Direct messages and mentions
        </label>

        <label htmlFor="nothing" className="flex gap-2 items-center">
          <input type="radio" name="" id="nothing" />
          Nothing
        </label>
      </fieldset>
    </div>
  );
};

export default RadioGroups;

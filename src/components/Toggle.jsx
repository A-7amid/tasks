import clsx from "clsx";
import React, { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="flex flex-col text-sm gap-3 h-[100px] transition relative duration-200 border border-zinc-800 rounded-md items-center justify-center">
      <button
        onClick={() => setIsToggled(!isToggled)}
        className={clsx(
          "font-light text-lg hover:bg-zinc-800 transition duration-200 rounded-lg px-3 py-1 cursor-pointer",
          { "text-white": isToggled, "hover:text-zinc-400": !isToggled }
        )}
      >
        Β
      </button>
    </div>
  );
};

export default Toggle;

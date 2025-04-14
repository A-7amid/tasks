import clsx from "clsx";
import React, { useState } from "react";

const HoverCard = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex flex-col gap-3 h-52 relative lg:h-[130px] transition duration-200 border border-zinc-800 rounded-xl items-center p-5">
      <span
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setIsHover((prev) => !prev)}
        className={
          "hover:underline underline-offset-4 font-medium text-sm cursor-pointer"
        }
      >
        @tobi
      </span>

      <div
        className={clsx(
          "flex border border-zinc-800 text-sm rounded-lg items-center justify-center h-36 w-full lg:w-52 lg:p-5 delay-200 transition-all duration-200",
          {
            "bg-transparent block": isHover,
            "bg-transparent invisible": !isHover,
          }
        )}
      >
        hi from tobi
      </div>
    </div>
  );
};

export default HoverCard;

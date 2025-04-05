import clsx from "clsx";
import React, { useState } from "react";

const HoverCard = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="flex flex-col gap-3 w-[400px] h-[200px] transition duration-200 border border-neutral-800 rounded-md items-center justify-center">
      <span
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        onClick={() => setIsHover((prev) => !prev)}
        className={"hover:underline underline-offset-4 cursor-pointer"}
      >
        @tobi
      </span>

      <div
        className={clsx(
          "flex border border-neutral-800 text-sm rounded-lg items-center justify-center w-72 p-14 h-14 delay-200 transition-all duration-200",
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

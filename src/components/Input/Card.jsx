import clsx from "clsx";
import React from "react";
import { GoX } from "react-icons/go";

const Card = ({ shown, setShown, submitted, setSubmitted, email }) => {
  return (
    <div
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      className={clsx(
        "invisible absolute flex flex-col p-4 gap-4 right-5 bottom-5 border w-[400px] border-zinc-800 rounded-md",
        {
          "visible bg-zinc-950": submitted,
        }
      )}
    >
      <div className="flex justify-between">
        <h4 className="font-bold text-sm">
          You submitted the following values:
        </h4>
        <span
          onClick={() => setSubmitted(false)}
          className={clsx(
            "text-zinc-500 text-xl transition duration-200 cursor-pointer hover:flex hover:text-zinc-200 -mt-2",
            {
              "flex transtion ": shown,
              "hidden transtion": !shown,
            }
          )}
        >
          <GoX />
        </span>
      </div>

      <div className="text-xs font-mono bg-slate-950 h-20 flex flex-col gap-2 p-3 rounded-md w-full">
        <span> {"{"}</span>
        <span>
          "{`email`}": "{email}"
        </span>
        <span> {"}"}</span>
      </div>
    </div>
  );
};

export default Card;

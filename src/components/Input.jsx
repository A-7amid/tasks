import clsx from "clsx";
import React, { useState } from "react";
import { GoX } from "react-icons/go";

const Input = () => {
  const [invalidSubmit, setInvalidSubmit] = useState(true);
  const [username, setUsername] = useState("");
  const [submited, setSubmited] = useState(false);
  const [showExit, setShowExit] = useState(false);

  const handleSumbit = () => {
    if (username.length < 3) {
      return setInvalidSubmit(false);
    }
    setInvalidSubmit(true);
    setSubmited(true);
  };

  return (
    <div className="flex flex-col text-sm gap-3  h-[200px] transition duration-200 border border-zinc-800 rounded-md items-center justify-center">
      <div className="w-[290px]">
        <label htmlFor="username" className="flex flex-col gap-2">
          <span
            className={clsx({
              "text-white": invalidSubmit,
              "text-red-900 font-medium": !invalidSubmit,
            })}
          >
            Username
          </span>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Tobi"
            className="border border-zinc-800 rounded-sm px-3 py-1"
          />
          {!invalidSubmit && (
            <span className="flex text-red-900 text-xs">
              Username must be at least 3 characters.
            </span>
          )}
        </label>
        <button
          onClick={() => handleSumbit()}
          className="py-2 px-3 cursor-pointer mt-4 bg-white text-black rounded-md text-md"
        >
          Submit
        </button>
      </div>

      <div
        onMouseEnter={() => setShowExit(true)}
        onMouseLeave={() => setShowExit(false)}
        className={clsx(
          "invisible absolute flex flex-col p-4 gap-4 right-5 bottom-5 border w-[400px] border-zinc-800 rounded-md",
          {
            "visible bg-zinc-950": submited,
          }
        )}
      >
        <div className="flex justify-between">
          <h4 className="font-bold text-sm">
            You submitted the following values:
          </h4>
          <span
            onClick={() => setSubmited(false)}
            className={clsx(
              "text-zinc-500 text-xl transition duration-200 cursor-pointer hover:flex hover:text-zinc-200 -mt-2",
              {
                "flex transtion ": showExit,
                "hidden transtion": !showExit,
              }
            )}
          >
            <GoX />
          </span>
        </div>

        <div className="text-xs font-mono bg-slate-950 h-20 flex flex-col gap-2 p-3 rounded-md w-full">
          <span> {"{"}</span>
          <span>
            "{`username`}": "{username}"
          </span>
          <span> {"}"}</span>
        </div>
      </div>
    </div>
  );
};

export default Input;

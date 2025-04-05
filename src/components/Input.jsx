import clsx from "clsx";
import React, { useState } from "react";

const Input = () => {
  const [invalidSubmit, setInvalidSubmit] = useState(true);
  const [username, setUsername] = useState("");
  const [show, setShow] = useState(false);

  const handleSumbit = () => {
    if (username.length < 3) {
      return setInvalidSubmit(false);
    }
    setInvalidSubmit(true);
    setShow(true);
  };

  return (
    <div className="flex flex-col text-sm gap-3 w-[400px] h-[200px] transition duration-200 border border-neutral-800 rounded-md items-center justify-center">
      <div>
        <label htmlFor="username" className="flex flex-col gap-2">
          <span
            className={clsx({
              "text-white": invalidSubmit,
              "text-red-800": !invalidSubmit,
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
            className="border border-neutral-800 rounded-sm px-3 py-1"
          />
          {!invalidSubmit && (
            <span className="flex w-fit text-red-800 text-sm">
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
        className={clsx(
          "invisible absolute flex flex-col p-4 gap-4 right-5 bottom-5 border w-[400px] border-neutral-800 rounded-md",
          {
            "visible bg-zinc-950": show,
          }
        )}
      >
        <div className="flex justify-between">
          <h4 className="font-bold text-sm">
            You submitted the following values:
          </h4>
          <span
            onClick={() => setShow(false)}
            className="text-zinc-500 text-xl cursor-pointer hover:text-zinc-200 -mt-4"
          >
            x
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

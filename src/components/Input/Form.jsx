import React, { useRef, useState } from "react";
import { GoX } from "react-icons/go";
import TextInput from "./TextInput";
import clsx from "clsx";

const Form = () => {
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [shown, setShown] = useState(false);
  const [exitShown, setExitShown] = useState(false);

  const email = useRef("");

  return (
    <div className="flex h-52 flex-col text-sm gap-3 lg:h-[160px] transition duration-200 border border-zinc-800 rounded-xl items-center justify-center">
      <TextInput
        type="text"
        name={email}
        label="Email"
        placeholder="tobi@gmail.com"
        invalidEmail={invalidEmail}
        className="border border-zinc-800 rounded-sm px-3 py-1"
      />

      <div
        onMouseEnter={() => setExitShown(true)}
        onMouseLeave={() => setExitShown(false)}
        className={clsx(
          "invisible absolute flex flex-col p-4 gap-4 right-5 bottom-5 border w-[400px] border-zinc-800 rounded-md",
          {
            "visible bg-zinc-950": shown,
          }
        )}
      >
        <div className="flex justify-between">
          <h4 className="font-bold text-sm">
            You submitted the following values:
          </h4>
          <span
            onClick={() => setShown(false)}
            className={clsx(
              "text-zinc-500 text-xl transition duration-200 cursor-pointer hover:flex hover:text-zinc-200 -mt-2",
              {
                "flex transtion ": exitShown,
                "hidden transtion": !exitShown,
              }
            )}
          >
            <GoX />
          </span>
        </div>

        <div className="text-xs font-mono bg-slate-950 h-20 flex flex-col gap-2 p-3 rounded-md w-full">
          <span> {"{"}</span>
          <span>
            "{`email`}": "{email.current.value}"
          </span>
          <span> {"}"}</span>
        </div>
      </div>
    </div>
  );
};

export default Form;

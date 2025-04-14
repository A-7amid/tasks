import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import { GoX } from "react-icons/go";
import Card from "./Card";

const EmailInput = () => {
  const [invalidSubmit, setInvalidSubmit] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [shown, setShown] = useState(false);

  const emailRef = useRef("fsdfds");

  const handleSubmit = (e) => {
    if (e.key !== "Enter") return;
    // console.log(email);
    // console.log(emailRef.current);
    if (emailRef.current.value.length < 3) {
      setInvalidSubmit(true);
      return setSubmitted(false);
    }

    setInvalidSubmit(false);
    setSubmitted(true);
  };

  useEffect(() => {
    console.log("Done");
  }, [emailRef.current.length]);

  return (
    <div className="flex h-52 flex-col text-sm gap-3 lg:h-[160px] transition duration-200 border border-zinc-800 rounded-xl items-center justify-center">
      <div className="lg:w-[290px]">
        <label htmlFor="username" className="flex flex-col gap-2">
          <span
            className={clsx({
              "text-white": !invalidSubmit,
              "text-red-900 font-medium": invalidSubmit,
            })}
          >
            Email
          </span>

          <input
            type="text"
            ref={emailRef}
            placeholder="tobi@gmail.com"
            onKeyDown={handleSubmit}
            className="border border-zinc-800 rounded-sm px-3 py-1"
          />

          {invalidSubmit && (
            <span className="flex text-red-900 text-xs">
              Email must be at least 3 characters.
            </span>
          )}
        </label>
        {/* <button
          type="submit"
          onClick={handleSubmit}
          className="py-2 px-3 cursor-pointer mt-4 bg-white text-black rounded-md text-md"
        >
          Submit
        </button> */}
      </div>

      <Card
        shown={shown}
        setShown={setShown}
        submitted={submitted}
        setSubmitted={setSubmitted}
        email={emailRef.current.value}
      />
    </div>
  );
};

export default EmailInput;

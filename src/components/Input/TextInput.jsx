import clsx from "clsx";
import React from "react";
import { SiNamebase } from "react-icons/si";

const TextInput = ({
  type,
  name,
  nameRef,
  className,
  label,
  placeholder,
  checkEmail,
  invalidEmail,
}) => {
  return (
    <div className="lg:w-[290px]">
      <label htmlFor={name} className="flex flex-col gap-2">
        <span
          className={clsx({
            "text-white": !invalidEmail,
            "text-red-900 font-medium": invalidEmail,
          })}
        >
          {label}
        </span>

        <input
          placeholder={placeholder}
          className={className}
          type={type}
          ref={nameRef}
          onKeyDown={checkEmail}
        />

        {invalidEmail && (
          <span className="flex text-red-900 text-xs">
            {name} must be at least 3 characters.
          </span>
        )}
      </label>
    </div>
  );
};

export default TextInput;

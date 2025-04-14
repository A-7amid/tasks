import React from "react";

const Badge = () => {
  return (
    <div className="flex flex-col h-28 gap-3 lg:h-[100px] transition duration-200 border border-zinc-800 rounded-xl items-center justify-center">
      <span className="font-semibold text-xs px-3 py-0.5 rounded-md bg-red-800 hover:bg-red-900 transition ease-in duration-100">
        Destructive
      </span>
    </div>
  );
};

export default Badge;

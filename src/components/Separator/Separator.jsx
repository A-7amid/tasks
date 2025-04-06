import React from "react";

const Separator = () => {
  return (
    <div className="flex flex-col text-sm gap-3 relative h-[200px] transition duration-200 border border-neutral-800 rounded-md items-center justify-center">
      <div>
        <h5 className="font-semibold text-md mb-1">Radix Primitives</h5>
        <span className="text-zinc-300">
          An open-source UI component library.
        </span>
        <div className="h-px my-4 bg-zinc-700"></div>

        <div className="flex gap-2 items-center">
          <span>Blog</span>
          <div className="h-px rotate-90 w-4 translate-y-0.5 bg-zinc-700"></div>
          <span>Docs</span>
          <div className="h-px rotate-90 w-4 translate-y-0.5 bg-zinc-700"></div>
          <span>Source</span>
        </div>
      </div>
    </div>
  );
};

export default Separator;

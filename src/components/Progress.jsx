import React, { useEffect, useState } from "react";

const Progress = () => {
  const [width, setWidth] = useState("15%");

  useEffect(() => {
    setTimeout(() => {
      setWidth("80%");
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col h-52  gap-3 relative lg:h-full transition duration-200 border border-zinc-800 rounded-xl items-center justify-center">
      <div>
        <div className="relative bg-zinc-700 w-64 h-2 flex rounded-md">
          <div
            className={`bg-zinc-100 w-[${width}] transition duration-200 relative rounded-md`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;

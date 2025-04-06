import React, { useEffect, useState } from "react";

const Progress = () => {
  const [width, setWidth] = useState("15%");

  useEffect(() => {
    setTimeout(() => {
      setWidth("80%");
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col gap-3 relative h-[150px] transition duration-200 border border-zinc-800 rounded-md items-center justify-center">
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

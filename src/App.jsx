import React from "react";
import HoverCard from "./components/HoverCard";
import EmailInput from "./components/Input/EmailInput";
import RadioGroups from "./components/RadioGroups";
import Toggle from "./components/Toggle";
import Badge from "./components/Badge";
import Slider from "./components/Slider";
import Separator from "./components/Separator/Separator";
import Progress from "./components/Progress";

function App() {
  return (
    <div className="text-white bg-zinc-950 min-h-screen max-h-full">
      <div className="mx-auto lg:py-5 container grid grid-cols-1 gap-y-1 sm:grid-cols-2 sm:gap-4 lg:grid lg:grid-cols-4 lg:gap-4 border border-zinc-900 lg:border-none px-2 py-2 ">
        <div className="main-container">
          <HoverCard />
          <Progress />
        </div>
        <div className="main-container">
          <RadioGroups />
          <EmailInput />
        </div>
        <div className="main-container">
          <div className="grid grid-cols-2 sm:grid-cols-1 gap-x-2">
            <Toggle />
            <Badge />
          </div>
          <Separator />
        </div>
        <div className="main-container lg:rotate-90 lg:mx-6">
          <Slider />
        </div>
      </div>
    </div>
  );
}

export default App;

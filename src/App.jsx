import React from "react";
import HoverCard from "./components/HoverCard";
import Input from "./components/Input";
import RadioGroups from "./components/RadioGroups";
import Toggle from "./components/Toggle";
import Badge from "./components/Badge";
import Slider from "./components/Slider";
import Separator from "./components/Separator/Separator";
import Progress from "./components/Progress";

function App() {
  return (
    <div className="text-white bg-zinc-950 min-h-screen max-h-full">
      <div className="mx-auto py-5 container grid grid-cols-4 gap-4">
        <div className="main-container">
          <HoverCard />
          <Separator />
        </div>
        <div className="main-container">
          <Input />
          <Toggle />
        </div>
        <div className="main-container">
          <RadioGroups />
          <Slider />
        </div>
        <div className="main-container">
          <Progress />
          <Badge />
        </div>
      </div>
    </div>
  );
}

export default App;

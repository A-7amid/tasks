import React from "react";
import HoverCard from "./components/HoverCard";
import Input from "./components/Input";
import RadioGroups from "./components/RadioGroups";
import Toggle from "./components/Toggle";

function App() {
  return (
    <div className="flex gap-4 text-white bg-zinc-950 min-h-screen max-h-full p-4">
      <HoverCard />
      <Input />
      <RadioGroups />
      <Toggle />
    </div>
  );
}

export default App;

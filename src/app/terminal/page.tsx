"use client";

import { useState } from "react";
import { Prompt } from "./components";

export default function Terminal() {
  const [command, setCommand] = useState("");
  return (
    <div className=" bg-[#1b1b1b] flex justify-center items-center  ">
      <div className="flex justify-center  min-h-screen  p-2 w-full">
        <Prompt />

        <div className="w-full">
          <input
            className=" w-full bg-[#1b1b1b]   text-green-500 font-bold text-2xl caret-white p-2  focus:outline-none border-box"
            autoFocus
            value={command}
            spellCheck={false}
            onChange={(e) => setCommand(() => e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log(command);
                setCommand(() => "");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

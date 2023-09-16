"use client";

import { useState } from "react";

export default function Terminal() {
  const [value, setValue] = useState("");
  return (
    <div className=" bg-[#1b1b1b] flex justify-center items-center  ">
      <div className="flex justify-center  min-h-screen  p-4 w-full">
        <div className="flex h-full text-green-500 text-2xl p-2 bg-[#1b1b1b] font-bold">
          root@orwa:~${" "}
        </div>

        <div className="w-full">
          <input
            className=" w-full bg-[#1b1b1b] decoration-transparent  text-green-500 font-bold text-2xl caret-white p-2  resize-none focus:outline-none border-box"
            autoFocus
            value={value}
            spellCheck={false}
            onChange={(e) => setValue(() => e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                console.log(value);
                setValue("");
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}

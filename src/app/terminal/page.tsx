"use client";

import { useState } from "react";

export default function Terminal() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full bg-[#140614] flex justify-center items-center min-h-screen flex-col p-4 ">
      <textarea
        className=" w-full  bg-black   text-green-500 font-bold text-2xl caret-white p-2  resize-none focus:outline-none  flex-grow border-box"
        autoFocus
        defaultValue={">"}
        onChange={(e) => setValue(() => e.target.value)}
      />
    </div>
  );
}

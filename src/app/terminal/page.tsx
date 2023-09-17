"use client";

import { useState } from "react";
import {
  Terminal as Term,
  useEventQueue,
  textLine,
  textWord,
  commandWord,
} from "@nojsja/crt-terminal";

const bannerText = `
Hello world!

And not only world
`;
export default function Terminal() {
  const eventQueue = useEventQueue();
  const { print, clear } = eventQueue.handlers;

  return (
    <div className="flex ">
      <div className=" w-full min-h-screen">
        <Term
          queue={eventQueue}
          prompt={"root@orwa:~$ "}
          onCommand={(command) => {
            if (command === "clear") {
              clear();
            }
          }}
          focusOnMount={true}
        />
      </div>
    </div>
  );
}

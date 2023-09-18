"use client";

import { useState } from "react";
import {
  Terminal as Term,
  useEventQueue,
  textLine,
  textWord,
  commandWord,
} from "@nojsja/crt-terminal";

import { Command } from "./utils";

export default function Terminal() {
  const eventQueue = useEventQueue();
  const handlers = eventQueue.handlers;

  return (
    <div className="flex ">
      <div className=" w-full min-h-screen">
        <Term
          queue={eventQueue}
          prompt={"root@orwa:~$ "}
          onCommand={(command) => {
            switch (command) {
              case Command.CLEAR:
                handlers.clear();
                break;
              case Command.LS:
                handlers.print([
                  textLine({
                    words: [
                      textWord({ characters: "You entered\n command: " }),
                    ],
                  }),
                  textLine({
                    words: [
                      textWord({ characters: "You\n entered\n command: " }),
                    ],
                  }),
                ]);
              default:
                break;
            }
          }}
          focusOnMount={true}
        />
      </div>
    </div>
  );
}

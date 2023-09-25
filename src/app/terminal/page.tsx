"use client";

import { useEffect, useState } from "react";
import {
  Terminal as Term,
  commandWord,
  textLine,
  textWord,
  useEventQueue,
} from "@nojsja/crt-terminal";

import { Command, getLsResponse } from "./utils";

import cmds from "./utils/commands.json";

export default function Terminal() {
  const eventQueue = useEventQueue();
  const { handlers } = eventQueue;

  const [cwd, setCwd] = useState("~");
  const [terminalPrompt, setTerminalPrompt] = useState("orwa@proxy:~$ ");

  const commands = cmds["commands"] as Array<{
    name: string;
    description: string;
  }>;
  useEffect(() => {
    setTerminalPrompt(`orwa@proxy:${cwd}$ `);
  }, [cwd]);

  return (
    <div className="flex">
      <div className=" w-full min-h-screen">
        <Term
          printer={{ charactersPerTick: 14 }}
          queue={eventQueue}
          prompt={terminalPrompt}
          onCommand={(command) => {
            switch (command) {
              case Command.CLEAR:
                handlers.clear();
                break;
              case Command.LS:
                handlers.print(getLsResponse());
                break;
              case Command.CD:
                setCwd(() => commandWord);
                break;
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

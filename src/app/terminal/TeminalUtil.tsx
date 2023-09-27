/* eslint-disable no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import {
  Terminal as Term,
  textLine,
  textWord,
  useEventQueue,
} from "@nojsja/crt-terminal";

import {
  Command,
  getRootLsResponse,
  getLsPersonalResponse,
  getPersonalFileInfo,
  FolderStructure,
} from "./utils";

import cmds from "./utils/commands.json";

export default function Terminal() {
  const eventQueue = useEventQueue();
  const { handlers, api } = eventQueue;

  const [cwd, setCwd] = useState("~");
  const [terminalPrompt, setTerminalPrompt] = useState("orwa@proxy:~$ ");

  // Serialized commands from json
  const commands = cmds["commands"] as Array<{
    name: string;
    description: string;
  }>;

  useEffect(() => {
    setTerminalPrompt(`orwa@proxy:${cwd}$ `);
  }, [cwd]);

  return (
    <Term
      printer={{ charactersPerTick: 14 }}
      queue={eventQueue}
      prompt={terminalPrompt}
      onCommand={(command) => {
        const split_command = command.split(" ");
        console.log(split_command);

        const operator = split_command[0];
        const operatedOn =
          split_command.length > 1 ? split_command[1] : ("" as string);

        switch (operator) {
          case Command.CLEAR:
            handlers.clear();
            break;

          case Command.LS:
            if (cwd !== "~") {
              handlers.print(getLsPersonalResponse());
              break;
            }
            handlers.print(getRootLsResponse());
            break;

          case Command.CD: {
            if (
              operatedOn === "~" ||
              operatedOn.length === 0 ||
              operatedOn === ".."
            ) {
              setCwd(() => "~");
              break;
            }

            if (operatedOn === "personal") {
              setCwd(() => "/" + operatedOn);
              break;
            }

            handlers.print([
              textLine({
                words: [
                  textWord({
                    characters: `cd: ${operatedOn}: No such file or directory`,
                  }),
                ],
              }),
            ]);

            break;
          }
          case Command.PWD: {
            handlers.print([
              textLine({
                words: [
                  textWord({
                    characters: `${
                      cwd === "~" ? "/home/orwa" : "home/orwa/personal"
                    }`,
                  }),
                ],
              }),
            ]);
            break;
          }
          case Command.CAT: {
            if (operatedOn.length === 0) {
              handlers.print([
                textLine({
                  words: [
                    textWord({
                      characters: "Usage: cat [FILE]",
                    }),
                  ],
                }),
              ]);
              break;
            }
            if (cwd !== "/personal" && operatedOn in FolderStructure) {
              handlers.print([
                textLine({
                  words: [
                    textWord({
                      characters: "Permission denied",
                    }),
                  ],
                }),
              ]);
              break;
            } else {
              handlers.print([
                textLine({
                  words: [
                    textWord({
                      characters: getPersonalFileInfo(operatedOn),
                    }),
                  ],
                }),
              ]);
            }
            break;
          }
          default: {
            if (commands.find((c) => c.name === operator)) {
              handlers.print([
                textLine({
                  words: [
                    textWord({
                      characters: "Permission denied",
                    }),
                  ],
                }),
              ]);
            } else {
              handlers.print([
                textLine({
                  words: [
                    textWord({
                      characters: `${operator}: command not found`,
                    }),
                  ],
                }),
              ]);
            }
            break;
          }
        }
      }}
      focusOnMount={true}
    />
  );
}

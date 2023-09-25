/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */

import { textLine, textWord } from "@nojsja/crt-terminal";

import cmds from "./commands.json";

export const Command = {
  LS: "ls",
  HELP: "help",
  CD: "cd",
  CAT: "cat",
  PWD: "pwd",
  CLEAR: "clear",
  EXIT: "exit",
} as const;

type ObjectValues<T> = T[keyof T];

export type Command = ObjectValues<typeof Command>;

const FolderStructure = {
  SECRET_PLAN: "secret_plan.txt",
  HIDDEN_VAULT: "hidden_vault.doc",
  HACK_MAINFRAME: "hack_mainframe.exe",
  SHADY_TRANSACTIONS: "shady_transactions.csv",
  COVERT_OPS_BLUEPRINT: "covert_ops_blueprint.pdf",
  EVIDENCE: "evidence.mp4",
  VIRUS_PAYLOAD: "virus_payload.dll",
  INFO: {
    ABOUT: "about.md",
    EXPERIENCE: "experience.md",
    SKILLS: "skills.md",
    EDUCATION: "education.md",
    SPOKEN_LANGUAGES: "spoken_languages.md",
    CONTACT: "contact.md",
    PROJECTS: "projects.md",
  },
} as const;

export function getLsResponse() {
  //Serialized commands
  const commands = cmds["commands"] as Array<{
    name: string;
    description: string;
  }>;

  console.log(
    commands.find((command) => command.name === Command.LS)?.description,
  );
  return [
    textLine({
      words: [
        textWord({
          characters: `-rw-------  1  orwa orwa    27  Dec 10 04:26   ${FolderStructure.SECRET_PLAN}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw-------  2  orwa orwa  4096  Jul  6 08:17   ${FolderStructure.HIDDEN_VAULT}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw------- 43  orwa orwa 16384  May  7 15:12   ${FolderStructure.HACK_MAINFRAME}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw-------  1  orwa orwa     0  Sep 24 08:41   ${FolderStructure.SHADY_TRANSACTIONS}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw------- 11  orwa orwa    27  Jun  3 16:24   ${FolderStructure.COVERT_OPS_BLUEPRINT}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw-------  6  orwa orwa  4096  Aug  5 18:05   ${FolderStructure.EVIDENCE}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw------- 56  orwa orwa  4096  May 27 15:33   ${FolderStructure.VIRUS_PAYLOAD}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: "drw-------  2  orwa orwa  4096  Jan 11 14:20   personal",
        }),
      ],
    }),
  ];
}

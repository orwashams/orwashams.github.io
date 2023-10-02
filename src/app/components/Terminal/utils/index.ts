/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */

import { textLine, textWord } from "@nojsja/crt-terminal";

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

export const FolderStructure = {
  SECRET_PLAN: "secret_plan.txt",
  HIDDEN_VAULT: "hidden_vault.doc",
  HACK_MAINFRAME: "hack_mainframe.exe",
  SHADY_TRANSACTIONS: "shady_transactions.csv",
  COVERT_OPS_BLUEPRINT: "covert_ops_blueprint.pdf",
  EVIDENCE: "evidence.mp4",
  VIRUS_PAYLOAD: "virus_payload.dll",
  PERSONAL: {
    ABOUT: "about.md",
    EXPERIENCE: "experience.md",
    SKILLS: "skills.md",
    EDUCATION: "education.md",
    SPOKEN_LANGUAGES: "spoken_languages.md",
    CONTACT: "contact.md",
    PROJECTS: "projects.md",
  },
} as const;

export type FolderStructure = ObjectValues<typeof FolderStructure>;

const INFO = {
  ABOUT: `
  Software Developer with a strong passion for open-source software and extensive 
  experience in utilizing Linux systems. I am dedicated to refining and customizing 
  software solutions to achieve the highest levels of performance and functionality. 
  My ability to quickly grasp new concepts allows me to 
  adapt to emerging technologies and methodologies with ease. 
  Additionally, I am flexible when it comes to location and working hours, 
  always willing to go the extra mile to meet project deadlines. 
  My  commitment to delivering outstanding results and ensuring client satisfaction 
  sets me apart in the industry.
  `,
  EXPERIENCE: `
  RunnableWeb 12/2022 - 5/2023

  Frontend Developer

  In addition to my primary role as a Frontend developer,
  I possess versatility in working with both the frontend and backend components.
  Alongside technologies like React, React Native, Tailwind/Nativewind, NextJS, and NodeJS,
  I also proficiently utilize PostgreSQL,
  SQL, and NestJS for backend development. 
  This well-rounded skill set enables me to contribute effectively to the
  full-stack development process,
  ensuring seamless integration and optimal functionality across the entire application ecosystem.
  `,
  SKILLS: `
    Git and Github.
    Linux.
    NodeJS.
    Typescript.
    React.
    React Native.
    NestJS.
    PostgreSQL.
    SQL.
    Tailwind.
    Nativewind.
    NextJS.
    NX.
    Rust.
    C.
    C++.
  `,
  EDUCATION: `
  From 2018 To 2022

  Tel Hai Academy Collage
  
  B.Sc. CS

  Throughout my four-year B.Sc. in Computer Science,
  I gained expertise in programming, algorithms, 
  software engineering, and more. 
  Hands-on projects and collaborative work sharpened 
  my problem-solving and communication skills. 
  With a strong foundation, I'm prepared to contribute innovative solutions in this 
  highly dynamic and changing field of technology.
  `,
  SPOKEN_LANGUAGES: `
  Arabic - Native speaker

  English - Close to fluent speaker, fluent writer, fluent reader  

  Hebrew - Close to fluent speaker, expert writer, fluent reader 
`,
  CONTACT: `
  Phone: Israel - +972 52-799-3103.

  Email: orwa.s.shams@gmail.com.
  `,
  PROJECTS: `
  At:
  https://github.com/OrwaShams
  `,
};

export function getRootLsResponse() {
  return [
    textLine({
      words: [
        textWord({
          characters: `-rw-------  1  root root   205  Dec 10 04:26   ${FolderStructure.SECRET_PLAN}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw-------  2  root root  4096  Jul  6 08:17   ${FolderStructure.HIDDEN_VAULT}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rwx------ 43  root root 16384  May  7 15:12   ${FolderStructure.HACK_MAINFRAME}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw-------  1  root root     0  Sep 24 08:41   ${FolderStructure.SHADY_TRANSACTIONS}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw------- 11  root root    27  Jun  3 16:24   ${FolderStructure.COVERT_OPS_BLUEPRINT}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rwx------  6  root root  4096  Aug  5 18:05   ${FolderStructure.EVIDENCE}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw------- 56  root root  4096  May 27 15:33   ${FolderStructure.VIRUS_PAYLOAD}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: "drwx------  2  root root  4096  Jan 11 14:20   personal",
        }),
      ],
    }),
  ];
}

export function getLsPersonalResponse() {
  return [
    textLine({
      words: [
        textWord({
          characters: `-rw-r--r--  1  orwa orwa  4096  Jan 11 14:19   ${FolderStructure.PERSONAL.ABOUT}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw-r--r--  1  orwa orwa  4096  Jul 15 15:20   ${FolderStructure.PERSONAL.EXPERIENCE}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw-r--r--  1  orwa orwa   220  Nov  7 22:23   ${FolderStructure.PERSONAL.SKILLS}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw-r--r--  1  orwa orwa  4096  Jun 11 04:21   ${FolderStructure.PERSONAL.EDUCATION}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw-r--r--  1  orwa orwa  4096  May 16 17:47   ${FolderStructure.PERSONAL.SPOKEN_LANGUAGES}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw-r--r--  1  orwa orwa  4096  Dec 10 20:52   ${FolderStructure.PERSONAL.CONTACT}`,
        }),
      ],
    }),
    textLine({
      words: [
        textWord({
          characters: `-rw-r--r--  1  orwa orwa  4096  Mar 21 16:24   ${FolderStructure.PERSONAL.PROJECTS}`,
        }),
      ],
    }),
  ];
}

export function getPersonalFileInfo(fileName: string) {
  switch (fileName) {
    case FolderStructure.PERSONAL.ABOUT:
      return INFO.ABOUT;
    case FolderStructure.PERSONAL.EXPERIENCE:
      return INFO.EXPERIENCE;
    case FolderStructure.PERSONAL.SKILLS:
      return INFO.SKILLS;
    case FolderStructure.PERSONAL.EDUCATION:
      return INFO.EDUCATION;
    case FolderStructure.PERSONAL.SPOKEN_LANGUAGES:
      return INFO.SPOKEN_LANGUAGES;
    case FolderStructure.PERSONAL.CONTACT:
      return INFO.CONTACT;
    case FolderStructure.PERSONAL.PROJECTS:
      return INFO.PROJECTS;
    default:
      return `cat: ${fileName}: No such file or directory`;
  }
}

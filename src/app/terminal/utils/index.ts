export const Command = {
  CD: "cd",
  LS: "ls",
  CLEAR: "clear",
  EXIT: "exit",
  HELP: "help",
  PWD: "pwd",
  CAT: "cat",
  TOUCH: "touch",
  MKDIR: "mkdir",
  RMDIR: "rmdir",
  RM: "rm",
} as const;

type ObjectValues<T> = T[keyof T];

export type Command = ObjectValues<typeof Command>;

type File = {
  name: string;
  content: string;
};

type Directory = {
  name: string;
  files: File[];
  directories: Directory[];
};

"use client";
import React from "react";

import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Modal } from "@mantine/core";

import { getPersonalFileInfo } from "../Terminal/utils";

type Props = {
  text: string;
};

export default function Blinker({ text }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title={text}
        className="font-VT323 text-3xl text-green-300 whitespace-pre-line  "
        size="xl"
        centered
        fullScreen={isMobile}
        radius={9}
      >
        <div className="">
          {getPersonalFileInfo(text.toLowerCase() + ".md")}
        </div>
      </Modal>
      <div
        className="text-7xl font-VT323 text-green-700 cursor-pointer "
        onMouseDown={open}
      >
        <span className="peer ">{text}</span>
        <span className="opacity-0 peer-hover:animate-blink">_</span>
      </div>
    </div>
  );
}

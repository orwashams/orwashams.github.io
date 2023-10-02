"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypingAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Luckwearer",
        2000,
        "Barrel-rider",
        2000,
        "web-cutter",
        2000,
        "he that walks unseen",
        2000,
        "clue-finder",
        2000,
        "the stinging fly",
        2000,
        "I come from under the hill",
        2000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      className="inline-block text-[1.4em] font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-[#cde6a5]  to-[#0ab60a] font-VT323"
    />
  );
}

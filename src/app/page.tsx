"use client";
import Image from "next/image";
import { Terminal } from "./components/Terminal";
import { Grid } from "@mantine/core";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center ">
      <Grid>
        <Grid.Col className="h-[40rem] w-[40rem] flex flex-col gap-20">
          <div className="flex justify-center">
            <Image
              src="logo/brand04_white.svg"
              alt="Orwa's brand logo"
              width={100}
              height={100}
            />
          </div>
          <div className="text-6xl font-VT323 flex flex-col gap-20">
            <p>Orwa I&apos;m a...Developer?!!</p>
          </div>
        </Grid.Col>
        <Grid.Col className="flex flex-col h-[40rem] w-[69rem]">
          <Terminal />
        </Grid.Col>
      </Grid>
    </main>
  );
}

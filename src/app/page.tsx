import Image from "next/image";
import { Terminal, TypingAnimation, Blinker } from "./components";
import { Grid, Container, GridCol } from "@mantine/core";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center ">
      <Container fluid>
        <Grid className="w-full min-h-screen flex items-center justify-center ">
          <GridCol span="auto" className="flex flex-col gap-24 items-center ">
            <div className="flex flex-col gap-8 items-center ">
              <div className="p-6">
                <Image
                  src="logo/brand04_white.png"
                  alt="Orwa"
                  width={200}
                  height={200}
                />
              </div>
              <div>
                <TypingAnimation />
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-center pl-7">
              <Blinker text="About" />
              <Blinker text="Contact" />
              <Blinker text="Experience" />
            </div>
          </GridCol>
          <GridCol
            span="auto"
            className="sm:flex  justify-center items-center hidden"
            w={1900}
            h="50rem"
          >
            <Terminal />
          </GridCol>
        </Grid>
      </Container>
    </main>
  );
}

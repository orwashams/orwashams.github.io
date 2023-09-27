import Image from "next/image";
import Terminal from "./terminal/TeminalUtil";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="flex items-center justify-center gap-56 bg-red-700">
        <div className="flex flex-col items-center justify-center bg-blue-600">
          <Image
            src="logo/brand04_white.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="bg-purple-500">
          <Terminal />
        </div>
      </div>
    </main>
  );
}

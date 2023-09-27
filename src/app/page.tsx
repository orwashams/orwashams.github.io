import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  items-center justify-center">
      <div>
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>
    </main>
  );
}

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-primary font-sans dark:bg-primary">
      <div className="flex flex-row flex-2 items-center w-full">
        <div className="flex flex-1"></div>
        <div className="flex flex-9 text-6xl">It&apos;s Time!</div>
      </div>
      <div className="flex flex-row gap-4 border-2 border-white rounded-md p-4">
        <div className="flex flex-col items-center">
          <div className="text-6xl font-bold">11:33:20</div>
          <Image src="/clock.svg" alt="Clock" width={64} height={64} />
          <div className="text-2xl">Monday, October 24, 2024</div>
        </div>
        <div className="text-1xl">AM</div>
      </div>
      <div className="flex flex-4"></div>
    </div>
  );
}

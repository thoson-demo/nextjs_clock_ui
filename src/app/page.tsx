import Clock from "@/components/Clock";
import Headers from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start bg-primary font-sans dark:bg-primary">
      <Headers />
      <div className="flex flex-1 items-center justify-center bg-surface dark:bg-surface w-full">
        <Clock />
      </div>
    </div>
  );
}

import ThemeToggler from "@/components/theme-toggler";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="">
        <button className="btn">Test Button</button>
        <ThemeToggler />
      </div>
    </main>
  );
}

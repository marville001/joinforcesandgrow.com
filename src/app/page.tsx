import ThemeToggler from "@/components/theme-toggler";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <h1 className="text-4xl ">JoinForcesAndGrow</h1>
      <div className="">
        <button className="btn">Test Button</button>
        <ThemeToggler />
      </div>
    </main>
  );
}

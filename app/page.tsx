import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header>这是头部</header>
      <div>
        <Link href={"/dashboard"}>dashboard</Link>
      </div>

      <div>这是footer</div>
    </main>
  );
}

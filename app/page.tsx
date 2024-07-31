import Link from "next/link";
import { Inter, Roboto_Mono } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
  variable: "--Roboto_Mono",
});
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <header>这是头部</header>
      <div>这是一种字体</div>
      <div className={roboto_mono.className}>这是另一种字体</div>
      <div>
        <Link href={"/dashboard"}>dashboard</Link>
      </div>

      <div>这是footer</div>
    </main>
  );
}

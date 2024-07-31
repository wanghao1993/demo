"use client";

import { ScrollContext } from "@/provider/scrollProvider";
import Link from "next/link";
import { useContext } from "react";

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollY } = useContext(ScrollContext);
  return (
    <div className="h-[100vh]">
      <div>
        <Link href={"/dashboard/1"}>我们去仪表盘1{scrollY}</Link>

        <div>scrollY: {scrollY}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}

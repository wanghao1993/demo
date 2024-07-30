import Link from "next/link";

export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[100vh]">
      <div>
        <Link href={"/dashboard/1"}>我们去仪表盘1</Link>
      </div>
      <div>{children}</div>
    </div>
  );
}

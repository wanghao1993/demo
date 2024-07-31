"use client";
export default function DashboardPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[100vh]">
      Client
      <div>{children}</div>
    </div>
  );
}

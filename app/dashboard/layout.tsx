export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="h-10 border">这是仪表盘页面</div>
      <main>{children}</main>
    </div>
  );
}

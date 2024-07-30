async function getData() {
  const res = await fetch("http://localhost:3001/api/dashboard/metric/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function DashboardPage(datas: any) {
  const data = await getData();
  return (
    <div className="h-[100vh]">
      <div>
        这是仪表盘页面 {datas.params.id} {JSON.stringify(data)}{" "}
      </div>
    </div>
  );
}

function getDate(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("This is Great.");
    }, 3000)
  );
}

export default async function Metric1() {
  const data: string = await getDate();

  return (
    <>
      <div>{data}</div>
    </>
  );
}

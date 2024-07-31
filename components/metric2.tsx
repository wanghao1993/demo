function getDate(): Promise<string> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("This is Great 2.");
    }, 6000)
  );
}

export default async function Metric2() {
  const data: string = await getDate();

  return (
    <>
      <div>{data}</div>
    </>
  );
}

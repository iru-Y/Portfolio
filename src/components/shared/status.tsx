export default function Status({
  width,
  height,
  title,
  subTitle,
}: {
  width: string;
  height: string;
  title: string;
  subTitle: string
}) {
  return (
    <>
      <div
        className="border-gray-400 rounded-lg bg-container flex flex-col items-center justify-center m-2"
        style={{ width: width, height: height }}
      >
        <h1 className="text-2xl">{title}</h1>
        <p className="text-2xl">{subTitle}</p>
      </div>
    </>
  );
}

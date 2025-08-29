export default function ButtonComponent({ text }: { text: string }) {
  return (
    <>
      <button
        className="text-black font-medium w-30 h-10 bg-secondary rounded-sm cursor-pointer"
        type="submit"
        onClick={() => {
          console.log("click");
        }}
      >
        {" "}
        {text}
      </button>
    </>
  );
}

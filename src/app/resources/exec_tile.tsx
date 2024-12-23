export default function ExecTile({
  name,
  title,
}: {
  name: string;
  title: string;
}) {
  return (
    <div className="flex flex-col mx-3">
      <div className="border-2 w-[200px] h-[200px] rounded-xl border-orange-500"></div>
      <h3 className="text-2xl">{name}</h3>
      <p>{title}</p>
    </div>
  );
}

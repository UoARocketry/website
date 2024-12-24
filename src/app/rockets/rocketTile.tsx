export default function RocketTile({
  colored,
  title,
  subtitle,
  description,
}: {
  colored: boolean;
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <>
      <div
        className={`${colored ? "bg-gradient-to-b from-[#1e1e1e] to-[#70798B] h-2" : "none"}`}
      />
      <div
        className={`flex ${colored ? "bg-[#70798B] flex-row-reverse" : "bg-[#1e1e1e]"} py-10`}
      >
        <div
          className={`flex flex-1 flex-col rounded-xl p-5 ${colored ? "pr-[8.3333333%]" : "pl-[8.33333%]"}`}
        >
          <h3 className="text-5xl">{title}</h3>
          <br />
          <p className="text-xl text-orange-500">{subtitle}</p>
          <br />
          <p>{description}</p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div
            className={`border-2 w-2/3 aspect-square rounded-xl border-orange-500 }`}
          />
        </div>
      </div>
      <div
        className={`${colored ? "bg-gradient-to-t from-[#1e1e1e] to-[#70798B] h-2" : "none"}`}
      />
    </>
  );
}

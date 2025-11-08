import Link from "next/link";

export const Service_card = ({ blok, isHovered }: any) => {
  return (
    <div className="p-4 flex flex-row items-center border-b overflow-hidden">
      <Link href={blok.service_link?.url || "#"} className="w-[842px]">
        <h3
          className={`text-8xl font-semibold mb-2 tracking-[-0.08em] transition-colors duration-300 ${
            isHovered ? "text-amber-300" : "text-black"
          } cursor-pointer`}
        >
          {blok.service_name}
        </h3>
      </Link>

      <div className="w-[286px]">
        <p className="text-gray-600 text-xl">{blok.service_description}</p>
      </div>
    </div>
  );
};

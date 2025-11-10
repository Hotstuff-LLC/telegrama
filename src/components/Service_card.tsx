import Link from "next/link";

export const Service_card = ({ blok }: any) => {
  // Ensure the URL starts with "/"
  const href = blok.service_url ? `/${blok.service_url.replace(/^\/+/, "")}` : "#";

  return (
    <div className="w-full md:w-[842px]">
      <Link href={href}>
        <h3 className="text-4xl sm:text-5xl text-left hover:text-[#F0B225] md:text-7xl lg:text-8xl font-semibold mb-2 tracking-[-0.05em] text-black cursor-pointer">
          {blok.service_name}
        </h3>
      </Link>
    </div>
  );
};

import Image from "next/image";
import Link from "next/link";

export const Hero_production_item = ({ blok }: any) => {
  const { hero_production_title, hero_production_url, production_thumbnail } = blok;

  return (
    <div className="relative pb-4">
      <h3 className="font-dm-sans font-normal text-[64px] leading-[110%] tracking-[-0.01em] capitalize">
        <Link
          href={hero_production_url?.url || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {hero_production_title}
        </Link>
      </h3>

      {production_thumbnail?.filename && (
        <div className="w-full h-60 relative rounded-lg overflow-hidden">
          <Image
            src={production_thumbnail.filename}
            alt={hero_production_title || "Production"}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default Hero_production_item;

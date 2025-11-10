import { Bio_card } from "./bio_card.client";

export const Bios = ({ blok }: any) => {
  return (
    <div id="bios" className="py-12 md:py-20 container mx-auto px-6 md:px-0">
      <h3
        className="
          text-3xl md:text-6xl 
          max-w-full md:max-w-[473px] 
          pl-0 md:pl-16 
          pb-8 md:pb-16
        "
      >
        Introduction to the partners in Telegrama
      </h3>

      <div
        className="
          flex flex-col md:flex-row 
          flex-wrap gap-8 
          md:ml-50
          items-center md:items-start
        "
      >
        {blok.bio_card?.map((bio: any, index: number) => (
          <Bio_card
            key={bio._uid}
            index={index}
            name={bio.bio_name}
            text={bio.bio_text}
            image={bio.bio_image?.filename}
          />
        ))}
      </div>
    </div>
  );
};

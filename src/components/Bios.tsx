import { Bio_card } from "./bio_card.client";

export const Bios = ({ blok }: any) => {
  return (
    <div className="py-20 container mx-auto">
      <h3 className="text-6xl max-w-[473px] pl-16 pb-16">
        Introduction to the partners in Telegrama
      </h3>

      <div className="flex flex-row flex-wrap gap-8 ml-50">
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

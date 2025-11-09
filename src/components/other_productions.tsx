import { StoryblokComponent } from "@storyblok/react";

export const other_productions = ({ blok }: any) => {
  return (
    <div className="w-full container mx-auto px-4 md:px-6 py-8 md:py-12">
      <h5 className="text-[#EC3A1A] text-sm md:text-base uppercase font-bold tracking-[0.1rem] mb-6 md:mb-8 text-center md:text-left">
        {blok.other_production_title}
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {blok.production_list?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

import { StoryblokComponent } from "@storyblok/react";

export const other_productions = ({ blok }: any) => {
  return (
    <div className="w-full px-6 py-12">
      <h5 className="text-[#EC3A1A] text-base uppercase font-bold tracking-[0.1rem] mb-8">
        {blok.other_production_title}
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blok.production_list?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};
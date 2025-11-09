import { StoryblokComponent } from "@storyblok/react";

export const production_card = ({ blok }: any) => {
  return (
    <div className="p-4 flex flex-col">
      <h5 className="text-[#1D2020] text-4xl pb-16 font-semibold min-h-40">
        {blok.production_work_title}
      </h5>

      {blok.production_links?.map((nestedBlok: any, index: number) => (
        <div
          key={nestedBlok._uid}
          className={`p-4 ${index !== 0 ? "border-t" : ""}`}
        >
          <StoryblokComponent blok={nestedBlok} />
        </div>
      ))}
    </div>
  );
};

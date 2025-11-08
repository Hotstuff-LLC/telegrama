import { StoryblokComponent } from "@storyblok/react";

export const Benefits = ({ blok }: any) => {
  return (
    <div className="container mx-auto p-8 py-8 pb-20">
        <h3 className="text-6xl text-center py-8 pb-16">Benefits</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 justify-items-center">
                {blok.benefit_card?.map((nestedBlok: any) => (
                <div key={nestedBlok._uid} className="max-w-[500px] w-full">
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                    </div>
            ))}
        </div>
    </div>
  );
};
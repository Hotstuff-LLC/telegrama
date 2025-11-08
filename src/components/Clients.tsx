import { StoryblokComponent } from "@storyblok/react";

export const Clients = ({ blok }: any) => {
  return (
    <div className="p-4 py-16 flex flex-col ">
      <h2 className="p-4 text-6xl mx-auto">Our Clients</h2>
      <div className="p-4 flex flex-row">
                    {blok.client_card?.map((nestedBlok: any) => (
                       <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                        ))}
                   </div>
                   </div>
  );
};

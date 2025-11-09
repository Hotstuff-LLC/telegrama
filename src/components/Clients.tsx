import { StoryblokComponent } from "@storyblok/react";

export const Clients = ({ blok }: any) => {
  return (
    <div className="p-6 md:p-10 lg:py-16 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-10 text-center">
        Our Clients
      </h2>

      <div
        className="
          flex flex-wrap justify-center gap-6
          md:gap-10 lg:gap-16
        "
      >
        {blok.client_card?.map((nestedBlok: any) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};


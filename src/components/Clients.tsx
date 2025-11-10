import { StoryblokComponent } from "@storyblok/react";
import { ClientsCarousel } from "./ClientCarousel";

export const Clients = ({ blok }: any) => {
  // Render Storyblok components on the server
  const cards = blok.client_card?.map((nestedBlok: any) => (
    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
  ));

  return (
    <div className="p-6 md:p-10 lg:py-16 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-10 text-center">
        Our Clients
      </h2>

      {/* Pass rendered server components to client animation wrapper */}
      <ClientsCarousel>{cards}</ClientsCarousel>
    </div>
  );
};



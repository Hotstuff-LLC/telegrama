import { StoryblokComponent } from "@storyblok/react";
import { ServiceHeroClient } from "./ServiceHeroClient";

export const service_heroSection = ({ blok }: any) => {
  return (
    <div
      key={blok._uid}
      className="container mx-auto p-4 pt-32 md:pt-40 md:pl-8"
    >
      {/* Title */}
      <h3 className="text-4xl sm:text-5xl md:text-8xl md:pl-16 font-semibold mb-2 md:w-[600px] tracking-[-0.08em]">
        {blok.hero_service_title}
      </h3>

      {/* Image */}
      {blok.hero_service_img?.filename && (
        <img
          src={blok.hero_service_img.filename}
          alt={blok.hero_service_img.alt || blok.hero_service_title}
          className="w-full sm:w-[500px] md:w-[700px] md:ml-[35%] object-cover rounded-md mb-4"
        />
      )}

      {/* Animated Texts */}
      <ServiceHeroClient
        primaryText={blok.hero_service_text}
        secondaryText={blok.hero_service_text_secundary}
      />
    </div>
  );
};


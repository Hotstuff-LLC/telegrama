import { StoryblokComponent } from "@storyblok/react";

export const service_heroSection = ({ blok }: any) => {

  return (
    <div key={blok._uid} className="p-4 border rounded-lg shadow-sm">
      {blok.hero_service_img?.filename && (
        <img
          src={blok.hero_service_img.filename}
          alt={blok.hero_service_img.alt || blok.hero_service_title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h3 className="text-lg font-semibold mb-2">{blok.hero_service_title}</h3>
      <p className="text-gray-600">{blok.hero_service_text}</p>
    </div>
  );
};
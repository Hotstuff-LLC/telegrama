import { StoryblokComponent } from "@storyblok/react";

export const service_heroSection = ({ blok }: any) => {

  return (
    <div key={blok._uid} className="container mx-auto pl-8 p-4 pt-40">
      <h3 className="text-8xl pl-16 font-semibold mb-2 w-150 tracking-[-0.08em]">{blok.hero_service_title}</h3>
      {blok.hero_service_img?.filename && (
        <img
          src={blok.hero_service_img.filename}
          alt={blok.hero_service_img.alt || blok.hero_service_title}
          className=" ml-[35%] w-[700px] object-cover rounded-md mb-4"

        />
      )}
      <p className="text-3xl w-150 pl-6 pt-8 pb-4 font-semibold">{blok.hero_service_text}</p>
      <p className="text-3xl w-150 pl-6 pb-16">{blok.hero_service_text_secundary}</p>
    </div>
  );
};
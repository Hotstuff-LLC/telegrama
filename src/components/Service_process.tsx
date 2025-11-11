import { StoryblokComponent } from "@storyblok/react";
import { ServiceProcessClient } from "./ServiceProcessClient";
import Image from "next/image";

export const Service_process = ({ blok }: any) => {
  return (
    <div className="relative flex flex-col md:block items-center">
      {/* Image on top for mobile, absolute for desktop */}
      {blok.process_section_image?.filename && (
        <Image
          alt="Process image"
          width={800}
          height={800}
          src={blok.process_section_image.filename}
          className="w-full max-w-[400px] md:w-[450px] md:h-auto object-contain z-10 md:absolute md:top-0 md:right-0 md:mr-16 mb-8 md:mb-0"
        />
      )}

      {/* Cards animated */}
      <ServiceProcessClient>
        {blok.process_card?.map((nestedBlok: any, index: number) => (
          <StoryblokComponent
            blok={{ ...nestedBlok, number: String(index + 1).padStart(2, "0") }}
            key={nestedBlok._uid}
          />
        ))}
      </ServiceProcessClient>
    </div>
  );
};

import { StoryblokComponent } from "@storyblok/react";
import { ServiceProcessClient } from "./ServiceProcessClient";
import Image from "next/image";

export const Service_process = ({ blok }: any) => {
  return (
    <div className="relative">
      {/* Floating image in the top-right corner */}
      {blok.process_section_image?.filename && (
        <Image
          alt="Process image"
          width={800}
          height={800}
          src={blok.process_section_image.filename}
          className="absolute top-0 right-0 w-[450px] mr-16 h-auto object-contain z-10"
        />
      )}

      {/* Process cards animated via client */}
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


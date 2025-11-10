import { StoryblokComponent } from "@storyblok/react";
import { ServiceProcessClient } from "./ServiceProcessClient";

export const Service_process = ({ blok }: any) => {
  return (
    <ServiceProcessClient>
      {blok.process_card?.map((nestedBlok: any, index: number) => (
        <StoryblokComponent
          blok={{ ...nestedBlok, number: String(index + 1).padStart(2, "0") }}
          key={nestedBlok._uid}
        />
      ))}
    </ServiceProcessClient>
  );
};

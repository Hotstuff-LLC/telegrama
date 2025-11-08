import { StoryblokComponent } from "@storyblok/react";

export const Service_process = ({ blok }: any) => {
  return (
    <div className="p-16 container mx-auto">
      {blok.process_card?.map((nestedBlok: any, index: number) => (
        <StoryblokComponent
          blok={{ ...nestedBlok, number: String(index + 1).padStart(2, "0") }}
          key={nestedBlok._uid}
        />
      ))}
    </div>
  );
};
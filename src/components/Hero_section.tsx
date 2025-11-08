import { StoryblokComponent } from "@storyblok/react";
import HeroScrollWrapperClient from "./HeroScrollWrapper";

export const Hero_section = ({ blok }: any) => {

  return (
   <section className="relative w-full h-screen">
      {/* 👇 This stays server-side */}
      <HeroScrollWrapperClient>
        {blok.hero_projects?.map((nestedBlok: any, index: number) => (
        <div key={nestedBlok._uid} className="w-screen h-screen shrink-0 snap-center">
        <StoryblokComponent blok={{ ...nestedBlok, index }} />
      </div>
    ))}
      </HeroScrollWrapperClient>
    </section>
  );
};

import { StoryblokComponent } from "@storyblok/react";
import HeroScrollWrapperClient from "./HeroScrollWrapper";
import { Hero_projects } from "./Hero_projects";

export const Hero_section = ({ blok }: any) => {
  return (
    <section className="relative w-screen h-100dvh overflow-hidden">
      <HeroScrollWrapperClient>
        {blok.hero_projects?.map((nestedBlok: any, index: number) => (
          <div
            key={nestedBlok._uid}
            className="w-screen h-100dvh shrink-0 snap-center flex items-center justify-center"
          >
            <Hero_projects blok={nestedBlok} index={index} />
          </div>
        ))}
      </HeroScrollWrapperClient>
    </section>
  );
};


import { StoryblokComponent } from "@storyblok/react";
import HeroScrollWrapperClient from "./HeroScrollWrapper";
import { Hero_projects } from "./Hero_projects";
import { HeroList } from "./Hero_list";

export const Hero_section = ({ blok }: any) => {
  return (
    <section className="relative w-screen h-[100dvh] overflow-hidden">
      <HeroScrollWrapperClient>
        {/* Project slides */}
        {blok.hero_projects?.map((nestedBlok: any, index: number) => (
          <div
            key={nestedBlok._uid}
            className="
              w-[90vw] h-[100dvh] 
              shrink-0 
              flex items-center justify-center 
              mr-[-10vw]    /* slight overlap to make slides bleed */
            "
          >
            <Hero_projects blok={nestedBlok} index={index} />
          </div>
        ))}

        {/* Final slide: unlocks vertical scroll */}
        <div
          className="
            w-screen h-[100dvh] shrink-0 
            flex items-center justify-center 
            relative z-10
          "
        >
          <HeroList />
        </div>
      </HeroScrollWrapperClient>
    </section>
  );
};



import { StoryblokComponent } from "@storyblok/react";
import HeroScrollWrapperClient from "./HeroScrollWrapper";
import { Hero_projects } from "./Hero_projects"; // import directly for index passing

export const Hero_section = ({ blok }: any) => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <HeroScrollWrapperClient>
        {blok.hero_projects?.map((nestedBlok: any, index: number) => (
          <div
            key={nestedBlok._uid}
            className="w-screen h-screen shrink-0 snap-center"
          >
            {/*Render Hero_projects directly so we can pass index */}
            <Hero_projects blok={nestedBlok} index={index} />
          </div>
        ))}
      </HeroScrollWrapperClient>
    </section>
  );
};


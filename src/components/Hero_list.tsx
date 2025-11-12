import { getStoryblokApi } from "@storyblok/react/rsc";
import HeroListClient from "./Hero_list_client";

export const HeroList = async () => {
  const client = getStoryblokApi();

  // Fetch the story named "hero-section-list"
  const { data } = await client.getStory("hero-section-list", { version: "draft" });
  const heroSection = data.story.content.blocks?.[0]; // grab first block (hero_section_list)
  const items = heroSection?.productions_items || [];

  return (
    <section className="relative w-full text-black py-6 font-['DM_Sans'] font-normal">
      <HeroListClient items={items} />
    </section>
  );
};

export default HeroList;

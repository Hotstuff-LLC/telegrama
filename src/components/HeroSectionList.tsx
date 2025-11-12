import { getStoryblokApi, StoryblokServerComponent } from "@storyblok/react/rsc";

export const HeroSectionList = async () => {
  const client = getStoryblokApi();
  const { data } = await client.getStory("hero_list", { version: "draft" }); // 👈 your Story name in Storyblok
  const listStory = data.story;

  return (
    <section className="w-full">
      <StoryblokServerComponent blok={listStory.content} />
    </section>
  );
};

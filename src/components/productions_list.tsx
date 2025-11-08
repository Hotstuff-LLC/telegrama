import { getStoryblokApi, StoryblokServerComponent } from "@storyblok/react/rsc";

export const ProductionsList = async () => {
  const client = getStoryblokApi();
  const { data } = await client.getStory("other_productions", { version: "draft" });
  const listStory = data.story;

  return (
    <section className="w-full">
      <StoryblokServerComponent blok={listStory.content} />
    </section>
  );
};
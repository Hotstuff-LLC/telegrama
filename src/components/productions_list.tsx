import { getStoryblokApi, StoryblokServerComponent } from "@storyblok/react/rsc";

export const ProductionsList = async () => {
  const client = getStoryblokApi();
  const { data } = await client.getStory("other_productions", { version: "draft" });
  const listStory = data.story;
console.log("ProductionsList story:", JSON.stringify(listStory, null, 2));
  return (
    <section>
      {listStory.content.blocks?.map((blok: any) => (
        <StoryblokServerComponent blok={blok} key={blok._uid} />
      ))}
    </section>
  );
};
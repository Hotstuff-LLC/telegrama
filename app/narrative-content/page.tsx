import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchNarrativePage = async () => {
  const client = getStoryblokApi();

  const response = await client.getStory("narrative-content", {
    version: "draft",
  });

  return response.data.story;
};

export default async function NarrativePage() {
  const story = await fetchNarrativePage();

  return (
    <main>
      <StoryblokStory story={story} />
    </main>
  );
}
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchCastingPage = async () => {
  const client = getStoryblokApi();

  const response = await client.getStory("casting", {
    version: "draft",
  });

  return response.data.story;
};

export default async function CastingPage() {
  const story = await fetchCastingPage();

  return (
    <main>
      <StoryblokStory story={story} />
    </main>
  );
}
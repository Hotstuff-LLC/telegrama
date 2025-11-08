import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";

const fetchCastingPage = async () => {
  const client = getStoryblokApi();

  const response = await client.getStory("casting", {
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });

  return response.data.story;
};

export default async function CastingPage() {
  const story = await fetchCastingPage();

  return (
    <main  style={{ backgroundColor: "#F3e4cd" }}>
      <StoryblokStory story={story} />
    </main>
  );
}
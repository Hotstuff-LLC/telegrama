import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";

const fetchServicePage = async () => {
  const client = getStoryblokApi();

  const response = await client.getStory("services", {
    version: "draft",
  });

  return response.data.story;
};

export default async function ServicePage() {
  const story = await fetchServicePage();

  return (
    <main style={{ backgroundColor: "#F3e4cd" }}>
      <StoryblokStory story={story} />
    </main>
  );
}

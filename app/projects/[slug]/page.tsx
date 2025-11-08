import { getStoryblokApi } from "@storyblok/react/rsc";
import { StoryblokStory } from "@storyblok/react/rsc";

export const generateStaticParams = async () => {
  const client = getStoryblokApi();
  const response = await client.getStories({
    content_type: "projects",
    version: process.env.NODE_ENV === "development" ? "draft" : "published",
  });
  return response.data.stories.map((story) => ({slug: story.slug,}));
}


const fetchProjectPage = async (slug: string) => {
  const client = getStoryblokApi();
  const response = await client.getStory(`projects/${slug}`, { version: process.env.NODE_ENV === "development" ? "draft" : "published", });
  return response.data.story;
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // unwrap params

  try {
    const story = await fetchProjectPage(slug);
    return <StoryblokStory story={story} />
  } catch (err: any) {
    console.error("Storyblok fetch failed:", err.response?.data || err);
    return <div>Story not found</div>;
  }
}
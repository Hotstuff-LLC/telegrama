import { getStoryblokApi } from "@storyblok/react/rsc";
import { StoryblokStory } from "@storyblok/react/rsc";
import Link from "next/link";
import Image from "next/image";

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
    return (
    <div>    
      <StoryblokStory story={story} />
            <div className="container mx-auto font-semibold py-8 pb-16 flex flex-row justify-between items-center">
        {/* LEFT LINK with rotated arrow */}
        <Link
          href="/"
          className="text-3xl text-[#EE3400] flex items-center gap-3 hover:opacity-80 transition"
        >
          <Image
            src="/imgs/arrow-right.svg"
            alt="arrow back"
            width={40}
            height={40}
            className="-rotate-180 filter invert-49 sepia-91 saturate-4495 hue-rotate-352 brightness-98 contrast-104"

          />
          Back To Home
        </Link>

      </div>
    
    </div>

    )
  } catch (err: any) {
    console.error("Storyblok fetch failed:", err.response?.data || err);
    return <div>Story not found</div>;
  }
}
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import Link from "next/link";
import Image from "next/image";

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
      <div className="container mx-auto font-semibold py-8 pb-16 flex flex-row justify-between items-center">
        {/* LEFT LINK with rotated arrow */}
        <Link
          href="/narrative-content"
          className="text-3xl text-[#EE3400] flex items-center gap-3 hover:opacity-80 transition"
        >
          <Image
            src="/imgs/arrow-right.svg"
            alt="arrow back"
            width={40}
            height={40}
            className="-rotate-180 filter invert-49 sepia-91 saturate-4495 hue-rotate-352 brightness-98 contrast-104"

          />
          Narrative Content
        </Link>

      </div>
    </main>
  );
}
import { getStoryblokApi, StoryblokStory } from "@storyblok/react/rsc";
import { draftMode } from "next/headers";
import Link from "next/link";
import Image from "next/image";

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
      <div className="container mx-auto font-semibold py-8 pb-16 flex flex-row items-center">
        <Link
          href="/narrative-content"
          className="text-3xl text-[#EE3400] flex items-center gap-3 hover:opacity-80 transition ml-auto"
        >
          Narrative Content
          <Image
            src="/imgs/arrow-right.svg"
            alt="arrow back"
            width={40}
            height={40}
            className="filter invert-49 sepia-91 saturate-4495 hue-rotate-352deg brightness-98 contrast-104"
          />
        </Link>
      </div>
    </main>
  );
}

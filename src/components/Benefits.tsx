import { StoryblokComponent } from "@storyblok/react";
import { BenefitsClient } from "./BenefitsClient"; // 👈 import the client animation wrapper

export const Benefits = ({ blok }: any) => {
  return (
    <div className="container mx-auto p-8 pb-20">
      <h3 className="text-6xl text-center py-8 pb-16">Benefits</h3>

      <BenefitsClient>
        {blok.benefit_card?.map((nestedBlok: any) => (
          <StoryblokComponent
            key={nestedBlok._uid}
            blok={nestedBlok}
          />
        ))}
      </BenefitsClient>
    </div>
  );
};


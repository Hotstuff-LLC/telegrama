import { StoryblokComponent } from "@storyblok/react";

export const Benefits = ({ blok }: any) => {
    
    return (
         <div className="p-4 border rounded-lg shadow-sm">
                    {blok.benefit_card?.map((nestedBlok: any) => (
                       <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                        ))}
                   </div>
    )
}
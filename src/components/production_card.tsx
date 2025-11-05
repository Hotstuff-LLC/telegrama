import { StoryblokComponent } from "@storyblok/react";

export const production_card = ({ blok }: any) => {
    
    return (
         <div className="p-4 border rounded-lg shadow-sm">
            <h5>{blok.production_work_title}</h5>
                    {blok.production_links?.map((nestedBlok: any) => (
                       <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                        ))}
                   </div>
    )
}
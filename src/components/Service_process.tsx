import { StoryblokComponent } from "@storyblok/react";

export const Service_process = ({ blok }: any) => {
    
    return (
            <div className="p-4 border rounded-lg shadow-sm">
             {blok.process_card?.map((nestedBlok: any) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                 ))}
            </div>
         )
    
}
import { StoryblokComponent } from "@storyblok/react";

export const other_productions = ({ blok }: any) => {
    
    return (
         <div className="p-4 border rounded-lg shadow-sm">
            <h5>{blok.other_production_title}</h5>
                    {blok.production_list?.map((nestedBlok: any) => (
                       <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                        ))}
                   </div>
    )
}
import { Service_card_client } from "./service_card.client";

export const Services = ({ blok }: any) => {
  return (
    <div id="services" className="p-4 pt-16 container mx-auto">
      {blok.service_card?.map((nestedBlok: any) => (
        <Service_card_client key={nestedBlok._uid} blok={nestedBlok} />
      ))}
    </div>
  );
};

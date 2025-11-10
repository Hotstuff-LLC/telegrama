import { Service_card_client } from "./service_card.client";

export const Services = ({ blok }: any) => {
  return (
    <div className="p-4 pt-16 container mx-auto">
      {blok.service_card?.map((nestedBlok: any) => (
        <Service_card_client
          blok={nestedBlok}
          key={nestedBlok._uid}
        />
      ))}
    </div>
  );
};
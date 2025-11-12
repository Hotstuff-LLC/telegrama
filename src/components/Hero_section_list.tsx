import HeroProductionItem from "./Hero_production_item";

export const Hero_section_list = ({ blok }: any) => {
  if (!blok?.hero_production_item?.length) {
    return <p className="text-center text-gray-500">No hero items found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-10">
      {blok.hero_production_item.map((item: any) => (
        <HeroProductionItem blok={item} key={item._uid} />
      ))}
    </div>
  );
};

export default Hero_section_list;

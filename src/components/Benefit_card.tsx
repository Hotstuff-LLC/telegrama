export const Benefit_card = ({ blok }: any) => {
  return (
    <div className="p-4">
      <h3 className="text-6xl font-semibold mb-2  pb-8 tracking-[-0.08em]">{blok.benefit_name}</h3>
      <p className="text-xl">{blok.benefit_description}</p>
    </div>
  );
};
export const Benefit_card = ({ blok }: any) => {
  return (
    <div className="p-4 md:p-4">
      <h3 className="text-4xl md:text-6xl font-semibold mb-2 pb-8 tracking-[-0.08em] text-center md:text-left">
        {blok.benefit_name}
      </h3>
      <p className="text-lg md:text-xl text-center md:text-left">
        {blok.benefit_description}
      </p>
    </div>
  );
};

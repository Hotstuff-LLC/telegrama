export const Bio_card = ({ blok }: any) => {
  return (
    <div className="p-4 pt-8">
      <h3 className="text-8xl font-semibold  mb-2 w-[462px]">{blok.bio_name}</h3>
      <p className="text-gray-600 text-xl font-semibold">Producer / Director</p>
      <p className="text-gray-600 w-[462px]">{blok.bio_text}</p>
    </div>
  );
};
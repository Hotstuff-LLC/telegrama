export const Faq_card = ({ blok }: any) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold cursor-pointer mb-2">{blok.question}</h3>
      <p className="text-gray-600">{blok.answer}</p>
    </div>
  );
};
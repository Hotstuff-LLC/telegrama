export const Process_card = ({ blok }: any) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{blok.process_text}</h3>
      {blok.process_img?.filename && (
            <img
                src={blok.process_img.filename}
                alt={blok.process_img.alt || ""}
                title={blok.process_img.title || ""}
                loading="lazy"
            />
            )}
    </div>
  );
};
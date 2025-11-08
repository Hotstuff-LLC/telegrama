export const Client_card = ({ blok }: any) => {
  return (
    <div key={blok._uid} className="p-4">
      {blok.client_logo?.filename && (
        <img
          src={blok.client_logo.filename}
          alt={blok.client_logo.alt || blok.client_logo}
          className="h-8 w-32 object-contain rounded-md mb-4"
        />
      )}
      <h3 className="text-lg font-semibold mb-2">{blok.client_name}</h3>
    </div>
  );
};
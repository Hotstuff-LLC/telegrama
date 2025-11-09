export const Client_card = ({ blok }: any) => {
  return (
    <div
      key={blok._uid}
      className="flex flex-col items-center text-center p-4 w-[120px] sm:w-[150px] md:w-[180px]"
    >
      {blok.client_logo?.filename && (
        <img
          src={blok.client_logo.filename}
          alt={blok.client_logo.alt || blok.client_name}
          className="h-8 sm:h-10 md:h-12 w-auto object-contain mb-4"
        />
      )}
      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
        {blok.client_name}
      </h3>
    </div>
  );
};

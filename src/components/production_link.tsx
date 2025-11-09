export const production_link = ({ blok }: any) => {
  return (
    <div className="p-2 sm:p-4">
      <h3 className="text-xl sm:text-2xl md:text-3xl font-normal mb-1 sm:mb-2">
        <a
          href={blok.production_link}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline wrap-break-word"
        >
          {blok.production_title}
        </a>
      </h3>
    </div>
  );
};

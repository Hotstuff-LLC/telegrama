export const About_us = ({ blok }: any) => {
  return (
    <div
      className="p-6 md:p-8 lg:py-16 bg-cover bg-center bg-no-repeat text-white flex flex-col text-center justify-center min-h-[400px] md:min-h-[600px] lg:min-h-[700px]"
      style={{ backgroundImage: `url(${blok.about_backgroundimg.filename})` }}
    >
      <div className="container mx-auto px-4">
        <h3 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 md:mb-10 drop-shadow-2xl">
          {blok.about_title}
        </h3>

        <p className="text-gray-100 text-lg sm:text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8 drop-shadow-2xl">
          {blok.about_text_main}
        </p>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl drop-shadow-2xl">
          {blok.about_text_secondary}
        </p>
      </div>
    </div>
  );
};

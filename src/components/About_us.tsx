export const About_us = ({ blok }: any) => {
  return (
    <div
      id="about_us"
      className="p-6 md:p-8 lg:py-16 bg-cover bg-center bg-no-repeat text-white flex flex-col text-center justify-center min-h-[400px] md:min-h-[1172px] lg:min-h-[1172px]"
      style={{ backgroundImage: `url(${blok.about_backgroundimg.filename})` }}
    >
      <div className="container mx-auto px-4 py-12">
        <h3 className="text-3xl sm:text-5xl md:text-[98px] lg:text-[98px] font-semibold mb-6 md:mb-10 drop-shadow-2xl">
          {blok.about_title}
        </h3>

        {/* Narrower text area */}
        <div className="max-w-[1240px] mx-auto">
          <p className="text-gray-100 text-lg sm:text-2xl md:text-[64px] lg:text-[64px] mb-6 md:mb-10 drop-shadow-2xl leading-snug">
            {blok.about_text_main}
          </p>

          {/* More space between paragraphs */}
          <p className="text-gray-200 text-base pt-16 sm:text-lg md:text-[32px] lg:text-[32px] drop-shadow-2xl leading-relaxed">
            {blok.about_text_secondary}
          </p>
        </div>
      </div>
    </div>
  );
};

import { ProductionsList } from "./productions_list";

export const Project = async ({ blok }: any) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      {blok.project_image?.filename && (
        <section
          className="w-full h-[60vh] md:h-[80vh] bg-cover bg-center relative text-white"
          style={{ backgroundImage: `url(${blok.project_image.filename})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Bottom-left text container */}
          <div className="absolute bottom-6 left-4 md:bottom-10 md:left-10 z-10 text-left">
            <h3 className="text-sm md:text-xl font-bold uppercase mb-1 md:mb-2">
              {blok.project_area}
            </h3>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-semibold leading-tight">
              {blok.project_name}
            </h1>
          </div>
        </section>
      )}

      {/* Summary Section */}
      {blok.project_summary && (
        <section className="w-full max-w-6xl py-16 md:py-32 px-4 md:px-6 flex justify-center md:justify-end">
          <h3 className="text-lg sm:text-2xl md:text-3xl text-center md:text-right max-w-3xl">
            {blok.project_summary}
          </h3>
        </section>
      )}

      {/* Middle Images */}
      <section className="w-full flex container mx-auto flex-col items-center gap-8 md:gap-16 py-8 md:py-16">
        {blok.project_middle_image_1?.filename && (
          <div className="w-full flex justify-center md:justify-start">
            <img
              src={blok.project_middle_image_1.filename}
              alt={blok.project_middle_image_1.alt || ""}
              title={blok.project_middle_image_1.title || ""}
              loading="lazy"
              className="w-full sm:w-[600px] md:w-[831px] object-cover rounded-md md:translate-x-[15%]"
            />
          </div>
        )}

        {blok.project_middle_image_2?.filename && (
          <div className="w-full flex justify-center md:justify-end">
            <img
              src={blok.project_middle_image_2.filename}
              alt={blok.project_middle_image_2.alt || ""}
              title={blok.project_middle_image_2.title || ""}
              loading="lazy"
              className="w-full sm:w-[600px] md:w-[831px] object-cover rounded-md md:-translate-x-[15%]"
            />
          </div>
        )}
      </section>

      {/* Our Work Section */}
      {blok.our_work && (
        <section className="w-full container mx-auto py-12 md:py-16 px-4 md:px-6 grid grid-cols-1 md:grid-cols-6">
          <div className="md:col-start-3 md:col-end-6 flex flex-col items-center md:items-end text-center md:text-right space-y-4">
            <h6 className="text-4xl sm:text-5xl md:text-6xl font-semibold">
              Our Work
            </h6>
            <p className="text-lg sm:text-2xl md:text-3xl font-normal max-w-2xl">
              {blok.our_work}
            </p>
          </div>
        </section>
      )}

      {/* Final Image */}
      {blok.final_image?.filename && (
        <section className="w-full">
          <img
            src={blok.final_image.filename}
            alt={blok.final_image.alt || ""}
            title={blok.final_image.title || ""}
            loading="lazy"
            className="w-full object-cover"
          />
        </section>
      )}

      {/* Productions List */}
      <ProductionsList />
    </div>
  );
};




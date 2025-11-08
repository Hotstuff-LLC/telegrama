import { ProductionsList } from "./productions_list";

export const Project = async ({ blok }: any) => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      {blok.project_image?.filename && (
        <section
            className="w-full h-[80vh] bg-cover bg-center relative text-white"
            style={{ backgroundImage: `url(${blok.project_image.filename})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0  bg-black/40" />

            {/* Bottom-left text container */}
            <div className="absolute bottom-10 left-10 z-10 text-left">
              <h3 className="text-xl font-bold uppercase mb-2">
                {blok.project_area}
              </h3>
              <h1 className="text-8xl font-semibold leading-tight">
                {blok.project_name}
              </h1>
            </div>
          </section>
      )}

      {/* Summary Section */}
      {blok.project_summary && (
        <section className="w-full max-w-6xl py-32 px-6 flex justify-end">
          <h3 className="text-3xl text-right max-w-3xl">{blok.project_summary}</h3>
        </section>
      )}

      {/* Middle Images */}
        <section className="w-full flex flex-col items-center gap-16 py-16">
          {blok.project_middle_image_1?.filename && (
            <div className="w-full flex justify-start">
              <img
                src={blok.project_middle_image_1.filename}
                alt={blok.project_middle_image_1.alt || ""}
                title={blok.project_middle_image_1.title || ""}
                loading="lazy"
                className="w-[831px] object-cover rounded-md translate-x-[15%]"
              />
            </div>
          )}

          {blok.project_middle_image_2?.filename && (
            <div className="w-full flex justify-end">
              <img
                src={blok.project_middle_image_2.filename}
                alt={blok.project_middle_image_2.alt || ""}
                title={blok.project_middle_image_2.title || ""}
                loading="lazy"
                className="w-[831px] object-cover rounded-md -translate-x-[15%]"
              />
            </div>
          )}
        </section>

      {/* Our Work Section */}
        {blok.our_work && (
          <section className="w-full container mx-auto py-16 px-6 grid grid-cols-6">
            <div className="col-start-3 col-end-6 flex flex-col items-end text-right space-y-4">
              <h6 className="text-6xl font-semibold">Our Work</h6>
              <p className="text-3xl font-normal max-w-2xl">{blok.our_work}</p>
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



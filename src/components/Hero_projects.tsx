export const Hero_projects = ({ blok, index = 0 }: any) => {
        const layouts = [
          // --- Slide 1 ---
          {
            titleGroup:
              "col-start-1 row-start-1 self-end justify-self-start -translate-y-[10%]",

            img:
              "col-start-1 row-start-2 self-center justify-self-start",

            num:
              "col-start-2 row-start-1 self-center justify-self-start -translate-y-[60%] translate-x-[-15%] text-2xl",

            p:
              "col-start-2 row-start-2 self-end justify-self-end",

            align: "text-left",
          },
          // --- Slide 2 ---
          {
            titleGroup:
              "col-start-1 row-start-2 self-center justify-self-start translate-x-[120%]",

            img:
              "col-start-1 row-start-1 self-start justify-self-start translate-y-[15%]",

            p:
              "col-start-2 row-start-2 self-center justify-self-start translate-y-[15%] translate-x-[-40%]",

            num:
              "col-start-2 row-start-2 self-start justify-self-start -translate-y-[40%] translate-x-[10%] text-2xl",

            align: "text-left",
          },
          // --- Slide 3 ---
          {
            titleGroup:
              "col-start-2 row-start-2 self-start justify-self-start text-left translate-y-[-10%]",

            img:
              "col-start-1 row-start-2 self-center justify-self-start",

            num:
              "col-start-2 row-start-1 self-start justify-self-start translate-y-[20%] text-2xl",

            p:
              "col-start-2 row-start-2 self-end justify-self-start text-left",

            align: "text-left",
          },

          // --- Slide 4 ---
          {
              titleGroup:
                "col-start-1 row-start-2 self-center justify-self-start translate-x-[65%]", // h3 pushed right

              img:
                "col-start-1 row-start-1 self-center justify-self-start",

              num:
                "col-start-2 row-start-1 self-center justify-self-end translate-x-[-15%]",

              p:
                "col-start-2 row-start-2 self-center justify-self-end ml-8", // gap added

              align: "text-left",
            },
          // --- Slide 5 ---
          {
            titleGroup:
              "col-start-1 row-start-1 self-center justify-self-start translate-x-[20%]", // shifted right

            img:
              "col-start-1 row-start-2 self-center justify-self-start",

            num:
              "col-start-2 row-start-2 self-center justify-self-end translate-x-[-15%] translate-y-[-10%]",

            p:
              "col-start-2 row-start-2 self-start justify-self-end ml-6", // moved to row 2 + slight gap

            align: "text-left",
          },
        ];



  const layout = layouts[index % layouts.length];

  return (
    <div
      key={blok._uid}
      className="grid grid-cols-[700px_1fr] grid-rows-2 gap-8 w-screen h-[100dvh] p-16"
    >
      {/* Image */}
      {blok.project_asset?.filename && (
        <img
          src={blok.project_asset.filename}
          alt={blok.project_asset.alt || blok.project_name}
          width={700}
          height={393}
          className={`object-cover w-[700px] h-[393px] ${layout.img}`}
        />
      )}

      {/* Area + Title group */}
      <div className={`${layout.titleGroup} ${layout.align} flex flex-col`}>
        {blok.project_area && (
          <p className="text-base text-black mb-2">{blok.project_area}</p>
        )}
        <h3 className="font-dm-sans font-semibold text-[96px] leading-[97%] tracking-[-8%]">{blok.project_name}</h3>
      </div>

      {/* Number */}
      <span className={`text-4xl font-light opacity-70 ${layout.num} translate-x-[-20%] translate-y-[10%]`}>
        {String(index + 1).padStart(2, "0")}/05
      </span>

      {/* Description */}
      <p className={`text-xl max-w-lg leading-relaxed ${layout.p}`}>
        {blok.project_description}
      </p>
    </div>
  );
};

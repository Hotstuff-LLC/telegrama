export const Hero_projects = ({ blok, index = 0 }: any) => {
        const layouts = [
          // --- Slide 1 ---
          {
            titleGroup: "col-start-1 row-start-1 self-center justify-self-start", // TL
            img: "col-start-1 row-start-2 self-center justify-self-start",        // BL
            num: "col-start-2 row-start-1 self-start justify-self-end translate-x-[-15%] translate-y-[10%]", // TR (moved inward)
            p: "col-start-2 row-start-2 self-center justify-self-end",            // BR
            align: "text-left",
          },
          // --- Slide 2 ---
          {
            titleGroup: "col-start-1 row-start-2 self-center justify-self-start", // BL
            img: "col-start-1 row-start-1 self-center justify-self-start",        // TL
            num: "col-start-2 row-start-2 self-end justify-self-end translate-x-[-15%] translate-y-[-10%]", // BR (moved inward)
            p: "col-start-2 row-start-1 self-start justify-self-end",             // TR
            align: "text-left",
          },
          // --- Slide 3 ---
          {
            titleGroup: "col-start-2 row-start-1 self-center justify-self-end text-right", // TR
            img: "col-start-1 row-start-2 self-center justify-self-start",                 // BL
            num: "col-start-1 row-start-1 self-start justify-self-start translate-x-[15%] translate-y-[10%]", // TL (moved inward)
            p: "col-start-2 row-start-2 self-center justify-self-end",                     // BR
            align: "text-right",
          },
          // --- Slide 4 ---
          {
            titleGroup: "col-start-1 row-start-2 self-center justify-self-start", // BL
            img: "col-start-1 row-start-1 self-center justify-self-start",        // TL
            num: "col-start-2 row-start-1 self-center justify-self-end translate-x-[-15%]", // TR
            p: "col-start-2 row-start-2 self-center justify-self-end",            // BR
            align: "text-left",
          },
          // --- Slide 5 ---
          {
            titleGroup: "col-start-1 row-start-1 self-center justify-self-start", // TL
            img: "col-start-1 row-start-2 self-center justify-self-start",        // BL
            num: "col-start-2 row-start-2 self-center justify-self-end translate-x-[-15%] translate-y-[-10%]", // BR
            p: "col-start-2 row-start-1 self-start justify-self-end",             // TR
            align: "text-left",
          },
        ];



  const layout = layouts[index % layouts.length];

  return (
    <div
      key={blok._uid}
      className="grid grid-cols-2 grid-rows-2 gap-8 w-screen h-[100dvh] p-16 relative"
    >
      {/* Image */}
      {blok.project_asset?.filename && (
        <img
          src={blok.project_asset.filename}
          alt={blok.project_asset.alt || blok.project_name}
          width={700}
          height={349}
          className={`object-cover w-[700px] h-[349px] rounded-xl ${layout.img}`}
        />
      )}

      {/* Area + Title group */}
      <div className={`${layout.titleGroup} ${layout.align} flex flex-col`}>
        {blok.project_area && (
          <p className="text-base text-black uppercase mb-2">{blok.project_area}</p>
        )}
        <h3 className="text-6xl font-bold uppercase">{blok.project_name}</h3>
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

export const Hero_projects = ({ blok, index = 0 }: any) => {
  // Define grid positions for each slide index
  const layouts = [
    // --- Slide 1 ---
    {
      h3: "col-start-1 row-start-1 self-start justify-self-start", // upper left
      img: "col-start-1 row-start-2 self-end justify-self-start", // bottom left
      num: "col-start-2 row-start-2 self-center justify-self-end", // middle right
      p: "col-start-2 row-start-3 self-end justify-self-end", // bottom right
    },
    // --- Slide 2 ---
    {
      h3: "col-start-1 row-start-3 self-end justify-self-start", // bottom left
      img: "col-start-1 row-start-1 self-start justify-self-start", // upper left
      num: "col-start-2 row-start-2 self-center justify-self-end", // middle right
      p: "col-start-2 row-start-3 self-end justify-self-end", // bottom right
    },
    // --- Slide 3 ---
    {
      h3: "col-start-2 row-start-2 self-center justify-self-end", // middle right
      img: "col-start-1 row-start-3 self-end justify-self-start", // bottom left
      num: "col-start-2 row-start-2 self-center justify-self-end", // middle right
      p: "col-start-2 row-start-3 self-end justify-self-end", // bottom right
    },
    // --- Slide 4 ---
    {
      h3: "col-start-1 row-start-3 self-end justify-self-start", // bottom left
      img: "col-start-1 row-start-1 self-start justify-self-start", // upper left
      num: "col-start-2 row-start-2 self-center justify-self-end", // middle right
      p: "col-start-2 row-start-3 self-end justify-self-end", // bottom right
    },
    // --- Slide 5 ---
    {
      h3: "col-start-1 row-start-1 self-start justify-self-start", // upper left
      img: "col-start-1 row-start-3 self-end justify-self-start", // bottom left
      num: "col-start-2 row-start-2 self-center justify-self-end", // middle right
      p: "col-start-2 row-start-3 self-end justify-self-end", // bottom right
    },
  ];

  const layout = layouts[index % layouts.length]; // fallback if more than 5 slides

  return (
    <div
      key={blok._uid}
      className="grid grid-cols-2 grid-rows-3 gap-8 w-screen h-screen p-16 relative"
    >
      {/* h3 */}
      <h3
        className={`text-6xl font-bold ${layout.h3}`}
      >
        {blok.project_name}
      </h3>

      {/* Image */}
      {blok.project_asset?.filename && (
        <img
          src={blok.project_asset.filename}
          alt={blok.project_asset.alt || blok.project_name}
          className={`rounded-xl object-cover w-[80%] h-[80%] ${layout.img}`}
        />
      )}

      {/* Number (01/05 style) */}
      <span
        className={`text-4xl font-light opacity-70 ${layout.num}`}
      >
        {String(index + 1).padStart(2, "0")}/05
      </span>

      {/* Description */}
      <p
        className={`text-xl max-w-sm leading-relaxed ${layout.p}`}
      >
        {blok.project_description}
      </p>
    </div>
  );
};

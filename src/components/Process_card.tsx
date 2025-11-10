export const Process_card = ({ blok }: any) => {
  return (
    <div className="p-4 flex flex-col items-start">
      {/* Number row with top & bottom border */}
      <div className="w-full border-t-2 border-b-2 border-black py-2">
        <span className="text-[#EE3400] text-5xl md:text-8xl font-semibold leading-none">
          {blok.number}
        </span>
      </div>

      {/* Text below */}
      <h3 className="text-xl md:text-lg font-normal w-full md:w-[300px]">
        {blok.process_text}
      </h3>
    </div>
  );
};



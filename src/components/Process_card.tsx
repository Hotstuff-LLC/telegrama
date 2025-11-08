export const Process_card = ({ blok }: any) => {
  return (
    <div className="p-4 flex flex-col items-start  border-t-2 border-black">
      <span className="text-[#EE3400] text-8xl pt-2 font-semibold leading-none">
        {blok.number}
      </span>
      <h3 className="text-lg font-semibold mt-2 w-[200px]">
        {blok.process_text}
      </h3>
    </div>
  );
};
//#EE3400
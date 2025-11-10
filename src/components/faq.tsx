import { Faq_card } from "./Faq_card.client";

export const Faq = ({ blok }: any) => {
  return (
    <div id="faq"
      className="
        flex flex-col md:flex-row 
        container mx-auto 
        px-6 md:px-16 py-12 md:py-16
        gap-8 md:gap-0
      "
    >
      <h3
        className="
          text-3xl md:text-6xl font-normal 
          basis-full md:basis-1/3 
          mb-6 md:mb-0
        "
      >
        Find Answers <br /> in Our FAQ
      </h3>

      <div className="flex flex-col gap-4 basis-full md:basis-2/3">
        {blok.faq_card?.map((faq: any, index: number) => (
          <Faq_card
            key={faq._uid}
            index={index}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};


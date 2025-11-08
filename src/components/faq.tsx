import { Faq_card } from "./Faq_card.client";

export const Faq = ({ blok }: any) => {
  return (
    <div className="flex flex-row container mx-auto px-16 py-16">
      <h3 className="text-6xl font-normal basis-full md:basis-1/3">
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

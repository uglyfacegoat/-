import { Plus } from "lucide-react";
import { faqs } from "../data";
import { COLORS } from "../theme";
import { SectionTitle } from "../components/ui";

type Props = {
  faqOpen: number | null;
  setFaqOpen: (index: number | null) => void;
};

export function FaqSection({ faqOpen, setFaqOpen }: Props) {
  return (
    <section id="faq" style={{ background: COLORS.white }}>
      <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-16 md:grid-cols-[360px_1fr] md:px-8 md:py-20">
        <div>
          <div
            className="mb-3 text-[12px] font-bold uppercase tracking-[0.08em]"
            style={{ color: COLORS.bronze }}
          >
            FAQ
          </div>
          <SectionTitle>Частые вопросы до первого расчета</SectionTitle>
          <p
            className="mt-4 text-[14px] leading-relaxed"
            style={{ color: COLORS.text2 }}
          >
            Собрали вопросы, которые чаще всего возникают до замера и финальной
            сметы.
          </p>
        </div>
        <div>
          <div className="grid gap-3">
            {faqs.map((item, index) => (
              <div
                key={item.q}
                className="overflow-hidden rounded-[18px] transition-colors"
                style={{
                  background: faqOpen === index ? COLORS.warmBg : COLORS.white,
                  border: `1px solid ${faqOpen === index ? COLORS.bronze : COLORS.border}`,
                }}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-extrabold"
                  onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                >
                  <span>
                    <span style={{ color: COLORS.bronze }}>0{index + 1}</span> ·{" "}
                    {item.q}
                  </span>
                  <Plus size={16} color={COLORS.graphite} />
                </button>
                {faqOpen === index && (
                  <div
                    className="px-5 pb-5 text-[14px] leading-relaxed"
                    style={{ color: COLORS.text2 }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

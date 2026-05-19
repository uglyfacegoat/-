import { Info } from "lucide-react";
import { cases } from "../data";
import { COLORS } from "../theme";

export function CasesSection() {
  return (
    <section
      id="cases"
      className="relative overflow-hidden"
      style={{ background: COLORS.white }}
    >
      <div className="mx-auto max-w-[1920px] px-5 py-14 md:px-8 md:py-[72px] lg:px-10 xl:px-12">
        <div className="mx-auto max-w-[920px] text-center">
          <h2
            className="text-[32px] font-black leading-[1.12] tracking-[-0.01em] md:text-[42px] lg:text-[46px]"
            style={{ color: "#071017" }}
          >
            Примеры решений и ориентиры цен
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {cases.map((item) => (
            <article
              key={item.title}
              className="group flex min-h-[460px] flex-col rounded-[18px] border p-3 text-center transition-transform duration-200 hover:-translate-y-0.5"
              style={{
                borderColor: COLORS.border,
                background: COLORS.white,
                boxShadow: "0 8px 22px rgba(31,36,41,0.045)",
              }}
            >
              <div className="overflow-hidden rounded-[12px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-[235px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] md:h-[250px] xl:h-[235px] 2xl:h-[265px]"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                <h3
                  className="mx-auto max-w-[250px] whitespace-pre-line text-[20px] font-extrabold leading-tight"
                  style={{ color: "#071017" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-4 text-[17px] leading-snug"
                  style={{ color: COLORS.text2 }}
                >
                  {item.params}
                </p>
                <div
                  className="mt-auto pt-5 text-[23px] font-extrabold leading-tight"
                  style={{ color: "#8E5B2F" }}
                >
                  {item.price}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 flex max-w-[940px] items-start justify-center gap-5">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full"
            style={{
              border: `2px solid ${COLORS.border}`,
              color: COLORS.text2,
            }}
            aria-hidden="true"
          >
            <Info size={23} strokeWidth={1.8} />
          </div>
          <p
            className="max-w-[760px] text-[17px] font-bold leading-relaxed"
            style={{ color: COLORS.text2 }}
          >
            Цены указаны как ориентир. Мы не даем красивую минимальную цену,
            если под ваш размер и нагрузку нужна более крепкая конструкция.
          </p>
        </div>
      </div>
    </section>
  );
}

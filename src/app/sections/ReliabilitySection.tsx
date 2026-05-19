import { why } from "../data";
import { COLORS } from "../theme";

export function ReliabilitySection() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden"
      style={{ background: COLORS.white }}
    >
      <div className="mx-auto max-w-[1780px] px-5 py-16 md:px-8 md:py-20 lg:px-16 xl:px-20">
        <div className="mx-auto max-w-[920px] text-center">
          <h2
            className="text-[34px] font-black leading-[1.12] tracking-[-0.01em] md:text-[44px] lg:text-[50px]"
            style={{ color: "#071017" }}
          >
            Навес должен стоять годами,
            <span className="block">а не до первой тяжелой зимы</span>
          </h2>
          <p
            className="mx-auto mt-6 max-w-[830px] text-[16px] leading-relaxed md:text-[18px]"
            style={{ color: COLORS.text2 }}
          >
            Удешевление часто происходит за счет слабого металла, экономии на
            креплениях, неподходящей кровли и спешки при монтаже. Мы не идем по
            этому пути.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {why.map(({ icon, iconClassName, title, text }) => (
            <article
              key={title}
              className="grid min-h-[390px] grid-rows-[170px_76px_1fr] items-start justify-items-center rounded-[18px] border px-7 pb-9 pt-9 text-center"
              style={{
                borderColor: COLORS.border,
                background: COLORS.white,
                boxShadow: "0 10px 28px rgba(31, 36, 41, 0.06)",
              }}
            >
              <span className="relative flex h-[170px] w-full items-center justify-center overflow-visible">
                <img
                  src={icon}
                  alt=""
                  className={`absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 object-contain ${iconClassName}`}
                  loading="lazy"
                  aria-hidden="true"
                />
              </span>
              <h3
                className="flex max-w-[270px] items-center whitespace-pre-line text-[27px] font-extrabold leading-[1.1] tracking-[-0.01em]"
                style={{ color: "#071017" }}
              >
                {title}
              </h3>
              <p
                className="mt-7 max-w-[310px] text-[16px] leading-[1.55]"
                style={{ color: COLORS.text2 }}
              >
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

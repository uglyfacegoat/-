import { why } from "../data";
import { COLORS } from "../theme";
import { trackGoal } from "../utils/analytics";

type Props = {
  onContactClick: () => void;
};

export function ReliabilitySection({ onContactClick }: Props) {
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
          <button
            type="button"
            onClick={() => {
              trackGoal("cta_click");
              onContactClick();
            }}
            className="mt-7 min-h-[52px] rounded-[14px] px-8 text-[13px] font-extrabold uppercase tracking-[0.02em] transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              background: "#2F3438",
              color: COLORS.white,
              boxShadow: "0 10px 24px rgba(47,52,56,0.12)",
            }}
          >
            Получить расчет без слабой конструкции
          </button>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {why.map(
            ({
              icon,
              iconClassName = "",
              image,
              imageClassName = "",
              title,
              text,
            }) => (
              <article
                key={title}
                className="flex min-h-[430px] flex-col items-center rounded-[18px] border px-7 pb-9 pt-7 text-center"
                style={{
                  borderColor: COLORS.border,
                  background: COLORS.white,
                  boxShadow: "0 8px 20px rgba(174,123,67,0.08)",
                }}
              >
                <span
                  className="relative flex h-[190px] w-full items-center justify-center overflow-hidden rounded-[14px]"
                  style={{ background: "#FAFAF8" }}
                >
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className={imageClassName}
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    icon && (
                      <img
                        src={icon}
                        alt=""
                        className={`max-w-none object-contain ${iconClassName}`}
                        loading="lazy"
                        aria-hidden="true"
                      />
                    )
                  )}
                </span>
                <h3
                  className="mt-7 flex min-h-[62px] max-w-[270px] items-end whitespace-pre-line text-[27px] font-extrabold leading-[1.1] tracking-[-0.01em]"
                  style={{ color: "#071017" }}
                >
                  {title}
                </h3>
                <p
                  className="mt-5 max-w-[310px] text-[16px] leading-[1.55]"
                  style={{ color: COLORS.text2 }}
                >
                  {text}
                </p>
              </article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

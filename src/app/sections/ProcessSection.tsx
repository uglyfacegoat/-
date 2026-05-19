import { steps } from "../data";
import { COLORS } from "../theme";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden"
      style={{ background: COLORS.white }}
    >
      <div className="mx-auto max-w-[1780px] px-5 py-10 md:px-8 md:py-12 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-[920px] text-center">
          <h2
            className="text-[30px] font-black leading-[1.12] tracking-[-0.01em] md:text-[38px] lg:text-[42px]"
            style={{ color: "#071017" }}
          >
            Как работаем и производство
          </h2>
        </div>

        <div className="relative mt-14 md:mt-16">
          <div
            className="absolute left-[4%] right-[4%] top-0 hidden h-px lg:block"
            style={{ background: COLORS.border }}
          />
          <div className="grid gap-y-10 lg:grid-cols-6">
            {steps.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="relative flex min-h-[255px] flex-col items-center px-5 pt-10 text-center"
              >
                {index < steps.length - 1 && (
                  <div
                    className="absolute right-0 top-[54px] hidden h-[150px] w-px lg:block"
                    style={{ background: COLORS.border }}
                  />
                )}
                <div
                  className="absolute left-1/2 top-0 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[20px] font-extrabold"
                  style={{
                    background: COLORS.white,
                    border: `2px solid #B8895C`,
                    color: "#8E5B2F",
                  }}
                >
                  {index + 1}
                </div>

                <div className="flex h-[72px] items-center justify-center">
                  <Icon size={56} color={COLORS.text2} strokeWidth={1.45} />
                </div>

                <h3
                  className="mt-3 text-[18px] font-extrabold leading-tight"
                  style={{ color: "#071017" }}
                >
                  {title}
                </h3>
                <p
                  className="mt-6 max-w-[230px] text-[14px] leading-relaxed"
                  style={{ color: COLORS.text2 }}
                >
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

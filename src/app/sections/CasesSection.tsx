import { useEffect, useMemo, useState } from "react";
import case1 from "../../assets/cases/case-1.jpg";
import case2 from "../../assets/cases/case-2.jpg";
import case3 from "../../assets/cases/case-3.jpg";
import case4 from "../../assets/cases/case-4.jpg";
import case5 from "../../assets/cases/case-5.jpg";
import case6 from "../../assets/cases/case-6.jpg";
import { COLORS } from "../theme";
import { trackGoal } from "../utils/analytics";

const CASE_ROTATION_MS = 3200;
const DESKTOP_OFFSETS = [-2, -1, 0, 1, 2];
const CASES = [
  { title: "Пример работы 1", img: case1 },
  { title: "Пример работы 2", img: case2 },
  { title: "Пример работы 3", img: case3 },
  { title: "Пример работы 4", img: case4 },
  { title: "Пример работы 5", img: case5 },
  { title: "Пример работы 6", img: case6 },
];

type Props = {
  onContactClick: () => void;
};

export function CasesSection({ onContactClick }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % CASES.length);
    }, CASE_ROTATION_MS);

    return () => window.clearInterval(id);
  }, [paused]);

  const visibleCases = useMemo(
    () =>
      DESKTOP_OFFSETS.map((offset) => {
        const index = (activeIndex + offset + CASES.length) % CASES.length;
        return {
          item: CASES[index],
          index,
          offset,
        };
      }),
    [activeIndex],
  );

  return (
    <section
      id="cases"
      className="relative overflow-hidden"
      style={{ background: COLORS.white }}
    >
      <div className="mx-auto max-w-[1920px] px-5 py-14 md:px-8 md:py-[72px] lg:px-10 xl:px-12">
        <div className="mx-auto max-w-[920px] text-center">
          <h2
            className="text-[32px] font-black leading-[1.12] md:text-[42px] lg:text-[46px]"
            style={{ color: "#071017" }}
          >
            Примеры работ
          </h2>
        </div>

        <div
          className="mt-10 hidden min-h-[520px] items-center justify-center gap-4 overflow-hidden px-2 xl:flex"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {visibleCases.map(({ item, index, offset }) => {
            const active = offset === 0;
            const near = Math.abs(offset) === 1;

            return (
              <article
                key={`${item.title}-${index}`}
                className={`group shrink-0 overflow-hidden rounded-[20px] border bg-white p-2 transition-all duration-700 ease-out ${
                  active
                    ? "z-20 h-[500px] w-[560px] scale-100 opacity-100"
                    : near
                      ? "z-10 h-[420px] w-[360px] scale-[0.94] opacity-85"
                      : "h-[360px] w-[300px] scale-[0.88] opacity-55"
                }`}
                style={{
                  borderColor: active ? "#AE7B43" : COLORS.border,
                  boxShadow: active
                    ? "0 18px 42px rgba(174,123,67,0.14)"
                    : "0 8px 20px rgba(174,123,67,0.08)",
                }}
                tabIndex={0}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full rounded-[14px] object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  loading="lazy"
                  decoding="async"
                />
              </article>
            );
          })}
        </div>

        <div className="mt-5 hidden justify-center gap-2 xl:flex">
          {CASES.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: activeIndex === index ? 28 : 10,
                background: activeIndex === index ? "#AE7B43" : COLORS.border,
              }}
              aria-label={`Показать работу ${index + 1}`}
            />
          ))}
        </div>

        <div
          className="mx-auto mt-10 max-w-[520px] xl:hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {[CASES[activeIndex]].map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[18px] border bg-white p-2 transition-transform duration-300"
              style={{
                borderColor: "#AE7B43",
                boxShadow: "0 12px 28px rgba(174,123,67,0.12)",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="aspect-[4/3] w-full rounded-[12px] object-cover transition-transform duration-500 group-hover:scale-[1.025] sm:aspect-[16/10]"
                loading="lazy"
                decoding="async"
              />
            </article>
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-2 xl:hidden">
          {CASES.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: activeIndex === index ? 28 : 10,
                background: activeIndex === index ? "#AE7B43" : COLORS.border,
              }}
              aria-label={`Показать работу ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={() => {
              trackGoal("cta_click");
              onContactClick();
            }}
            className="min-h-[52px] rounded-[14px] px-9 py-4 text-[13px] font-extrabold uppercase tracking-[0.02em] transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              background: "#AE7B43",
              color: COLORS.white,
              boxShadow: "0 10px 24px rgba(174,123,67,0.22)",
            }}
          >
            Рассчитать мой навес
          </button>
        </div>
      </div>
    </section>
  );
}

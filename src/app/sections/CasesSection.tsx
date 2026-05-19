import { useEffect, useMemo, useState } from "react";
import { Info } from "lucide-react";
import { cases } from "../data";
import { COLORS } from "../theme";

const CASE_ROTATION_MS = 3200;
const DESKTOP_OFFSETS = [-2, -1, 0, 1, 2];

export function CasesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % cases.length);
    }, CASE_ROTATION_MS);

    return () => window.clearInterval(id);
  }, [paused]);

  const visibleCases = useMemo(
    () =>
      DESKTOP_OFFSETS.map((offset) => {
        const index = (activeIndex + offset + cases.length) % cases.length;
        return {
          item: cases[index],
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
            className="text-[32px] font-black leading-[1.12] tracking-[-0.01em] md:text-[42px] lg:text-[46px]"
            style={{ color: "#071017" }}
          >
            Примеры решений и ориентиры цен
          </h2>
        </div>

        <div
          className="mt-10 hidden min-h-[580px] items-center justify-center gap-4 overflow-hidden px-2 xl:flex"
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
                className={`group flex shrink-0 flex-col rounded-[20px] border bg-white p-3 text-center transition-all duration-700 ease-out ${
                  active
                    ? "z-20 min-h-[560px] w-[390px] scale-100 opacity-100"
                    : near
                      ? "z-10 min-h-[470px] w-[270px] scale-[0.94] opacity-85"
                      : "min-h-[420px] w-[230px] scale-[0.88] opacity-55"
                }`}
                style={{
                  borderColor: active ? "#AE7B43" : COLORS.border,
                  boxShadow: active
                    ? "0 26px 70px rgba(31,36,41,0.16)"
                    : "0 8px 22px rgba(31,36,41,0.045)",
                }}
                tabIndex={0}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="overflow-hidden rounded-[14px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.025] ${
                      active ? "h-[310px]" : near ? "h-[235px]" : "h-[205px]"
                    }`}
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                  <h3
                    className={`mx-auto whitespace-pre-line font-extrabold leading-tight transition-all duration-700 ${
                      active
                        ? "max-w-[320px] text-[27px]"
                        : "max-w-[230px] text-[18px]"
                    }`}
                    style={{ color: "#071017" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mx-auto mt-4 leading-snug transition-all duration-700 ${
                      active
                        ? "max-w-[310px] text-[18px]"
                        : "max-w-[230px] text-[15px]"
                    }`}
                    style={{ color: "#071017" }}
                  >
                    {item.params}
                  </p>
                  <div
                    className={`mt-auto pt-5 font-extrabold leading-tight transition-all duration-700 ${
                      active ? "text-[28px]" : "text-[20px]"
                    }`}
                    style={{ color: "#071017" }}
                  >
                    {item.price}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 hidden justify-center gap-2 xl:flex">
          {cases.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="h-2.5 rounded-full transition-all duration-300"
              style={{
                width: activeIndex === index ? 28 : 10,
                background: activeIndex === index ? "#AE7B43" : COLORS.border,
              }}
              aria-label={`Показать кейс ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:hidden">
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
                  style={{ color: "#071017" }}
                >
                  {item.params}
                </p>
                <div
                  className="mt-auto pt-5 text-[23px] font-extrabold leading-tight"
                  style={{ color: "#071017" }}
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

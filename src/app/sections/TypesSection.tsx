import { useState } from "react";
import { canopyTypes, materials } from "../data";
import { COLORS } from "../theme";
import { trackGoal } from "../utils/analytics";

type Props = {
  onContactClick: () => void;
};

export function TypesSection({ onContactClick }: Props) {
  const [selectedCanopy, setSelectedCanopy] = useState(1);
  const selectedCanopyItem = canopyTypes[selectedCanopy];

  return (
    <section
      id="types"
      className="relative overflow-hidden"
      style={{ background: COLORS.white }}
    >
      <div className="mx-auto max-w-[1920px] px-5 py-14 md:px-8 md:py-[72px] lg:px-10 xl:px-12">
        <div className="mx-auto max-w-[760px] text-center">
          <h2
            className="text-[32px] font-black leading-[1.12] tracking-[-0.01em] md:text-[42px] lg:text-[46px]"
            style={{ color: "#071017" }}
          >
            Виды навесов и материалы
          </h2>
          <p
            className="mt-3 text-[17px] leading-relaxed md:text-[19px]"
            style={{ color: COLORS.text2 }}
          >
            Выберите подходящий тип и кровельный материал
          </p>
        </div>

        <div className="mt-7 grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {canopyTypes.map((item, index) => {
            const active = selectedCanopy === index;

            return (
              <article
                key={item.title}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedCanopy(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedCanopy(index);
                  }
                }}
                className="group flex min-h-[415px] cursor-pointer flex-col rounded-[18px] border p-3 text-center outline-none transition-all duration-300 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#AE7B43]/40"
                style={{
                  borderColor: active ? "#AE7B43" : COLORS.border,
                  background: COLORS.white,
                  boxShadow: active
                    ? "0 12px 28px rgba(174,123,67,0.14)"
                    : "0 8px 20px rgba(174,123,67,0.08)",
                }}
              >
                <h3
                  className="flex h-[68px] items-center justify-center text-[21px] font-extrabold leading-tight"
                  style={{ color: "#071017" }}
                >
                  {item.title}
                </h3>
                <div className="mt-2 overflow-hidden rounded-[12px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-[170px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] md:h-[188px] xl:h-[176px] 2xl:h-[198px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p
                  className="mx-auto mt-5 min-h-[58px] max-w-[250px] text-[16px] leading-snug"
                  style={{ color: "#071017" }}
                >
                  {item.text}
                </p>
                <div
                  className="mt-auto pb-2 pt-7 text-[23px] font-extrabold leading-tight"
                  style={{ color: "#071017" }}
                >
                  {item.price}
                </div>
              </article>
            );
          })}
        </div>

        <article
          className="mt-5 grid overflow-hidden rounded-[22px] border p-4 transition-opacity duration-300 md:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] md:p-5 lg:p-6"
          style={{
            borderColor: "#AE7B43",
            background: COLORS.white,
            boxShadow: "0 14px 34px rgba(174,123,67,0.14)",
          }}
        >
          <div className="overflow-hidden rounded-[16px]">
            <img
              src={selectedCanopyItem.img}
              alt={selectedCanopyItem.title}
              className="h-[280px] w-full object-cover md:h-full md:min-h-[380px]"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="flex flex-col px-1 pb-1 pt-6 md:px-8 md:py-5">
            <div
              className="text-[11px] font-bold uppercase tracking-[0.1em]"
              style={{ color: COLORS.text3 }}
            >
              выбранный тип
            </div>
            <h3
              className="mt-3 text-[34px] font-black leading-[1.08] tracking-[-0.01em] md:text-[42px]"
              style={{ color: "#071017" }}
            >
              {selectedCanopyItem.title}
            </h3>
            <p
              className="mt-5 max-w-[560px] text-[18px] leading-relaxed"
              style={{ color: COLORS.text2 }}
            >
              {selectedCanopyItem.text} Размер, опоры, уклон и кровлю считаем
              под конкретное место после замера.
            </p>
            <div
              className="mt-7 text-[30px] font-extrabold leading-tight"
              style={{ color: "#8E5B2F" }}
            >
              {selectedCanopyItem.price}
            </div>
            <div className="mt-auto pt-8">
              <button
                type="button"
                onClick={() => {
                  trackGoal("cta_click");
                  onContactClick();
                }}
                className="min-h-[52px] rounded-[14px] px-9 py-4 text-[13px] font-extrabold uppercase tracking-[0.02em]"
                style={{
                  background: "#AE7B43",
                  color: COLORS.white,
                }}
              >
                рассчитать
              </button>
            </div>
          </div>
        </article>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-6">
          {materials.map((item, index) => (
            <article
              key={item.title}
              className={`flex flex-col overflow-hidden rounded-[18px] border bg-white transition-transform duration-200 hover:-translate-y-0.5 xl:col-span-2 ${
                index === 3 ? "xl:col-start-2" : ""
              }`}
              style={{
                borderColor: COLORS.border,
                boxShadow: "0 8px 20px rgba(174,123,67,0.08)",
              }}
            >
              <div className="h-[205px] overflow-hidden bg-white md:h-[220px] xl:h-[235px] 2xl:h-[255px]">
                <img
                  src={item.img}
                  alt={item.title}
                  className={`h-full w-full object-center ${item.imgClassName ?? "object-contain"}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col px-10 pb-9 pt-6 md:px-11 md:pb-10 md:pt-7">
                <h3
                  className="min-h-[82px] text-[30px] font-extrabold leading-tight tracking-[-0.01em] md:text-[34px]"
                  style={{ color: "#071017" }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-2 min-h-[126px] max-w-[520px] text-[17px] leading-relaxed md:text-[18px]"
                  style={{ color: COLORS.text2 }}
                >
                  {item.text}
                </p>
                <div
                  className="mt-auto pt-6 text-[21px] font-extrabold md:text-[22px]"
                  style={{ color: "#8E5B2F" }}
                >
                  Ориентир: {item.price}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

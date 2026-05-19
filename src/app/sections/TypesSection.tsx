import { useState } from "react";
import { canopyTypes, materials } from "../data";
import { COLORS } from "../theme";

type Props = {
  openModal: (opts?: { type?: string; title?: string }) => void;
};

export function TypesSection({ openModal }: Props) {
  const [selectedCanopy, setSelectedCanopy] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState(0);
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
                    ? "0 14px 34px rgba(31,36,41,0.1)"
                    : "0 8px 22px rgba(31,36,41,0.045)",
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
                  />
                </div>
                <p
                  className="mx-auto mt-5 min-h-[58px] max-w-[250px] text-[16px] leading-snug"
                  style={{ color: COLORS.text2 }}
                >
                  {item.text}
                </p>
                <div
                  className="mt-auto pb-2 pt-7 text-[23px] font-extrabold leading-tight"
                  style={{ color: "#8E5B2F" }}
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
            boxShadow: "0 18px 45px rgba(31,36,41,0.1)",
          }}
        >
          <div className="overflow-hidden rounded-[16px]">
            <img
              src={selectedCanopyItem.img}
              alt={selectedCanopyItem.title}
              className="h-[280px] w-full object-cover md:h-full md:min-h-[380px]"
              loading="lazy"
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
                onClick={() =>
                  openModal({
                    type: selectedCanopyItem.title.toLowerCase(),
                    title: selectedCanopyItem.title,
                  })
                }
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

        <div className="mt-12 grid gap-9 lg:grid-cols-3">
          {materials.map((item, index) => {
            const active = selectedMaterial === index;

            return (
              <article
                key={item.title}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedMaterial(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedMaterial(index);
                  }
                }}
                className="grid min-h-[430px] cursor-pointer overflow-hidden rounded-[18px] border p-5 outline-none transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#AE7B43]/40 md:grid-rows-[205px_1fr] 2xl:min-h-[455px] 2xl:grid-rows-[225px_1fr]"
                style={{
                  borderColor: active ? "#AE7B43" : COLORS.border,
                  background: COLORS.white,
                  boxShadow: active
                    ? "0 16px 38px rgba(31,36,41,0.1)"
                    : "0 8px 22px rgba(31,36,41,0.045)",
                }}
              >
                <div className="overflow-hidden rounded-[12px] bg-white">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="px-5 pb-3 pt-8">
                  <h3
                    className="text-[34px] font-extrabold leading-tight tracking-[-0.01em]"
                    style={{ color: "#071017" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-4 max-w-[500px] text-[18px] leading-relaxed"
                    style={{ color: COLORS.text2 }}
                  >
                    {item.text}
                  </p>
                  <div
                    className="mt-7 text-[22px] font-extrabold"
                    style={{ color: "#8E5B2F" }}
                  >
                    Ориентир: {item.price}
                  </div>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300"
                    style={{
                      gridTemplateRows: active ? "1fr" : "0fr",
                    }}
                  >
                    <div className="min-h-0">
                      <div
                        className="mt-5 rounded-[14px] px-4 py-3 text-[14px] font-bold leading-relaxed"
                        style={{
                          background: "#F7F5F1",
                          border: `1px solid ${COLORS.border}`,
                        }}
                      >
                        Подходит, если важны баланс цены, внешнего вида и
                        условий эксплуатации.
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

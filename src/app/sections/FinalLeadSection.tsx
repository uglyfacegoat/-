import { Landmark, Layers, Wrench, ShieldCheck } from "lucide-react";
import frameStructure from "../../assets/frame-structure.png";
import { COLORS } from "../theme";

const leftNotes = [
  {
    icon: Layers,
    title: "Фермы и балки",
    text: "Рассчитываем с запасом прочности.",
  },
  {
    icon: Landmark,
    title: "Опоры",
    text: "Жесткие стойки на надежных основаниях.",
  },
];

const rightNotes = [
  {
    icon: ShieldCheck,
    title: "Крепления",
    text: "Качественные узлы и анкерные соединения.",
  },
  {
    icon: Wrench,
    title: "Монтаж",
    text: "Точность установки и контроль каждого узла.",
  },
];

export function FinalLeadSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: COLORS.white }}
    >
      <div className="mx-auto max-w-[1780px] px-5 py-12 md:px-8 md:py-16 lg:px-12 xl:px-20">
        <div
          className="relative min-h-[560px] overflow-hidden rounded-[18px] border px-6 py-8 md:px-10 md:py-10 lg:px-14"
          style={{
            borderColor: COLORS.border,
            background: COLORS.white,
            boxShadow: "0 8px 22px rgba(31,36,41,0.045)",
          }}
        >
          <img
            src={frameStructure}
            alt=""
            className="pointer-events-none absolute left-1/2 top-[48%] z-0 hidden h-[82%] w-[54%] -translate-x-[34%] -translate-y-1/2 object-contain opacity-90 lg:block"
            loading="lazy"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-[33%] top-[46%] z-0 hidden h-px w-[20%] lg:block"
            style={{ background: "rgba(142,91,47,0.22)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-[64%] top-[22%] z-0 hidden h-px w-[20%] lg:block"
            style={{ background: "rgba(142,91,47,0.22)" }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-[67%] top-[61%] z-0 hidden h-px w-[18%] lg:block"
            style={{ background: "rgba(142,91,47,0.22)" }}
            aria-hidden="true"
          />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[minmax(350px,0.46fr)_minmax(300px,0.28fr)] lg:justify-between lg:gap-24">
            <div className="max-w-[590px]">
              <h2
                className="text-[32px] font-black leading-tight tracking-[-0.01em] md:text-[44px] lg:text-[46px]"
                style={{ color: "#071017" }}
              >
                Каркас - это хребет навеса
              </h2>
              <p
                className="mt-6 max-w-[560px] text-[17px] font-bold leading-relaxed md:text-[20px]"
                style={{ color: COLORS.text2 }}
              >
                Надежность определяют опоры, балки, фермы, крепления и качество
                монтажа. Умный каркас принимает нагрузки от снега и ветра и
                обеспечивает долговечность конструкции.
              </p>

              <div className="mt-10 grid gap-8">
                {leftNotes.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="relative grid grid-cols-[58px_1fr] items-center gap-5"
                  >
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-[14px] bg-white"
                      style={{
                        border: `1px solid ${COLORS.border}`,
                        color: COLORS.text2,
                      }}
                    >
                      <Icon size={26} strokeWidth={1.55} />
                    </div>
                    <div>
                      <h3
                        className="text-[17px] font-extrabold"
                        style={{ color: "#8E5B2F" }}
                      >
                        {title}
                      </h3>
                      <p
                        className="mt-2 text-[16px] font-bold leading-relaxed"
                        style={{ color: COLORS.text2 }}
                      >
                        {text}
                      </p>
                    </div>
                    <div
                      className="absolute left-[315px] top-1/2 hidden h-px w-[220px] lg:block xl:w-[300px]"
                      style={{ background: "rgba(142,91,47,0.2)" }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute left-[530px] top-1/2 hidden h-2.5 w-2.5 -translate-y-1/2 rounded-full lg:block xl:left-[610px]"
                      style={{ background: "#8E5B2F" }}
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[260px] lg:hidden">
              <img
                src={frameStructure}
                alt="Схема металлического каркаса навеса"
                className="absolute inset-0 h-full w-full object-contain opacity-90"
                loading="lazy"
              />
            </div>

            <div className="grid content-center gap-14 lg:ml-auto lg:max-w-[390px] lg:pt-14">
              {rightNotes.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="relative grid grid-cols-[58px_1fr] gap-5"
                >
                  <div
                    className="mt-1 flex h-14 w-14 items-center justify-center rounded-full bg-white"
                    style={{
                      color: "#8E5B2F",
                      border: `1px solid ${COLORS.border}`,
                    }}
                  >
                    <Icon size={26} strokeWidth={1.6} />
                  </div>
                  <div>
                    <h3
                      className="text-[22px] font-extrabold"
                      style={{ color: "#8E5B2F" }}
                    >
                      {title}
                    </h3>
                    <p
                      className="mt-4 max-w-[320px] text-[19px] font-bold leading-relaxed"
                      style={{ color: COLORS.text2 }}
                    >
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

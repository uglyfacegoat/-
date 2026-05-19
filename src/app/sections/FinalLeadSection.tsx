import {
  Bolt,
  Calculator,
  Columns3,
  DraftingCompass,
  SearchCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import framePlaceholder from "../../assets/frame-placeholder.jpg";
import { COLORS } from "../theme";

const topItems = [
  {
    icon: DraftingCompass,
    title: "Фермы и балки",
  },
  {
    icon: Columns3,
    title: "Опоры и основания",
  },
  {
    icon: Bolt,
    title: "Крепления и монтаж",
  },
] satisfies Array<{ icon: LucideIcon; title: string }>;

const bottomItems = [
  {
    icon: Calculator,
    title: "Расчет нагрузки",
    text: "Проектируем с запасом прочности",
  },
  {
    icon: SearchCheck,
    title: "Контроль узлов",
    text: "Проверяем каждый ответственный узел",
  },
  {
    icon: ShieldCheck,
    title: "Качественный металл",
    text: "Нормальная сталь под реальные нагрузки",
  },
] satisfies Array<{ icon: LucideIcon; title: string; text: string }>;

export function FinalLeadSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: COLORS.white }}
    >
      <div className="mx-auto max-w-[1920px] px-5 py-12 md:px-8 md:py-16 lg:px-12 xl:px-20">
        <div
          className="overflow-hidden rounded-[24px] border px-6 py-8 md:px-10 md:py-10 lg:px-14 lg:py-12"
          style={{
            borderColor: "rgba(174,123,67,0.32)",
            background:
              "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 68%, #FBF8F4 100%)",
            boxShadow: "0 20px 70px rgba(31,36,41,0.08)",
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(420px,0.85fr)_minmax(620px,1.15fr)] lg:items-start xl:gap-12">
            <div className="relative z-10">
              <h2
                className="max-w-[620px] text-[42px] font-black leading-[1.02] tracking-[-0.01em] md:text-[64px] xl:text-[72px]"
                style={{ color: "#071017" }}
              >
                Каркас - это хребет навеса
              </h2>
              <p
                className="mt-7 max-w-[650px] text-[18px] font-bold leading-[1.55] md:text-[22px]"
                style={{ color: COLORS.text }}
              >
                Кровлю видно сразу, но надежность навеса определяют опоры,
                балки, фермы, крепления и качество монтажа. Хороший навес
                начинается не с листа кровли. Он начинается с хребта -
                правильного каркаса.
              </p>
            </div>

            <div className="relative min-h-[260px] lg:min-h-[360px]">
              <div className="absolute inset-0 rounded-full bg-[#AE7B43]/[0.08] blur-2xl" />
              <img
                src={framePlaceholder}
                alt="Заглушка схемы металлического каркаса навеса"
                className="relative z-10 h-auto w-full object-contain"
                width={880}
                height={436}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {topItems.map(({ icon: Icon, title }) => (
              <div
                key={title}
                className="grid min-h-[112px] grid-cols-[82px_1fr] items-center gap-5 rounded-[18px] border bg-white px-5 py-5 sm:grid-cols-[96px_1fr] sm:px-6"
                style={{
                  borderColor: "rgba(174,123,67,0.26)",
                  boxShadow: "0 12px 34px rgba(31,36,41,0.045)",
                }}
              >
                <div
                  className="flex h-16 w-20 items-center justify-center rounded-[14px] sm:w-24"
                  style={{ color: "#B56F31", background: "#FBF8F4" }}
                  aria-hidden="true"
                >
                  <Icon size={38} strokeWidth={1.8} />
                </div>
                <h3 className="text-[22px] font-black leading-tight text-[#071017] md:text-[25px]">
                  {title}
                </h3>
              </div>
            ))}
          </div>

          <div
            className="mt-7 grid gap-5 border-t pt-6 lg:grid-cols-3"
            style={{ borderColor: "rgba(174,123,67,0.2)" }}
          >
            {bottomItems.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="grid grid-cols-[72px_1fr] items-center gap-5 lg:border-r lg:pr-8 last:lg:border-r-0"
                style={{ borderColor: "rgba(174,123,67,0.22)" }}
              >
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-[14px]"
                  style={{ color: "#B56F31", background: "#FBF8F4" }}
                  aria-hidden="true"
                >
                  <Icon size={32} strokeWidth={1.9} />
                </div>
                <div>
                  <h3 className="text-[20px] font-black text-[#071017] md:text-[23px]">
                    {title}
                  </h3>
                  <p
                    className="mt-1 text-[15px] font-bold leading-relaxed md:text-[16px]"
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
    </section>
  );
}

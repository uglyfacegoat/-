import {
  Calculator,
  SearchCheck,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { SVGProps } from "react";
import framePlaceholder from "../../assets/frame-placeholder.jpg";
import { COLORS } from "../theme";

type OutlineIcon = (props: SVGProps<SVGSVGElement>) => JSX.Element;

function TrussIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M7 51h50" />
      <path d="M11 44h42" />
      <path d="M11 44 32 12l21 32" />
      <path d="M20 44 32 12l12 32" />
      <path d="M20 44 32 29l12 15" />
      <path d="M11 51v-7" />
      <path d="M53 51v-7" />
      <path d="M25 51v-7" />
      <path d="M39 51v-7" />
    </svg>
  );
}

function FoundationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 49h32" />
      <path d="M12 55h40" />
      <path d="M19 49v-8h10v8" />
      <path d="M35 49v-8h10v8" />
      <path d="M23 41V16" />
      <path d="M41 41V16" />
      <path d="M18 16h10" />
      <path d="M36 16h10" />
      <path d="M20 23h8" />
      <path d="M36 23h8" />
      <path d="M19 36h10" />
      <path d="M35 36h10" />
      <path d="M21 49h6" />
      <path d="M37 49h6" />
    </svg>
  );
}

function MountingIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 18h22v28H16z" />
      <path d="M38 28h14v8H38" />
      <path d="M52 23v18" />
      <path d="M24 52h30" />
      <path d="M28 46v6" />
      <path d="M46 46v6" />
      <circle cx="23" cy="26" r="2" />
      <circle cx="31" cy="26" r="2" />
      <circle cx="23" cy="38" r="2" />
      <circle cx="31" cy="38" r="2" />
      <path d="M42 28v8" />
    </svg>
  );
}

const topItems = [
  {
    icon: TrussIcon,
    title: "Фермы и балки",
  },
  {
    icon: FoundationIcon,
    title: "Опоры и основания",
  },
  {
    icon: MountingIcon,
    title: "Крепления и монтаж",
  },
] satisfies Array<{ icon: OutlineIcon; title: string }>;

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
            boxShadow: "0 12px 34px rgba(174,123,67,0.1)",
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

            <div className="relative min-h-[280px] lg:min-h-[390px]">
              <img
                src={framePlaceholder}
                alt="Заглушка схемы металлического каркаса навеса"
                className="relative z-10 mt-8 h-auto w-[106%] max-w-none object-contain lg:mt-12 lg:w-[112%]"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%), linear-gradient(180deg, transparent 0%, #000 7%, #000 93%, transparent 100%)",
                  maskImage:
                    "linear-gradient(90deg, transparent 0%, #000 5%, #000 95%, transparent 100%), linear-gradient(180deg, transparent 0%, #000 7%, #000 93%, transparent 100%)",
                  WebkitMaskComposite: "source-in",
                  maskComposite: "intersect",
                }}
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
                  boxShadow: "0 8px 20px rgba(174,123,67,0.08)",
                }}
              >
                <div
                  className="flex h-16 w-20 items-center justify-center rounded-[14px] sm:w-24"
                  style={{ color: "#B56F31", background: "#FBF8F4" }}
                  aria-hidden="true"
                >
                  <Icon className="h-12 w-12" strokeWidth={3} />
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

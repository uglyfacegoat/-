import { Menu } from "lucide-react";
import { heroAdvantages } from "../data";
import { COLORS } from "../theme";
import { Button, LogoMark } from "../components/ui";
import heroReference from "../../assets/hero-reference.png";
import heroReferenceLarge from "../../assets/hero-reference-large.png";

type Props = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  openModal: () => void;
};

export function HeroSection({ menuOpen, setMenuOpen, openModal }: Props) {
  return (
    <section style={{ background: COLORS.warmBg }}>
      <header
        className="relative z-10 border-b"
        style={{
          background: "linear-gradient(180deg, #182026 0%, #11181D 100%)",
          borderColor: "rgba(247,245,241,0.16)",
          boxShadow: "0 8px 24px rgba(17,24,29,0.18)",
        }}
      >
        <div className="mx-auto flex h-[86px] max-w-none items-center justify-between gap-4 px-5 md:px-8 lg:px-[clamp(80px,5vw,150px)]">
          <LogoMark />

          <nav
            className="hidden items-center gap-8 text-[14px] font-bold xl:flex"
            style={{ color: "rgba(247,245,241,0.72)" }}
          >
            <a className="transition-colors hover:text-white" href="#benefits">
              Преимущества
            </a>
            <a className="transition-colors hover:text-white" href="#types">
              Виды
            </a>
            <a className="transition-colors hover:text-white" href="#cases">
              Примеры
            </a>
            <a className="transition-colors hover:text-white" href="#process">
              Как работаем
            </a>
            <a className="transition-colors hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a
              className="text-[15px] font-extrabold whitespace-nowrap"
              href="tel:+74951186060"
              data-goal="phone_click"
              style={{ color: COLORS.white }}
            >
              +7 (495) 118-60-60
            </a>
            <Button variant="bronze" onClick={openModal} className="h-12 px-6">
              Рассчитать стоимость
            </Button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-[12px] md:hidden"
            style={{
              background: "rgba(247,245,241,0.08)",
              border: "1px solid rgba(247,245,241,0.14)",
            }}
            aria-label="Меню"
          >
            <Menu size={21} color={COLORS.white} />
          </button>
        </div>

        {menuOpen && (
          <div
            className="mx-5 mb-5 grid gap-3 rounded-[18px] p-4 text-[14px] font-bold md:hidden"
            style={{
              background: "rgba(247,245,241,0.08)",
              color: COLORS.white,
              border: "1px solid rgba(247,245,241,0.14)",
            }}
          >
            <a href="#benefits" onClick={() => setMenuOpen(false)}>
              Преимущества
            </a>
            <a href="#types" onClick={() => setMenuOpen(false)}>
              Виды
            </a>
            <a href="#cases" onClick={() => setMenuOpen(false)}>
              Примеры
            </a>
            <a href="#process" onClick={() => setMenuOpen(false)}>
              Как работаем
            </a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>
              FAQ
            </a>
            <a href="tel:+74951186060" data-goal="phone_click">
              +7 (495) 118-60-60
            </a>
          </div>
        )}
      </header>

      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(100deg, #F7F5F1 0%, #F7F5F1 44%, rgba(247,245,241,0.9) 56%, rgba(220,232,242,0.78) 100%)",
          }}
        />
        <div className="relative mx-auto grid min-h-[720px] max-w-none gap-4 px-5 pb-0 pt-10 md:px-8 lg:grid-cols-[620px_minmax(0,1fr)] lg:items-center lg:px-[clamp(80px,5vw,150px)] lg:pt-12 xl:min-h-[820px] xl:grid-cols-[700px_minmax(0,1fr)] 2xl:min-h-[calc(100vh-40px)] 2xl:grid-cols-[760px_minmax(0,1fr)] min-[2200px]:grid-cols-[840px_minmax(0,1fr)]">
          <div className="relative z-10 max-w-[760px]">
            <h1
              className="text-[38px] font-black leading-[1.08] tracking-[-0.02em] sm:text-[48px] lg:text-[58px] xl:text-[66px] min-[2200px]:text-[74px]"
              style={{ color: "#071017" }}
            >
              <span className="block">Крепкие навесы</span>
              <span className="block lg:whitespace-nowrap">
                под ключ для дома,
              </span>
              <span className="block">дачи и участка</span>
            </h1>

            <p
              className="mt-6 max-w-[660px] text-[16px] leading-[1.62] sm:text-[17px] lg:text-[18px] min-[2200px]:text-[20px]"
              style={{ color: COLORS.text2 }}
            >
              Используем металлочерепицу, профлист и сотовый поликарбонат.
              Рассчитываем каркас под снеговые нагрузки. Конструкция не
              удешевляется в ущерб надежности.
            </p>

            <div className="mt-9">
              <div
                className="text-[30px] font-extrabold leading-tight sm:text-[36px] lg:text-[38px] min-[2200px]:text-[44px]"
                style={{ color: "#8E5B2F" }}
              >
                <span className="sm:whitespace-nowrap">от 6 000 до 10 000</span>
                <span className="text-[17px] sm:text-[20px] lg:text-[22px]">
                  {" "}
                  руб./м² под ключ
                </span>
              </div>
              <p
                className="mt-4 max-w-[520px] text-[15px] leading-relaxed"
                style={{ color: COLORS.text2 }}
              >
                Точная стоимость зависит от размера, типа кровли, каркаса и
                условий монтажа.
              </p>
            </div>

            <div className="mt-11 grid max-w-[820px] gap-0 sm:grid-cols-2 lg:grid-cols-4">
              {heroAdvantages.map(({ icon, iconClassName, text }) => (
                <div
                  key={text}
                  className="border-l px-4 first:border-l-0 first:pl-0"
                  style={{
                    borderColor: COLORS.border,
                  }}
                >
                  <span
                    className="flex h-[58px] items-start"
                    aria-hidden="true"
                  >
                    <span
                      className={`block ${iconClassName}`}
                      style={{
                        backgroundColor: COLORS.text2,
                        maskImage: `url(${icon})`,
                        maskPosition: "center",
                        maskRepeat: "no-repeat",
                        maskSize: "contain",
                        WebkitMaskImage: `url(${icon})`,
                        WebkitMaskPosition: "center",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "contain",
                      }}
                    />
                  </span>
                  <div
                    className="mt-3 whitespace-pre-line text-[13px] font-bold leading-snug"
                    style={{ color: COLORS.text }}
                  >
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[390px] sm:min-h-[470px] lg:min-h-[660px] xl:min-h-[760px] 2xl:min-h-[calc(100vh-100px)]">
            <picture className="absolute bottom-[-34px] right-[-22%] block h-auto w-[154%] max-w-none sm:bottom-[-42px] sm:right-[-14%] sm:w-[140%] lg:bottom-[-58px] lg:right-[-22%] lg:w-[168%] xl:bottom-[-70px] xl:right-[-22%] xl:w-[162%] 2xl:bottom-[-82px] 2xl:right-[-34%] 2xl:w-[174%] min-[2200px]:bottom-[-96px] min-[2200px]:right-[-28%] min-[2200px]:w-[162%]">
              <source media="(min-width: 1536px)" srcSet={heroReferenceLarge} />
              <img
                src={heroReference}
                alt="Навес для автомобиля у современного дома"
                className="h-auto w-full max-w-none object-contain object-bottom drop-shadow-[0_24px_32px_rgba(31,36,41,0.18)]"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

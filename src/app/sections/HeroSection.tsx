import { Menu, PhoneCall } from "lucide-react";
import { heroAdvantages } from "../data";
import { COLORS } from "../theme";
import { Button, LogoMark } from "../components/ui";
import heroReference from "../../assets/hero-reference.png";
import { trackGoal } from "../utils/analytics";

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
          background: "linear-gradient(180deg, #F2ECE3 0%, #EAE1D6 100%)",
          borderColor: "rgba(174,123,67,0.22)",
          boxShadow: "0 8px 24px rgba(31,36,41,0.08)",
        }}
      >
        <div className="mx-auto flex h-[86px] max-w-none items-center justify-between gap-4 px-5 md:px-8 lg:px-[clamp(80px,5vw,150px)]">
          <LogoMark />

          <nav
            className="hidden items-center gap-8 text-[14px] font-bold xl:flex"
            style={{ color: "rgba(7,16,23,0.68)" }}
          >
            <a
              className="transition-colors hover:text-[#071017]"
              href="#benefits"
            >
              Преимущества
            </a>
            <a className="transition-colors hover:text-[#071017]" href="#types">
              Виды
            </a>
            <a className="transition-colors hover:text-[#071017]" href="#cases">
              Примеры
            </a>
            <a
              className="transition-colors hover:text-[#071017]"
              href="#process"
            >
              Как работаем
            </a>
            <a className="transition-colors hover:text-[#071017]" href="#faq">
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-5 md:flex">
            <a
              className="text-[15px] font-extrabold whitespace-nowrap"
              href="tel:+74951186060"
              data-goal="phone_click"
              onClick={() => trackGoal("phone_click")}
              style={{ color: "#071017" }}
            >
              +7 (495) 118-60-60
            </a>
            <Button variant="bronze" onClick={openModal} className="h-12 px-6">
              Рассчитать стоимость
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:+74951186060"
              data-goal="phone_click"
              onClick={() => trackGoal("phone_click")}
              className="flex h-11 w-11 items-center justify-center rounded-[12px]"
              style={{
                background: "rgba(174,123,67,0.12)",
                border: "1px solid rgba(174,123,67,0.26)",
              }}
              aria-label="Позвонить"
            >
              <PhoneCall size={20} color="#8E5B2F" strokeWidth={2.2} />
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-[12px]"
              style={{
                background: "rgba(7,16,23,0.06)",
                border: "1px solid rgba(7,16,23,0.12)",
              }}
              aria-label="Меню"
            >
              <Menu size={21} color="#071017" />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="mx-5 mb-5 grid gap-3 rounded-[18px] p-4 text-[14px] font-bold md:hidden"
            style={{
              background: "#F7F5F1",
              color: "#071017",
              border: "1px solid rgba(174,123,67,0.18)",
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
            <a
              href="tel:+74951186060"
              data-goal="phone_click"
              onClick={() => trackGoal("phone_click")}
            >
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
        <div className="relative mx-auto grid max-w-none gap-4 px-5 pb-14 pt-10 md:px-8 md:pb-16 lg:min-h-[720px] lg:grid-cols-[620px_minmax(0,1fr)] lg:items-center lg:px-[clamp(80px,5vw,150px)] lg:pb-0 lg:pt-12 xl:min-h-[820px] xl:grid-cols-[700px_minmax(0,1fr)] 2xl:min-h-[calc(100vh-40px)] 2xl:grid-cols-[760px_minmax(0,1fr)] min-[2200px]:grid-cols-[840px_minmax(0,1fr)]">
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

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Button onClick={openModal} className="h-[52px] px-8">
                Рассчитать стоимость
              </Button>
              <span
                className="max-w-[360px] text-[13px] font-bold leading-relaxed"
                style={{ color: COLORS.text3 }}
              >
                Без навязывания: сначала уточним задачу и дадим ориентир.
              </span>
            </div>

            <div className="mt-10 grid max-w-[820px] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {heroAdvantages.map(({ icon, iconClassName, text }, index) => (
                <div
                  key={text}
                  className="grid grid-cols-[64px_1fr] items-center gap-4 rounded-[16px] border bg-white/70 px-4 py-4 sm:grid-cols-[72px_1fr] lg:block lg:rounded-none lg:border-y-0 lg:border-r-0 lg:bg-transparent lg:py-0 lg:first:border-l-0 lg:px-5"
                  style={{
                    borderColor: COLORS.border,
                  }}
                >
                  <span
                    className={`flex h-[58px] items-center justify-center lg:h-[72px] lg:justify-start ${
                      index === 0 ? "translate-y-1.5" : ""
                    }`}
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
                    className={`whitespace-pre-line text-[13px] font-bold leading-snug lg:mt-3 ${
                      index === 0 ? "translate-y-1.5" : ""
                    }`}
                    style={{ color: COLORS.text }}
                  >
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[390px] sm:min-h-[470px] lg:block lg:min-h-[660px] xl:min-h-[760px] 2xl:min-h-[calc(100vh-100px)]">
            <picture className="absolute bottom-[-34px] right-[-22%] block h-auto w-[154%] max-w-none sm:bottom-[-42px] sm:right-[-14%] sm:w-[140%] lg:bottom-[-30px] lg:right-[-8%] lg:w-[112%] xl:bottom-[-38px] xl:right-[-8%] xl:w-[108%] 2xl:bottom-[-44px] 2xl:right-[-12%] 2xl:w-[116%] min-[2200px]:bottom-[-52px] min-[2200px]:right-[-10%] min-[2200px]:w-[108%]">
              <img
                src={heroReference}
                alt="Навес для автомобиля у современного дома"
                className="h-auto w-full max-w-none object-contain object-bottom drop-shadow-[0_24px_32px_rgba(31,36,41,0.18)]"
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

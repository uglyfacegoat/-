import { Mail, MapPin, Phone } from "lucide-react";
import maxIcon from "../../assets/max.svg";
import telegramIcon from "../../assets/tg.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import { CONTACTS } from "../contacts";
import { COLORS } from "../theme";
import { trackGoal } from "../utils/analytics";

const footerNav = [
  { label: "Преимущества", href: "#benefits" },
  { label: "Виды", href: "#types" },
  { label: "Примеры", href: "#cases" },
  { label: "Как работаем", href: "#process" },
  { label: "FAQ", href: "#faq" },
];

const socials = [
  {
    label: CONTACTS.whatsapp.label,
    href: CONTACTS.whatsapp.href,
    icon: whatsappIcon,
    goal: "whatsapp_click" as const,
  },
  {
    label: CONTACTS.telegram.label,
    href: CONTACTS.telegram.href,
    icon: telegramIcon,
    goal: "telegram_click" as const,
  },
  {
    label: CONTACTS.max.label,
    href: CONTACTS.max.href,
    icon: maxIcon,
    goal: "max_click" as const,
  },
];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: COLORS.graphite, color: "rgba(247,245,241,0.76)" }}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(198,154,102,0.8) 35%, rgba(255,255,255,0.3) 50%, rgba(198,154,102,0.8) 65%, transparent 100%)",
        }}
      />

      <div className="mx-auto max-w-[1500px] px-5 py-10 md:px-8 md:py-12 lg:px-12 xl:px-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr_0.8fr] lg:items-start">
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/ico-white-text.svg"
                alt=""
                aria-hidden="true"
                className="h-24 w-auto shrink-0 md:h-28"
              />
              <div>
                <div
                  className="text-[20px] font-black leading-tight md:text-[24px]"
                  style={{ color: COLORS.white }}
                >
                  Хребет Навеса
                </div>
                <div className="mt-2 text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#C69A66]">
                  каркас · кровля · монтаж
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-[520px] text-[15px] font-bold leading-relaxed text-white/64">
              Навесы под ключ по Москве и Московской области: расчет, замер,
              изготовление металлокаркаса и аккуратный монтаж на объекте.
            </p>

            <div className="mt-6 flex flex-wrap gap-2 text-[12px] font-extrabold uppercase tracking-[0.08em] text-white/58">
              <span className="rounded-full border border-white/12 px-3 py-2">
                Москва
              </span>
              <span className="rounded-full border border-white/12 px-3 py-2">
                Московская область
              </span>
              <span className="rounded-full border border-white/12 px-3 py-2">
                под ключ
              </span>
            </div>
          </div>

          <div className="grid gap-3">
            <a
              href={CONTACTS.phone.href}
              data-goal="phone_click"
              onClick={() => trackGoal("phone_click")}
              className="group flex items-center gap-4 rounded-[18px] border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.08]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#C69A66]/16 text-[#C69A66]">
                <Phone size={20} strokeWidth={2.2} />
              </span>
              <span>
                <span className="block text-[12px] font-extrabold uppercase tracking-[0.1em] text-white/44">
                  телефон
                </span>
                <span className="mt-1 block text-[18px] font-black text-white">
                  {CONTACTS.phone.label}
                </span>
              </span>
            </a>

            <a
              href={CONTACTS.email.href}
              className="group flex items-center gap-4 rounded-[18px] border border-white/10 bg-white/[0.04] p-4 transition-colors hover:bg-white/[0.08]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[#C69A66]/16 text-[#C69A66]">
                <Mail size={20} strokeWidth={2.2} />
              </span>
              <span className="min-w-0">
                <span className="block text-[12px] font-extrabold uppercase tracking-[0.1em] text-white/44">
                  почта
                </span>
                <span className="mt-1 block break-all text-[15px] font-black text-white">
                  {CONTACTS.email.label}
                </span>
              </span>
            </a>
          </div>

          <div>
            <div className="rounded-[22px] border border-white/10 bg-[#171B1F]/55 p-5">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-[13px] bg-white/[0.06] text-[#C69A66]">
                  <MapPin size={19} strokeWidth={2.2} />
                </span>
                <div>
                  <div className="text-[14px] font-black text-white">
                    Работаем по Москве и МО
                  </div>
                  <p className="mt-2 text-[13px] font-bold leading-relaxed text-white/58">
                    Быстро уточним задачу, сориентируем по стоимости и подберем
                    удобный формат связи.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                {socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    data-goal={item.goal}
                    onClick={() => trackGoal(item.goal)}
                    className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.05] transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.1]"
                  >
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-[22px] w-[22px]"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-9 flex flex-col gap-5 border-t border-white/10 pt-6 text-[13px] font-bold md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {footerNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white/58 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            id="privacy"
            href="#"
            className="text-white/48 transition-colors hover:text-white"
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}

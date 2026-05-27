import maxIcon from "../../assets/max.svg";
import telegramIcon from "../../assets/tg.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import { trackGoal } from "../utils/analytics";

const CONTACTS = [
  {
    label: "WhatsApp",
    href: "https://wa.me/74951186060",
    goal: "whatsapp_click" as const,
    icon: whatsappIcon,
  },
  {
    label: "Telegram",
    href: "https://t.me/khrebetnavesa",
    goal: "telegram_click" as const,
    icon: telegramIcon,
  },
  {
    label: "Max",
    href: "https://max.ru/khrebetnavesa",
    goal: "max_click" as const,
    icon: maxIcon,
  },
];

export function FloatingContacts() {
  return (
    <div
      className="fixed bottom-5 right-5 z-40 flex flex-col gap-2 rounded-[18px] border bg-white/92 p-2 shadow-[0_14px_38px_rgba(31,36,41,0.18)] backdrop-blur sm:bottom-6 sm:right-6"
      style={{ borderColor: "rgba(174,123,67,0.24)" }}
      aria-label="Quick contacts"
    >
      {CONTACTS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          aria-label={item.label}
          data-goal={item.goal}
          onClick={() => trackGoal(item.goal)}
          className="flex h-12 w-12 items-center justify-center rounded-[14px] border transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#F4F0EA]"
          style={{ borderColor: "rgba(174,123,67,0.24)" }}
        >
          <img
            src={item.icon}
            alt=""
            aria-hidden="true"
            className="h-7 w-7 shrink-0"
          />
        </a>
      ))}
    </div>
  );
}

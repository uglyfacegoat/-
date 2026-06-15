import { useEffect, useRef, useState } from "react";
import maxIcon from "../../assets/max.svg";
import telegramIcon from "../../assets/tg.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import { CONTACTS as CONTACT_LINKS } from "../contacts";
import { trackGoal } from "../utils/analytics";

const CONTACTS = [
  {
    label: CONTACT_LINKS.whatsapp.label,
    href: CONTACT_LINKS.whatsapp.href,
    goal: "whatsapp_click" as const,
    icon: whatsappIcon,
  },
  {
    label: CONTACT_LINKS.telegram.label,
    href: CONTACT_LINKS.telegram.href,
    goal: "telegram_click" as const,
    icon: telegramIcon,
  },
  {
    label: CONTACT_LINKS.max.label,
    href: CONTACT_LINKS.max.href,
    goal: "max_click" as const,
    icon: maxIcon,
  },
];

export function FloatingContacts() {
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimer.current) {
        window.clearTimeout(scrollTimer.current);
      }

      scrollTimer.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollTimer.current) {
        window.clearTimeout(scrollTimer.current);
      }
    };
  }, []);

  return (
    <div
      className={`fixed right-0 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-1 rounded-l-[14px] border border-r-0 bg-white/92 p-1.5 shadow-[0_12px_30px_rgba(31,36,41,0.16)] backdrop-blur transition-all duration-300 ease-out ${
        isScrolling ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
      }`}
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
          className="flex h-10 w-10 items-center justify-center rounded-[11px] border transition-all duration-200 hover:-translate-x-0.5 hover:bg-[#F4F0EA]"
          style={{ borderColor: "rgba(174,123,67,0.24)" }}
        >
          <img
            src={item.icon}
            alt=""
            aria-hidden="true"
            className="h-[22px] w-[22px] shrink-0"
          />
        </a>
      ))}
    </div>
  );
}

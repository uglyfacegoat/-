import type { ReactNode } from "react";
import { COLORS } from "../theme";

export function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-10 w-10 items-center justify-center rounded-[8px]"
        style={{
          background: "rgba(247,245,241,0.12)",
          border: "1px solid rgba(247,245,241,0.28)",
        }}
      >
        <svg width="24" height="24" viewBox="0 0 36 36" fill="none" aria-hidden>
          <path
            d="M6 22 L18 10 L30 22"
            stroke="#F7F5F1"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 26 L30 26"
            stroke="#AE7B43"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M11 26 L11 22"
            stroke="#F7F5F1"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M25 26 L25 22"
            stroke="#F7F5F1"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="leading-tight">
        <div style={{ color: COLORS.white, fontWeight: 800 }}>
          Хребет Навеса
        </div>
        <div
          style={{
            color: "rgba(247,245,241,0.66)",
            fontSize: 11,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          каркас · кровля · монтаж
        </div>
      </div>
    </div>
  );
}

export function Button({
  children,
  onClick,
  variant = "dark",
  className = "",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "dark" | "bronze";
  className?: string;
}) {
  const bg = variant === "bronze" ? COLORS.bronze : COLORS.darkMetal;
  const hover = variant === "bronze" ? "#946737" : COLORS.graphite;
  return (
    <button
      onClick={onClick}
      data-goal="cta_click"
      className={`h-12 rounded-[14px] px-6 text-sm font-bold uppercase tracking-[0.02em] transition-all duration-200 hover:-translate-y-0.5 ${className}`}
      style={{ background: bg, color: COLORS.white }}
      onMouseEnter={(e) => (e.currentTarget.style.background = hover)}
      onMouseLeave={(e) => (e.currentTarget.style.background = bg)}
    >
      {children}
    </button>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-[26px] font-extrabold leading-[1.08] md:text-[36px]"
      style={{ color: COLORS.text }}
    >
      {children}
    </h2>
  );
}

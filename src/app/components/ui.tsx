import type { ReactNode } from "react";
import { COLORS } from "../theme";
import { trackGoal } from "../utils/analytics";

export function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/favicon.svg?v=2"
        alt=""
        aria-hidden="true"
        className="-ml-3 h-[84px] w-[84px] translate-y-1 shrink-0 md:-ml-5 md:h-[98px] md:w-[98px]"
      />
      <div className="leading-tight">
        <div style={{ color: "#071017", fontWeight: 800 }}>Хребет Навеса</div>
        <div
          style={{
            color: "rgba(7,16,23,0.58)",
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
      onClick={() => {
        trackGoal("cta_click");
        onClick?.();
      }}
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

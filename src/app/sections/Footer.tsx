import { COLORS } from "../theme";
import { trackGoal } from "../utils/analytics";

export function Footer() {
  return (
    <footer
      style={{ background: COLORS.graphite, color: "rgba(247,245,241,0.72)" }}
    >
      <div className="mx-auto grid max-w-[1180px] gap-6 px-5 py-7 text-[13px] md:grid-cols-[1fr_auto_auto] md:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/ico-white-text.svg"
            alt=""
            aria-hidden="true"
            className="h-20 w-auto shrink-0"
          />
          <div>
            <div className="font-extrabold" style={{ color: COLORS.white }}>
              Хребет Навеса
            </div>
            <div className="mt-1">
              Навесы под ключ в Москве и Московской области.
            </div>
          </div>
        </div>
        <a
          href="tel:+74951186060"
          data-goal="phone_click"
          onClick={() => trackGoal("phone_click")}
          style={{ color: COLORS.white, fontWeight: 700 }}
        >
          +7 (495) 118-60-60
        </a>
        <a id="privacy" href="#" style={{ color: "rgba(247,245,241,0.72)" }}>
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}

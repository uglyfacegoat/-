import { COLORS } from "../theme";

export function Footer() {
  return (
    <footer
      style={{ background: COLORS.graphite, color: "rgba(247,245,241,0.72)" }}
    >
      <div className="mx-auto grid max-w-[1180px] gap-6 px-5 py-7 text-[13px] md:grid-cols-[1fr_auto_auto] md:px-8">
        <div>
          <div className="font-extrabold" style={{ color: COLORS.white }}>
            Хребет Навеса
          </div>
          <div className="mt-1">
            Навесы под ключ в Москве и Московской области.
          </div>
        </div>
        <a
          href="tel:+74951234567"
          data-goal="phone_click"
          style={{ color: COLORS.white, fontWeight: 700 }}
        >
          +7 (495) 123-45-67
        </a>
        <a id="privacy" href="#" style={{ color: "rgba(247,245,241,0.72)" }}>
          Политика конфиденциальности
        </a>
      </div>
    </footer>
  );
}

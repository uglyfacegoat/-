import { useState } from "react";
import type { FormEvent } from "react";
import { Check, X } from "lucide-react";
import { TYPES } from "../data";
import { COLORS } from "../theme";
import { formatRuPhone, isValidRuPhone } from "../utils/phone";

export function LeadRequestSection() {
  const [name, setName] = useState("");
  const [type, setType] = useState(TYPES[1]);
  const [comment, setComment] = useState("");
  const [phone, setPhone] = useState("");
  const [trap, setTrap] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const openPhonePanel = (event: FormEvent) => {
    event.preventDefault();
    if (trap) return;
    setPanelOpen(true);
    setSent(false);
    setError("");
  };

  const submitPhone = (event: FormEvent) => {
    event.preventDefault();
    if (!isValidRuPhone(phone)) {
      setError("Укажите номер в формате +7 (9XX) XXX-XX-XX");
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: COLORS.white }}
    >
      <div className="mx-auto max-w-[1500px] px-5 py-14 md:px-8 md:py-18 lg:px-12 xl:px-20">
        <div className="relative grid gap-10 lg:grid-cols-[minmax(0,640px)_minmax(420px,520px)] lg:items-start lg:justify-between">
          <div className="relative z-10">
            <h2
              className="max-w-[650px] text-[34px] font-black leading-[1.12] tracking-[-0.01em] md:text-[44px] lg:text-[48px]"
              style={{ color: "#071017" }}
            >
              Рассчитаем стоимость навеса под ваш дом или участок
            </h2>
            <p
              className="mt-5 max-w-[660px] text-[17px] font-bold leading-relaxed md:text-[19px]"
              style={{ color: COLORS.text2 }}
            >
              Напишите, какой навес нужен: для автомобиля, террасы, входа или
              двора. Можно приложить размеры или фото места установки - так
              расчет будет точнее.
            </p>

            <form
              onSubmit={openPhonePanel}
              className="mt-7 max-w-[690px] rounded-[18px] border p-5"
              style={{
                borderColor: COLORS.border,
                background: COLORS.white,
                boxShadow: "0 8px 22px rgba(31,36,41,0.045)",
              }}
            >
              <div className="grid gap-3 md:grid-cols-2">
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ваше имя"
                  className="h-13 rounded-[12px] px-4 text-[16px] font-bold outline-none transition-colors focus:border-[#AE7B43]"
                  style={{
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                  }}
                />
                <select
                  value={type}
                  onChange={(event) => setType(event.target.value)}
                  className="h-13 rounded-[12px] px-4 text-[16px] font-bold outline-none transition-colors focus:border-[#AE7B43]"
                  style={{
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text2,
                  }}
                >
                  {TYPES.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
              <textarea
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Комментарий"
                rows={2}
                className="mt-3 w-full resize-none rounded-[12px] px-4 py-3 text-[16px] font-bold outline-none transition-colors focus:border-[#AE7B43]"
                style={{
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.text,
                }}
              />
              <input
                value={trap}
                onChange={(event) => setTrap(event.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <button
                type="submit"
                className="mt-3 h-14 w-full rounded-[12px] text-[17px] font-extrabold"
                style={{ background: "#9B622F", color: COLORS.white }}
              >
                Получить расчет
              </button>
              <p
                className="mt-4 text-center text-[12px] font-bold leading-relaxed"
                style={{ color: COLORS.text3 }}
              >
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>

          <div className="pointer-events-none absolute left-[46%] right-[35%] top-[185px] z-0 hidden h-[120px] lg:block">
            <div
              className="absolute left-0 top-0 h-6 w-6 rounded-full"
              style={{
                background: "#9B622F",
                boxShadow: "0 0 0 5px rgba(155,98,47,0.14)",
              }}
            />
            <div
              className="absolute left-3 top-3 h-px transition-all duration-700 ease-out"
              style={{
                width: panelOpen ? "100%" : "0%",
                background: COLORS.border,
              }}
            />
            <div
              className="absolute right-0 top-3 w-px transition-all delay-300 duration-500 ease-out"
              style={{
                height: panelOpen ? "95px" : "0px",
                background: COLORS.border,
              }}
            />
          </div>

          <aside
            className={`relative z-10 rounded-[24px] border p-6 transition-all duration-500 md:p-8 ${
              panelOpen
                ? "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-8 opacity-0"
            }`}
            style={{
              borderColor: COLORS.border,
              background: COLORS.white,
              boxShadow: "0 22px 54px rgba(31,36,41,0.16)",
            }}
            aria-hidden={!panelOpen}
          >
            <button
              type="button"
              onClick={() => setPanelOpen(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[#F4F0EA]"
              aria-label="Закрыть"
            >
              <X size={24} color={COLORS.text3} strokeWidth={1.5} />
            </button>

            <h3
              className="pr-12 text-[26px] font-black leading-tight md:text-[30px]"
              style={{ color: "#071017" }}
            >
              Рассчитать стоимость навеса
            </h3>
            <p
              className="mt-4 max-w-[420px] text-[16px] font-bold leading-relaxed"
              style={{ color: COLORS.text2 }}
            >
              Укажите телефон и коротко расскажите о задаче - мы свяжемся и
              сделаем расчет.
            </p>

            <form onSubmit={submitPhone} className="mt-7">
              <label
                className="text-[15px] font-extrabold"
                style={{ color: COLORS.text2 }}
              >
                Телефон
              </label>
              <input
                value={phone}
                onFocus={() => !phone && setPhone("+7")}
                onChange={(event) =>
                  setPhone(formatRuPhone(event.target.value))
                }
                placeholder="+7 (9XX) XXX-XX-XX"
                inputMode="tel"
                className="mt-2 h-14 w-full rounded-[12px] px-4 text-[20px] font-bold outline-none transition-colors focus:border-[#AE7B43]"
                style={{
                  border: `1px solid ${error ? COLORS.bronze : COLORS.border}`,
                  color: COLORS.text,
                }}
              />
              {error && (
                <div
                  className="mt-2 text-[12px] font-bold"
                  style={{ color: COLORS.bronze }}
                >
                  {error}
                </div>
              )}
              <button
                type="submit"
                className="mt-4 h-14 w-full rounded-[12px] text-[17px] font-extrabold"
                style={{ background: "#9B622F", color: COLORS.white }}
              >
                Отправить заявку
              </button>
            </form>

            <div
              className={`mt-7 overflow-hidden border-t transition-all duration-500 ${
                sent ? "max-h-44 pt-7 opacity-100" : "max-h-0 pt-0 opacity-0"
              }`}
              style={{ borderColor: COLORS.border }}
            >
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#4EA65A]">
                  <Check size={30} color={COLORS.white} strokeWidth={2.4} />
                </div>
                <div>
                  <h4 className="text-[22px] font-black">Заявка отправлена!</h4>
                  <p
                    className="mt-2 text-[15px] font-bold leading-relaxed"
                    style={{ color: COLORS.text2 }}
                  >
                    Спасибо. Мы получили вашу заявку и свяжемся с вами в
                    ближайшее время.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

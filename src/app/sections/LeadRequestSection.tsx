import { useState } from "react";
import type { FormEvent } from "react";
import { Check, Plus, Send, ShieldCheck } from "lucide-react";
import maxIcon from "../../assets/max.svg";
import telegramIcon from "../../assets/tg.svg";
import whatsappIcon from "../../assets/whatsapp.svg";
import { faqs, TYPES } from "../data";
import { COLORS } from "../theme";
import { trackGoal } from "../utils/analytics";
import { formatRuPhone, isValidRuPhone } from "../utils/phone";

type Props = {
  faqOpen: number | null;
  setFaqOpen: (index: number | null) => void;
};

export function LeadRequestSection({ faqOpen, setFaqOpen }: Props) {
  const [name, setName] = useState("");
  const [type, setType] = useState(TYPES[1]);
  const [comment, setComment] = useState("");
  const [phone, setPhone] = useState("");
  const [trap, setTrap] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const messengers = [
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

  const submitLead = (event: FormEvent) => {
    event.preventDefault();
    if (trap) return;
    if (!isValidRuPhone(phone)) {
      setError("Укажите номер в формате +7 (9XX) XXX-XX-XX");
      return;
    }
    setError("");
    trackGoal("lead_submit");
    setSent(true);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #FFFFFF 0%, #F7F5F1 48%, #EEE7DE 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#D9D4CC]" />

      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-8 md:py-20 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-[900px] text-center">
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[12px] font-extrabold uppercase tracking-[0.08em]"
            style={{
              borderColor: "rgba(174,123,67,0.26)",
              color: "#8E5B2F",
              background: "rgba(255,255,255,0.7)",
            }}
          >
            <ShieldCheck size={15} strokeWidth={2.1} />
            расчет и ответы
          </div>
          <h2
            className="mt-5 text-[34px] font-black leading-[1.1] tracking-[-0.01em] md:text-[46px]"
            style={{ color: "#071017" }}
          >
            Рассчитаем стоимость навеса под ваш дом или участок
          </h2>
          <p
            className="mx-auto mt-4 max-w-[720px] text-[17px] font-bold leading-relaxed md:text-[19px]"
            style={{ color: COLORS.text2 }}
          >
            Напишите, какой навес нужен: для автомобиля, террасы, входа или
            двора. Можно добавить размеры, материал или адрес объекта в
            комментарии - так расчет будет точнее.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(430px,0.78fr)] lg:items-start">
          <div
            className="rounded-[28px] border bg-white/86 p-5 md:p-7"
            style={{
              borderColor: COLORS.border,
              boxShadow: "0 12px 32px rgba(174,123,67,0.1)",
            }}
          >
            <div className="mb-5">
              <div
                className="text-[12px] font-extrabold uppercase tracking-[0.12em]"
                style={{ color: COLORS.bronze }}
              >
                FAQ
              </div>
              <h3 className="mt-2 text-[30px] font-black leading-tight text-[#071017]">
                Частые вопросы до первого расчета
              </h3>
            </div>

            <div className="grid gap-3">
              {faqs.map((item, index) => (
                <div
                  key={item.q}
                  className="overflow-hidden rounded-[18px] transition-colors"
                  style={{
                    background:
                      faqOpen === index ? COLORS.warmBg : COLORS.white,
                    border: `1px solid ${
                      faqOpen === index ? COLORS.bronze : COLORS.border
                    }`,
                  }}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-extrabold"
                    onClick={() => setFaqOpen(faqOpen === index ? null : index)}
                  >
                    <span>
                      <span style={{ color: COLORS.bronze }}>0{index + 1}</span>{" "}
                      {item.q}
                    </span>
                    <Plus
                      size={17}
                      color={COLORS.graphite}
                      className={`shrink-0 transition-transform ${
                        faqOpen === index ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                  {faqOpen === index && (
                    <div
                      className="px-5 pb-5 text-[14px] font-bold leading-relaxed"
                      style={{ color: COLORS.text2 }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <aside
            className="overflow-hidden rounded-[28px] border bg-white"
            style={{
              borderColor: "rgba(174,123,67,0.28)",
              boxShadow:
                "0 16px 42px rgba(174,123,67,0.13), inset 0 1px 0 rgba(255,255,255,0.9)",
            }}
          >
            <div
              className="p-6 md:p-8"
              style={{
                background:
                  "linear-gradient(180deg, rgba(31,36,41,0.98) 0%, rgba(47,52,56,0.96) 100%)",
                color: COLORS.white,
              }}
            >
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#C69A66]">
                    заявка на расчет
                  </div>
                  <h3 className="mt-3 text-[32px] font-black leading-tight md:text-[36px]">
                    Получить расчет
                  </h3>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Send
                    size={25}
                    color="#C69A66"
                    strokeWidth={2.2}
                    className="-translate-x-0.5 translate-y-0.5"
                  />
                </div>
              </div>
              <p className="mt-4 max-w-[420px] text-[15px] font-bold leading-relaxed text-white/68">
                Без навязывания. Сначала уточним задачу и дадим ориентир по
                стоимости.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {messengers.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    data-goal={item.goal}
                    onClick={() => trackGoal(item.goal)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-[12px] border transition-colors hover:bg-white/10"
                    style={{
                      borderColor: "rgba(198,154,102,0.42)",
                      color: "#F7F5F1",
                    }}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      aria-hidden="true"
                      className="h-6 w-6 shrink-0"
                    />
                  </a>
                ))}
              </div>
            </div>

            <form onSubmit={submitLead} className="grid gap-4 p-6 md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Ваше имя"
                  className="h-14 rounded-[14px] px-4 text-[16px] font-bold outline-none transition-colors focus:border-[#AE7B43]"
                  style={{
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                    background: COLORS.warmBg,
                  }}
                />
                <input
                  value={phone}
                  onFocus={() => !phone && setPhone("+7")}
                  onChange={(event) =>
                    setPhone(formatRuPhone(event.target.value))
                  }
                  placeholder="+7 (9XX) XXX-XX-XX"
                  inputMode="tel"
                  className="h-14 rounded-[14px] px-4 text-[16px] font-bold outline-none transition-colors focus:border-[#AE7B43]"
                  style={{
                    border: `1px solid ${error ? COLORS.bronze : COLORS.border}`,
                    color: COLORS.text,
                    background: COLORS.warmBg,
                  }}
                />
              </div>

              {error && (
                <div
                  className="-mt-2 text-[12px] font-bold"
                  style={{ color: COLORS.bronze }}
                >
                  {error}
                </div>
              )}

              <select
                value={type}
                onChange={(event) => setType(event.target.value)}
                className="h-14 rounded-[14px] px-4 text-[16px] font-bold outline-none transition-colors focus:border-[#AE7B43]"
                style={{
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.text2,
                  background: COLORS.warmBg,
                }}
              >
                {TYPES.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>

              <textarea
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Комментарий: размер, материал, адрес"
                rows={4}
                className="w-full resize-none rounded-[14px] px-4 py-3 text-[16px] font-bold outline-none transition-colors focus:border-[#AE7B43]"
                style={{
                  border: `1px solid ${COLORS.border}`,
                  color: COLORS.text,
                  background: COLORS.warmBg,
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
                className="h-15 rounded-[16px] text-[17px] font-black uppercase tracking-[0.02em] transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  background:
                    "linear-gradient(135deg, #AE7B43 0%, #8E5B2F 100%)",
                  color: COLORS.white,
                  boxShadow: "0 14px 32px rgba(142,91,47,0.28)",
                }}
              >
                Получить расчет
              </button>

              <p
                className="text-center text-[12px] font-bold leading-relaxed"
                style={{ color: COLORS.text3 }}
              >
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>

              <div
                className={`overflow-hidden rounded-[18px] transition-all duration-500 ${
                  sent ? "max-h-44 opacity-100" : "max-h-0 opacity-0"
                }`}
                style={{
                  background: "#ECF7EE",
                  border: sent ? "1px solid rgba(78,166,90,0.22)" : "0",
                }}
              >
                <div className="flex items-start gap-4 p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#4EA65A]">
                    <Check size={24} color={COLORS.white} strokeWidth={2.4} />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-black text-[#071017]">
                      Заявка отправлена
                    </h4>
                    <p
                      className="mt-1 text-[14px] font-bold leading-relaxed"
                      style={{ color: COLORS.text2 }}
                    >
                      Мы свяжемся с вами для уточнения деталей.
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </aside>
        </div>
      </div>
    </section>
  );
}

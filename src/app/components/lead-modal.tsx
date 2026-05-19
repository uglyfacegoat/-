import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { X, Check } from "lucide-react";
import { trackGoal } from "../utils/analytics";
import { formatRuPhone, isValidRuPhone } from "../utils/phone";

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  defaultType?: string;
};

const TYPES = [
  "для 1 авто",
  "для 2 авто",
  "для 3–4 авто",
  "к дому",
  "над террасой",
  "над входом",
  "другое",
];

export function LeadModal({
  open,
  onClose,
  title,
  subtitle,
  defaultType,
}: Props) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState(defaultType || TYPES[1]);
  const [comment, setComment] = useState("");
  const [trap, setTrap] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (open) {
      setSent(false);
      setError("");
    }
  }, [open]);

  useEffect(() => {
    if (defaultType) setType(defaultType);
  }, [defaultType]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const submit = (e: FormEvent) => {
    e.preventDefault();
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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
      style={{ background: "rgba(31,36,41,0.55)" }}
      onClick={onClose}
    >
      <div
        className="animate-in zoom-in-95 relative w-full max-w-[500px] overflow-hidden rounded-[24px] bg-white p-6 shadow-2xl duration-200 md:p-8"
        style={{
          background: "#FFFFFF",
          boxShadow: "0 32px 90px rgba(31,36,41,0.22)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="absolute left-0 right-0 top-0 h-1"
          style={{
            background:
              "linear-gradient(90deg, #AE7B43, rgba(174,123,67,0.12))",
          }}
        />
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#F4F0EA]"
          aria-label="Закрыть"
        >
          <X size={18} color="#5F666D" />
        </button>

        {sent ? (
          <div className="py-8 text-center">
            <div
              className="w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-5"
              style={{ background: "#F4F0EA" }}
            >
              <Check size={28} color="#AE7B43" />
            </div>
            <h3 style={{ color: "#23282C", fontWeight: 700, marginBottom: 8 }}>
              Заявка отправлена
            </h3>
            <p style={{ color: "#5F666D" }}>
              Мы свяжемся с вами для уточнения деталей.
            </p>
            <button
              onClick={onClose}
              className="mt-6 h-12 px-6 rounded-[14px] transition-colors"
              style={{ background: "#2F3438", color: "#F7F5F1" }}
            >
              Хорошо
            </button>
          </div>
        ) : (
          <>
            <h3
              style={{
                color: "#1F2429",
                fontWeight: 700,
                letterSpacing: "-0.01em",
              }}
            >
              {title || "Рассчитать стоимость навеса"}
            </h3>
            <p className="mt-2 mb-6" style={{ color: "#5F666D" }}>
              {subtitle ||
                "Оставьте телефон и коротко опишите задачу. Мы уточним размеры и дадим ориентир по стоимости."}
            </p>

            <form onSubmit={submit} className="space-y-3.5">
              <div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Имя"
                  className="w-full h-[52px] px-4 rounded-[14px] outline-none transition-colors"
                  style={{
                    background: "#F7F5F1",
                    border: "1px solid #D9D4CC",
                    color: "#23282C",
                  }}
                />
              </div>
              <div>
                <input
                  value={phone}
                  onFocus={() => !phone && setPhone("+7")}
                  onChange={(e) => setPhone(formatRuPhone(e.target.value))}
                  placeholder="+7 (999) 999-99-99"
                  inputMode="tel"
                  className="w-full h-[52px] px-4 rounded-[14px] outline-none transition-colors"
                  style={{
                    background: "#F7F5F1",
                    border: `1px solid ${error ? "#AE7B43" : "#D9D4CC"}`,
                    color: "#23282C",
                  }}
                />
                {error && (
                  <div
                    className="mt-1.5 px-1"
                    style={{ color: "#AE7B43", fontSize: 13 }}
                  >
                    {error}
                  </div>
                )}
              </div>
              <div>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full h-[52px] px-4 rounded-[14px] outline-none appearance-none transition-colors"
                  style={{
                    background:
                      "#F7F5F1 url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%235F666D' stroke-width='2'><polyline points='6 9 12 15 18 9'/></svg>\") no-repeat right 16px center",
                    border: "1px solid #D9D4CC",
                    color: "#23282C",
                  }}
                >
                  {TYPES.map((t) => (
                    <option key={t} value={t}>
                      Тип навеса: {t}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Комментарий (размеры, адрес, фото места)"
                  rows={3}
                  className="w-full px-4 py-3 rounded-[14px] outline-none resize-none transition-colors"
                  style={{
                    background: "#F7F5F1",
                    border: "1px solid #D9D4CC",
                    color: "#23282C",
                  }}
                />
              </div>
              <input
                value={trap}
                onChange={(e) => setTrap(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <button
                type="submit"
                className="w-full h-[54px] rounded-[14px] transition-colors hover:opacity-95"
                style={{
                  background: "#AE7B43",
                  color: "#FFFFFF",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#946737")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#AE7B43")
                }
              >
                Получить расчет
              </button>

              <p style={{ color: "#8A9096", fontSize: 12, lineHeight: 1.5 }}>
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и
                обработкой персональных данных.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

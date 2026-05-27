type GoalName =
  | "cta_click"
  | "lead_submit"
  | "phone_click"
  | "whatsapp_click"
  | "telegram_click"
  | "max_click";

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackGoal(goal: GoalName) {
  window.dataLayer?.push({ event: goal });

  if (typeof window.ym !== "function") return;

  try {
    window.ym("reachGoal", goal);
  } catch {
    window.ym(0, "reachGoal", goal);
  }
}

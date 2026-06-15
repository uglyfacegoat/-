type LeadEmailPayload = {
  name: string;
  phone: string;
  type: string;
  comment: string;
};

type LeadEmailConfig = {
  serviceId: string;
  templateId: string;
  publicKey: string;
  toEmail: string;
};

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

function readEnvValue(value: string | undefined) {
  return typeof value === "string" ? value.trim() : "";
}

export function getLeadEmailConfig(): LeadEmailConfig | null {
  const serviceId = readEnvValue(import.meta.env.VITE_EMAILJS_SERVICE_ID);
  const templateId = readEnvValue(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
  const publicKey = readEnvValue(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  const toEmail = readEnvValue(import.meta.env.VITE_LEAD_TO_EMAIL);

  if (!serviceId || !templateId || !publicKey || !toEmail) {
    return null;
  }

  return {
    serviceId,
    templateId,
    publicKey,
    toEmail,
  };
}

export function isLeadEmailConfigReady() {
  return getLeadEmailConfig() !== null;
}

export async function sendLeadRequest(payload: LeadEmailPayload) {
  const config = getLeadEmailConfig();

  if (!config) {
    throw new Error("Lead email config is missing");
  }

  const response = await fetch(EMAILJS_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      service_id: config.serviceId,
      template_id: config.templateId,
      user_id: config.publicKey,
      template_params: {
        to_email: config.toEmail,
        from_name: payload.name || "Без имени",
        phone: payload.phone,
        request_type: payload.type,
        comment: payload.comment || "Без комментария",
        page_url: typeof window !== "undefined" ? window.location.href : "",
      },
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Failed to send lead request");
  }
}

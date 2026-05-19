export function formatRuPhone(raw: string) {
  const digits = raw.replace(/\D/g, "");
  let body = "";

  if (!digits) return "";
  if (digits[0] === "7" || digits[0] === "8") {
    body = digits.slice(1);
  } else if (digits[0] === "9") {
    body = digits;
  } else {
    return "+7";
  }

  if (body.length > 0 && body[0] !== "9") return "+7";
  body = body.slice(0, 10);

  let out = "+7";
  if (body.length > 0) out += " (" + body.slice(0, 3);
  if (body.length >= 3) out += ") " + body.slice(3, 6);
  if (body.length >= 6) out += "-" + body.slice(6, 8);
  if (body.length >= 8) out += "-" + body.slice(8, 10);
  return out;
}

export function isValidRuPhone(value: string) {
  return /^7?9\d{9}$/.test(value.replace(/\D/g, "").replace(/^8/, "7"));
}

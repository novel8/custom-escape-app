// Replace these placeholders with your real handles.
export const CONTACT = {
  instagramHandle: "novel.ethiopia",
  instagramUrl: "https://instagram.com/novel.ethiopia",
  email: "hello@novel-ethiopia.com",
  // E.164 without "+" for wa.me links
  whatsappNumber: "251900000000",
  whatsappDisplay: "+251 90 000 0000",
} as const;

export const waLink = (message = "Hello NOVEL, I'd like to plan an Ethiopian journey.") =>
  `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

export const mailLink = (subject = "Ethiopia inquiry", body = "") =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;

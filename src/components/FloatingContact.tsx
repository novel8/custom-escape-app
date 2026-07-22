import { useState } from "react";
import { MessageCircle, Mail, Instagram, Plus, X } from "lucide-react";
import { CONTACT, waLink, mailLink } from "@/lib/contact";

export function FloatingContact() {
  const [open, setOpen] = useState(false);

  const items = [
    {
      label: "WhatsApp",
      href: waLink(),
      icon: MessageCircle,
      external: true,
    },
    {
      label: "Email",
      href: mailLink(),
      icon: Mail,
      external: false,
    },
    {
      label: "Instagram",
      href: CONTACT.instagramUrl,
      icon: Instagram,
      external: true,
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open &&
        items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            target={it.external ? "_blank" : undefined}
            rel={it.external ? "noopener noreferrer" : undefined}
            className="group flex items-center gap-3 bg-background/95 backdrop-blur-xl border border-border pl-4 pr-3 py-2 ring-1 ring-white/5 hover:border-accent transition-colors"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground group-hover:text-accent">
              {it.label}
            </span>
            <it.icon className="w-4 h-4 text-accent" />
          </a>
        ))}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="w-12 h-12 rounded-full bg-accent text-background flex items-center justify-center shadow-lg shadow-black/40 hover:scale-105 active:scale-95 transition-transform"
      >
        {open ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/hotels", label: "Hotels" },
  { to: "/destinations", label: "Destinations" },
  { to: "/tour-guides", label: "Tour Guides" },
  { to: "/cars", label: "Cars" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border">
      <div className="max-w-md mx-auto px-5 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="font-display text-lg font-bold tracking-tighter uppercase italic"
          onClick={() => setOpen(false)}
        >
          Novel
        </Link>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex gap-3 items-center"
        >
          <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
            {open ? "Close" : "Index"}
          </span>
          {open ? (
            <X className="w-4 h-4 text-accent" />
          ) : (
            <Menu className="w-4 h-4 text-accent" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl">
          <ul className="max-w-md mx-auto px-6 py-6 space-y-4">
            {navItems.map((item, i) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="group flex items-baseline justify-between border-b border-border pb-3"
                  activeProps={{ className: "text-accent" }}
                >
                  <span className="font-display text-2xl italic tracking-tight">
                    {item.label}
                  </span>
                  <span className="font-mono text-[9px] text-accent/60 uppercase tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

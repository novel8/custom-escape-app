import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
// Real photographs of Ethiopian attractions (Wikimedia Commons, CC-licensed)
const heroImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Simien_Mountains_02.jpg/1200px-Simien_Mountains_02.jpg";
const lalibelaImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Bete_Giyorgis_03.jpg/1200px-Bete_Giyorgis_03.jpg";
const danakilImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Dallol_hot_springs_ETH.JPG/1200px-Dallol_hot_springs_ETH.JPG";
const axumImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Northern_stelae_park_pre-excavation.jpg/1200px-Northern_stelae_park_pre-excavation.jpg";
const gonderImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Fasilides_Castle_02.jpg/1200px-Fasilides_Castle_02.jpg";
const omoImg =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Hamer_Tribe%2C_Ethiopia_%2817342987206%29.jpg/1200px-Hamer_Tribe%2C_Ethiopia_%2817342987206%29.jpg";
import { SiteNav } from "@/components/SiteNav";
import { CONTACT, waLink, mailLink } from "@/lib/contact";
import { inquiriesClient } from "@/lib/inquiries-client";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NOVEL — Bespoke Ethiopia Travel & Tour Agency" },
      {
        name: "description",
        content:
          "NOVEL curates personalized journeys across Ethiopia — Lalibela, Simien Mountains, Danakil, Omo Valley, and Addis. Private stays, expert guides, seamless logistics.",
      },
      { property: "og:title", content: "NOVEL — Ethiopia, curated." },
      {
        property: "og:description",
        content:
          "Personalized Ethiopian itineraries for the culturally curious. Rock-hewn churches, highland treks, ancient kingdoms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const chapters = [
  {
    id: "lalibela",
    title: "The Rock-Hewn Silence",
    location: "Lalibela, ET",
    meta: "08 Days — Sacred Highlands",
    price: "$3.6K",
    image: lalibelaImg,
  },
  {
    id: "axum",
    title: "The Stelae of Axum",
    location: "Axum, ET",
    meta: "05 Days — Ancient Kingdom",
    price: "$3.2K",
    image: axumImg,
  },
  {
    id: "danakil",
    title: "The Salt & Sulphur Chapter",
    location: "Danakil, ET",
    meta: "06 Days — Afar Expedition",
    price: "$4.1K",
    image: danakilImg,
  },
];

const philosophy = [
  {
    n: "01",
    title: "Radical Tailoring",
    body: "No two travelers share the same curiosity. We build each Ethiopian journey from a blank page.",
  },
  {
    n: "02",
    title: "Hidden Access",
    body: "Private monastery mornings, Afar caravans, and coffee ceremonies in homes beyond the guidebooks.",
  },
  {
    n: "03",
    title: "Zero Friction",
    body: "Flights via Addis, 4x4 transit, permits, and armed escorts where required — resolved before you land.",
  },
];

const services = [
  { label: "Lodging", copy: "Highland lodges & Addis boutique hotels." },
  { label: "Transit", copy: "4x4 fleets, domestic flights, private drivers." },
  { label: "Flights", copy: "Ethiopian Airlines routing & business-class." },
  { label: "Tours", copy: "Historic route, tribal south, Simien treks." },
];

function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [destination, setDestination] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!destination || !email || submitting) return;
    setSubmitting(true);
    const { error } = await inquiriesClient
      .from("inquiries")
      .insert({ email, message: destination });
    setSubmitting(false);
    if (error) {
      toast.error("Could not send your inquiry. Please try again.");
      return;
    }
    toast.success("Inquiry received. We'll be in touch within 24 hours.");
    setSubmitted(true);
    setDestination("");
    setEmail("");
  };


  return (
    <div className="min-h-screen bg-background text-foreground font-body selection:bg-accent/30">
      <SiteNav />

      <div className="max-w-md mx-auto">
        {/* Hero */}
        <header className="px-6 pt-10 pb-12">
          <div className="animate-reveal">
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-accent/80 mb-5 block">
              Issue 04 — Highlands & Rift
            </span>
            <h1 className="font-display text-5xl leading-[1.05] text-balance mb-6 italic font-medium tracking-tight">
              Ethiopia, read slowly.
            </h1>
            <p className="text-muted-foreground max-w-[32ch] text-sm leading-relaxed mb-8">
              NOVEL curates Ethiopian journeys that read like stories.
              Rock-hewn churches, thirteen-month calendars, coffee at its
              source, and the oldest highlands on the continent.
            </p>
            <img
              src={heroImg}
              alt="Simien Mountains, Ethiopia, at twilight"
              width={1200}
              height={1500}
              className="w-full aspect-[4/5] object-cover ring-1 ring-white/5 mb-8"
            />
            <a
              href="#inquire"
              className="block w-full py-4 text-center border border-accent/20 text-[10px] font-medium uppercase tracking-[0.2em] bg-accent text-background transition-all hover:bg-accent/90 active:scale-[0.98]"
            >
              Inquire Now
            </a>
          </div>
        </header>

        {/* Chapters */}
        <section className="px-6 space-y-14" aria-label="Featured tour packages">
          <div
            className="flex justify-between items-end border-b border-border pb-3 animate-reveal"
            style={{ animationDelay: "100ms" }}
          >
            <h2 className="font-display text-xl italic">Active Chapters</h2>
            <span className="font-mono text-[10px] text-accent">
              {String(chapters.length).padStart(2, "0")} / 09
            </span>
          </div>

          {chapters.map((c, i) => (
            <article
              key={c.id}
              className="group animate-reveal"
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              <img
                src={c.image}
                alt={`${c.title} — ${c.location}`}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full aspect-[4/5] object-cover mb-5 ring-1 ring-white/5"
              />
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="font-display text-lg tracking-wide">
                    {c.title}
                  </h3>
                  <span className="font-mono text-[9px] text-muted-foreground uppercase tracking-wider">
                    {c.meta}
                  </span>
                </div>
                <span className="font-mono text-[10px] text-accent font-medium pt-1">
                  {c.price}
                </span>
              </div>
            </article>
          ))}
        </section>

        {/* Philosophy */}
        <section className="mx-6 py-16 px-6 bg-blue-950/20 mt-20 ring-1 ring-white/5">
          <div className="animate-reveal">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-accent mb-8 block">
              The Ethos
            </span>
            <div className="space-y-10">
              {philosophy.map((p) => (
                <div key={p.n} className="flex gap-5">
                  <span className="font-mono text-[10px] text-accent/50 shrink-0">
                    {p.n}
                  </span>
                  <div>
                    <h4 className="font-medium mb-2 uppercase text-[10px] tracking-[0.15em]">
                      {p.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-20">
          <h2 className="font-display text-xl italic mb-10 animate-reveal">
            The Service Ledger
          </h2>
          <div className="grid grid-cols-2 gap-px bg-white/5 ring-1 ring-white/10 animate-reveal">
            {services.map((s) => (
              <div
                key={s.label}
                className="bg-background p-5 aspect-square flex flex-col justify-between"
              >
                <span className="font-mono text-[8px] uppercase tracking-[0.3em] text-accent">
                  {s.label}
                </span>
                <p className="text-[10px] leading-relaxed text-muted-foreground">
                  {s.copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Booking */}
        <section id="inquire" className="mx-4 p-8 bg-accent text-background mb-12">
          <div className="animate-reveal">
            <h2 className="font-display text-3xl italic mb-4 leading-tight">
              Begin your Ethiopia.
            </h2>
            <p className="text-background/70 text-xs mb-10 leading-relaxed">
              Tell us which region calls you — the historic north, the tribal
              south, or the volcanic east. We respond within 24 hours.
            </p>
            {submitted ? (
              <div className="py-8 text-center">
                <p className="font-display text-2xl italic mb-2">Received.</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-background/70">
                  We will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-background/20 pb-2">
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="REGION OR ROUTE"
                    className="bg-transparent border-none outline-none font-mono text-[10px] w-full text-background placeholder:text-background/40 uppercase tracking-widest"
                  />
                </div>
                <div className="border-b border-background/20 pb-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="EMAIL ADDRESS"
                    className="bg-transparent border-none outline-none font-mono text-[10px] w-full text-background placeholder:text-background/40 uppercase tracking-widest"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 bg-background text-accent text-[10px] font-bold uppercase tracking-[0.2em] mt-6 ring-1 ring-background hover:bg-background/90 transition-colors disabled:opacity-60"
                >
                  {submitting ? "Sending…" : "Submit Inquiry"}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Field Journal — Instagram */}
        <section className="px-6 pb-20" aria-label="Instagram field journal">
          <div className="flex justify-between items-end border-b border-border pb-3 mb-6">
            <h2 className="font-display text-xl italic">Field Journal</h2>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] uppercase tracking-widest text-accent hover:underline"
            >
              @{CONTACT.instagramHandle} ↗
            </a>
          </div>
          <div className="grid grid-cols-3 gap-1">
            {[heroImg, lalibelaImg, axumImg, danakilImg, gonderImg, omoImg].map((src, i) => (
              <a
                key={i}
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block aspect-square overflow-hidden ring-1 ring-white/5 group"
              >
                <img src={src} alt="Ethiopia field note" loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors flex items-center justify-center">
                  <Instagram className="w-5 h-5 text-background opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 border-t border-border">
          <div className="px-6 text-center">
            <span className="font-display text-2xl uppercase tracking-tighter opacity-10 block mb-8">
              Novel
            </span>
            <div className="flex justify-center gap-6 mb-6">
              <a href={CONTACT.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={mailLink()} aria-label="Email" className="text-muted-foreground hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
              </a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-accent transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <div className="flex flex-col gap-2 font-mono text-[9px] text-muted-foreground uppercase tracking-[0.2em]">
              <a href={mailLink()} className="hover:text-accent transition-colors">{CONTACT.email}</a>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">WhatsApp {CONTACT.whatsappDisplay}</a>
              <span className="text-muted-foreground/60">Addis Ababa · Ethiopia</span>
            </div>
            <p className="mt-10 font-mono text-[8px] text-muted-foreground/60 uppercase tracking-[0.1em]">
              ©2026 Novel Ethiopia. Built for the Highlands.
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}

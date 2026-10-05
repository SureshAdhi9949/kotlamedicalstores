import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Accessibility,
  Bandage,
  Baby,
  Cross,
  HeartPulse,
  HousePlus,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  PackagePlus,
  Phone,
  Pill,
  ShieldPlus,
  Sparkles,
  Stethoscope,
  Tablets,
  X,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { businessData } from "@/data/businessData";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kotla Medicals | Trusted Medical Store in Kovvur" },
      {
        name: "description",
        content:
          "Kotla Medicals in Kovvur offers medicines, healthcare essentials, wellness, personal care and medical devices on Main Road, opposite Lakshmi Cafe.",
      },
      { property: "og:title", content: "Kotla Medicals | Trusted Healthcare Partner" },
      {
        property: "og:description",
        content: "Your trusted local medical store in Kovvur for everyday healthcare needs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: businessData.websiteHref }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Pharmacy",
          name: businessData.legalName,
          description: businessData.description,
          telephone: businessData.phonePrimary,
          email: businessData.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: businessData.address.street,
            addressLocality: businessData.address.locality,
            addressRegion: businessData.address.region,
            postalCode: businessData.address.postalCode,
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

const navItems = ["Home", "About", "Services", "Products", "Why us", "Contact"];

const categoryIcons = [
  Pill,
  Bandage,
  HousePlus,
  Accessibility,
  Baby,
  Sparkles,
  Tablets,
  Stethoscope,
] as const;
const serviceIcons = [PackagePlus, ShieldPlus, Sparkles] as const;
const categoryCardStyles = [
  "from-blue-500/20 via-cyan-400/10 to-background",
  "from-rose-500/20 via-orange-300/10 to-background",
  "from-teal-500/20 via-emerald-300/10 to-background",
  "from-violet-500/20 via-indigo-300/10 to-background",
  "from-pink-500/20 via-rose-300/10 to-background",
  "from-fuchsia-500/20 via-pink-300/10 to-background",
  "from-amber-500/20 via-yellow-300/10 to-background",
  "from-sky-500/20 via-blue-300/10 to-background",
] as const;

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-glass-border bg-glass px-3 py-2 shadow-float backdrop-blur-2xl sm:px-5"
        >
          <a href="#home" className="flex items-center gap-2" aria-label="Kotla Medicals home">
            <span className="grid size-10 place-items-center rounded-full brand-gradient text-primary-foreground shadow-[var(--shadow-action)]">
              <Cross className="size-5" strokeWidth={3} />
            </span>
            <span className="font-display text-base font-bold sm:text-lg">Kotla Medicals</span>
          </a>
          <div className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button asChild size="compact" className="hidden sm:inline-flex">
              <a href={businessData.phoneHref}>
                <Phone className="size-4 transition-transform group-hover:rotate-12" /> Call now
              </a>
            </Button>
            <Button
              type="button"
              variant="glass"
              size="icon"
              className="lg:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </nav>
        {menuOpen && (
          <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-glass-border bg-glass-strong p-4 shadow-float backdrop-blur-2xl lg:hidden">
            <div className="grid gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="rounded-2xl px-4 py-3 font-display text-lg font-semibold hover:bg-muted"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <section id="home" className="relative flex min-h-[94svh] items-center overflow-hidden pb-20 pt-28 sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,color-mix(in_oklab,var(--cyan)_24%,transparent),transparent_28%),radial-gradient(circle_at_86%_20%,color-mix(in_oklab,var(--violet)_18%,transparent),transparent_26%),radial-gradient(circle_at_75%_82%,color-mix(in_oklab,var(--mint)_25%,transparent),transparent_30%)]" />
        <MedicalBackdrop />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.95fr_1.05fr] lg:gap-20">
          <div className="hero-enter-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan/35 bg-glass px-4 py-2 text-xs font-semibold uppercase text-primary backdrop-blur-xl">
              <span className="size-2 rounded-full bg-mint shadow-[0_0_18px_var(--mint)]" />
              Your health, our priority
            </div>
            <h1 className="mt-7 max-w-[10ch] text-5xl font-bold leading-[.98] sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
              Healthcare you can <span className="text-gradient">trust.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              {businessData.description} Visit us on Main Road, opposite Lakshmi Cafe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href={businessData.phoneHref}>
                  <Phone className="size-4 transition-transform group-hover:rotate-12" /> Call now
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="glass">
                <a href={businessData.directions} target="_blank" rel="noreferrer">
                  <MapPin className="size-4" /> Get directions
                </a>
              </Button>
              <Button asChild variant="glass">
                <a href={businessData.websiteHref} target="_blank" rel="noopener noreferrer">
                  <ArrowUpRight className="size-4" /> Visit website
                </a>
              </Button>
            </div>
          </div>

          <div className="hero-enter-right relative mx-auto w-full max-w-[690px]">
            <div className="absolute -inset-5 rounded-[3rem] vivid-gradient opacity-25 blur-3xl" />
            <div className="relative ml-auto w-[88%] overflow-hidden rounded-[2.5rem_1rem_2.5rem_1rem] border-4 border-glass-border bg-glass p-2 shadow-float backdrop-blur-xl sm:w-[86%]">
              <img
                src={businessData.images.storefront}
                alt="Kotla Medical Store storefront on Main Road in Kovvur"
                className="aspect-[4/3] w-full rounded-[2rem_.65rem_2rem_.65rem] object-cover"
                fetchPriority="high"
              />
            </div>
            <div className="absolute -left-1 top-10 animate-float-soft rounded-2xl border border-glass-border bg-glass-strong p-4 shadow-float backdrop-blur-xl sm:-left-5">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-mint/25 text-foreground"><ShieldPlus className="size-5" /></span>
                <span className="font-display text-sm font-semibold">Healthcare essentials</span>
              </div>
            </div>
            <div className="absolute -bottom-8 right-0 animate-float-soft rounded-2xl border border-glass-border bg-glass-strong p-4 shadow-float backdrop-blur-xl [animation-delay:1.2s] sm:right-8">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl bg-violet/20 text-violet"><MapPin className="size-5" /></span>
                <span><strong className="block font-display text-sm">Kovvur</strong><small className="text-muted-foreground">Main Road</small></span>
              </div>
            </div>
            <div className="absolute -right-3 top-1/3 grid size-14 animate-drift-soft place-items-center rounded-2xl brand-gradient text-primary-foreground shadow-[var(--shadow-action)]">
              <Cross className="size-7" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Store highlights" className="relative z-10 -mt-5 px-4">
        <div className="mx-auto grid max-w-6xl gap-3 rounded-3xl border border-glass-border bg-glass-strong p-3 shadow-float backdrop-blur-2xl sm:grid-cols-2 lg:grid-cols-4">
          {[
            [PackagePlus, "Medicines", "Everyday needs"],
            [Stethoscope, "Local service", "In Kovvur"],
            [MapPin, "Convenient location", "Main Road"],
            [Phone, "Easy contact", businessData.phonePrimary],
          ].map(([Icon, title, detail], index) => {
            const HighlightIcon = Icon as typeof PackagePlus;
            return (
              <div key={String(title)} className="group flex items-center gap-3 rounded-2xl p-4 transition-transform hover:-translate-y-1 hover:bg-muted">
                <span className={`grid size-11 shrink-0 place-items-center rounded-xl ${index % 2 ? "bg-mint/20 text-foreground" : "bg-primary/10 text-primary"}`}>
                  <HighlightIcon className="size-5 transition-transform group-hover:scale-110" />
                </span>
                <span><strong className="block font-display text-sm">{title as string}</strong><small className="text-muted-foreground">{detail as string}</small></span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="about" className="relative py-24 sm:py-32">
        <div className="absolute inset-y-16 right-0 w-2/3 rounded-l-[5rem] bg-secondary/55" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[510px]">
            <img src={businessData.images.interior} alt="Inside Kotla Medicals with stocked medicine shelves" loading="lazy" className="absolute left-0 top-0 h-[78%] w-[78%] rounded-[1rem_4rem_1rem_4rem] object-cover shadow-float" />
            <img src={businessData.images.healthCamp} alt="Community health activity supported by Kotla Medicals" loading="lazy" className="absolute bottom-0 right-0 h-[46%] w-[55%] rounded-[3rem_1rem_3rem_1rem] border-8 border-background object-cover shadow-float" />
            <div className="absolute right-4 top-6 rounded-2xl border border-glass-border bg-glass-strong p-4 shadow-float backdrop-blur-xl">
              <HeartPulse className="size-6 text-pink" /><span className="mt-2 block font-display text-sm font-semibold">Care for the community</span>
            </div>
          </div>
          <div>
            <SectionKicker>About Kotla Medicals</SectionKicker>
            <h2 className="mt-4 max-w-[12ch] text-4xl font-bold leading-tight sm:text-5xl">Local care, thoughtfully within reach.</h2>
            <p className="mt-6 max-w-xl leading-7 text-muted-foreground">
              Located on Main Road in Kovvur, Kotla Medicals makes everyday healthcare shopping convenient for the local community.
            </p>
            <div className="mt-9 grid gap-5">
              {[
                ["01", "Our presence", "A local medical store serving customers in Kovvur, Andhra Pradesh."],
                ["02", "Our range", "Medicines, wellness, personal care, first aid and medical-device categories."],
                ["03", "Our commitment", "Convenient access to everyday healthcare products and direct assistance."],
              ].map(([number, title, copy]) => (
                <div key={number} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-border pt-5">
                  <span className="font-display text-xl font-bold text-primary">{number}</span>
                  <div><h3 className="text-lg font-semibold">{title}</h3><p className="mt-1 text-sm leading-6 text-muted-foreground">{copy}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative overflow-hidden bg-navy py-24 text-primary-foreground sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,color-mix(in_oklab,var(--violet)_35%,transparent),transparent_28%),radial-gradient(circle_at_85%_80%,color-mix(in_oklab,var(--cyan)_25%,transparent),transparent_32%)]" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionKicker dark>What we offer</SectionKicker>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <h2 className="max-w-[12ch] text-4xl font-bold leading-tight sm:text-5xl">Everyday healthcare, all in one place.</h2>
            <p className="max-w-md text-sm leading-6 text-primary-foreground/65">Explore the real healthcare categories available through Kotla Medicals.</p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {businessData.services.map((service, index) => {
              const ServiceIcon = serviceIcons[index] ?? PackagePlus;
              return (
                <article key={service.title} className="group min-h-72 overflow-hidden rounded-3xl border border-primary-foreground/15 bg-primary-foreground/8 p-7 backdrop-blur-lg transition-all duration-500 hover:-translate-y-2 hover:border-cyan/60 hover:bg-primary-foreground/12">
                  <div className={`grid size-13 place-items-center rounded-2xl ${service.accent === "mint" ? "bg-mint/20 text-mint" : service.accent === "violet" ? "bg-violet/25 text-pink" : "bg-cyan/20 text-cyan"}`}>
                    <ServiceIcon className="size-6 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
                  </div>
                  <h3 className="mt-12 text-2xl font-semibold">{service.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-6 text-primary-foreground/65">{service.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan">Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" /></span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="products" className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionKicker>Healthcare categories</SectionKicker>
          <h2 className="mt-4 max-w-[12ch] text-4xl font-bold sm:text-5xl">Made for daily life.</h2>
        </div>
        <div
          aria-label="Healthcare categories"
          className="category-scroller mx-auto mt-12 flex max-w-[1500px] snap-x gap-5 overflow-x-auto px-5 pb-5 sm:px-8"
        >
          {businessData.categories.map((category, index) => {
            const CategoryIcon = categoryIcons[index] ?? PackagePlus;
            return (
              <article key={category.name} className="group w-[78vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-card shadow-float transition-transform hover:-translate-y-2">
                <div className={`relative h-60 overflow-hidden bg-gradient-to-br ${categoryCardStyles[index] ?? "from-primary/20 to-background"}`}>
                  <img
                    src={category.image}
                    alt={category.imageAlt}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <span className="absolute right-4 top-4 grid size-11 place-items-center rounded-2xl border border-white/60 bg-white/75 text-primary shadow-sm backdrop-blur">
                    <CategoryIcon aria-hidden="true" className="size-5" />
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">Category {String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-2xl font-bold">{category.name}</h3>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="why-us" className="relative overflow-hidden bg-secondary/60 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <SectionKicker>Why Kotla Medicals</SectionKicker>
          <h2 className="mx-auto mt-4 max-w-[14ch] text-4xl font-bold sm:text-5xl">Healthcare with a human centre.</h2>
          <div className="relative mx-auto mt-14 grid max-w-5xl items-center gap-5 lg:grid-cols-[1fr_1.1fr_1fr]">
            <div className="grid gap-5">
              <FeatureCard icon={MapPin} title="Local presence" copy="Located in the heart of Kovvur on Main Road." />
              <FeatureCard icon={Phone} title="Direct contact" copy="Call or WhatsApp the store for an enquiry." />
            </div>
            <div className="relative mx-auto grid aspect-square w-full max-w-sm place-items-center rounded-full border border-cyan/30 bg-glass-strong shadow-float">
              <span className="absolute inset-8 animate-[pulse-ring_3s_ease-out_infinite] rounded-full border border-primary/45" />
              <div className="grid size-36 place-items-center rounded-[2.5rem] brand-gradient text-primary-foreground shadow-[var(--shadow-action-hover)]"><HeartPulse className="size-16" /></div>
            </div>
            <div className="grid gap-5">
              <FeatureCard icon={PackagePlus} title="Broad categories" copy="From medicines to wellness and medical devices." />
              <FeatureCard icon={ShieldPlus} title="Everyday essentials" copy="Healthcare and personal care for the whole family." />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 dark-gradient text-primary-foreground sm:py-32">
        <MedicalBackdrop dark />
        <div className="relative mx-auto max-w-6xl px-5 text-center sm:px-8">
          <p className="text-xs font-semibold uppercase text-mint">Trusted healthcare partner</p>
          <h2 className="mx-auto mt-4 max-w-[17ch] text-4xl font-bold sm:text-6xl">Healthcare. Care. Trust.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/65">A local medical store for medicines, wellness and everyday medical essentials in Kovvur.</p>
          <svg viewBox="0 0 700 100" className="mx-auto mt-10 w-full max-w-3xl" fill="none" aria-hidden="true">
            <path d="M0 52H210l18-25 25 58 27-73 32 66 24-26h364" stroke="var(--cyan)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="[stroke-dasharray:1000] [stroke-dashoffset:1000] animate-[dash-heart_3s_ease-out_infinite]" />
          </svg>
        </div>
      </section>

      <section id="contact" className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2.5rem] bg-navy p-7 text-primary-foreground shadow-float sm:p-10">
            <SectionKicker dark>Visit us</SectionKicker>
            <h2 className="mt-4 text-4xl font-bold">Kotla Medicals</h2>
            <div className="mt-8 grid gap-6">
              <ContactRow icon={MapPin} label="Address" value={businessData.address.formatted} />
              <ContactRow icon={Phone} label="Phone" value={`${businessData.phonePrimary} / ${businessData.phoneSecondary}`} />
              <ContactRow icon={Mail} label="Email" value={businessData.email} />
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild><a href={businessData.phoneHref}><Phone className="size-4" /> Call now</a></Button>
              <Button asChild variant="glass"><a href={businessData.directions} target="_blank" rel="noreferrer"><MapPin className="size-4" /> Directions</a></Button>
            </div>
          </div>
          <div className="relative min-h-[460px] overflow-hidden rounded-[2.5rem] border border-border shadow-float">
            <iframe title="Map showing Kotla Medical Store in Kovvur" src={businessData.mapEmbed} className="absolute inset-0 h-full w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="pointer-events-none absolute left-5 top-5 rounded-2xl border border-glass-border bg-glass-strong px-4 py-3 shadow-float backdrop-blur-xl">
              <span className="flex items-center gap-2 font-display text-sm font-semibold"><span className="relative grid size-8 place-items-center rounded-full bg-pink text-primary-foreground"><span className="absolute inset-0 animate-[pulse-ring_2s_ease-out_infinite] rounded-full bg-pink" /><MapPin className="relative size-4" /></span> Main Road, Kovvur</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div><a href="#home" className="font-display text-xl font-bold">Kotla Medicals</a><p className="mt-2 text-sm text-muted-foreground">{businessData.tagline}</p></div>
          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground"><a href={businessData.phoneHref}>Call</a><a href={businessData.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href={businessData.emailHref}>Email</a><a href={businessData.directions} target="_blank" rel="noreferrer">Directions</a></div>
          <p className="text-xs text-muted-foreground">© 2026 {businessData.legalName}</p>
        </div>
      </footer>

      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 sm:bottom-6 sm:right-6">
        <FloatingAction href={businessData.whatsapp} label="WhatsApp" icon={MessageCircle} external />
        <FloatingAction href={businessData.directions} label="Directions" icon={MapPin} external />
        <FloatingAction href={businessData.phoneHref} label="Call" icon={Phone} />
      </div>
    </main>
  );
}

function SectionKicker({ children, dark = false }: { children: string; dark?: boolean }) {
  return <p className={`text-xs font-semibold uppercase ${dark ? "text-mint" : "text-primary"}`}>{children}</p>;
}

function FeatureCard({ icon: Icon, title, copy }: { icon: typeof MapPin; title: string; copy: string }) {
  return <article className="rounded-2xl border border-glass-border bg-glass-strong p-5 text-left shadow-float backdrop-blur-xl transition-transform hover:-translate-y-1"><Icon className="size-6 text-primary" /><h3 className="mt-4 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></article>;
}

function ContactRow({ icon: Icon, label, value }: { icon: typeof MapPin; label: string; value: string }) {
  return <div className="flex gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary-foreground/10 text-cyan"><Icon className="size-5" /></span><div><span className="text-xs uppercase text-primary-foreground/45">{label}</span><p className="mt-1 max-w-md text-sm leading-6 text-primary-foreground/80">{value}</p></div></div>;
}

function FloatingAction({ href, label, icon: Icon, external = false }: { href: string; label: string; icon: typeof Phone; external?: boolean }) {
  return <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} aria-label={label} className="group flex h-12 items-center justify-end gap-2 overflow-hidden rounded-full brand-gradient px-3 text-primary-foreground shadow-[var(--shadow-action)] transition-all hover:pr-4"><span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold opacity-0 transition-all group-hover:max-w-24 group-hover:opacity-100">{label}</span><Icon className="size-5 shrink-0" /></a>;
}

function MedicalBackdrop({ dark = false }: { dark?: boolean }) {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true"><Cross className={`absolute left-[7%] top-[18%] size-10 animate-drift-soft ${dark ? "text-cyan/15" : "text-primary/10"}`} /><PackagePlus className={`absolute right-[12%] top-[22%] size-8 animate-float-soft ${dark ? "text-mint/15" : "text-violet/10"}`} /><HeartPulse className={`absolute bottom-[16%] left-[16%] size-12 animate-float-soft [animation-delay:1.4s] ${dark ? "text-pink/15" : "text-pink/10"}`} /><span className={`absolute bottom-[20%] right-[8%] size-4 animate-drift-soft rounded-full ${dark ? "bg-cyan/15" : "bg-cyan/20"}`} /></div>;
}
// @ts-nocheck
"use client";

import { Trade_Winds, Outfit, Roboto_Mono } from "next/font/google";
import content from "../data/content.json";

const display = Trade_Winds({ subsets: ["latin"], weight: ["400"] });
const body = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });
const mono = Roboto_Mono({ subsets: ["latin"], weight: ["400", "500", "700"] });

const TANK = "#3F4734";
const RUST = "#9A3412";
const CREAM = "#FEFBF5";
const KHAKI = "#A8A29E";
const INK = "#1C1917";
const PAPER = "#F8F4EB";

export default function Page() {
  const phoneTel = "tel:" + content.contact.phone.replace(/[^0-9]/g, "");
  const mapUrl = "https://maps.google.com/maps?output=embed&q=" + encodeURIComponent(content.contact.mapEmbedQuery);
  return (
    <main className={body.className} style={{ backgroundColor: PAPER, color: INK, minHeight: "100vh" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.9s cubic-bezier(.2,.7,.2,1) forwards; }
      `}</style>

      <div style={{ backgroundColor: TANK, color: CREAM }}>
        <div className={`${mono.className} max-w-7xl mx-auto px-6 py-2 flex flex-wrap items-center justify-between gap-2`} style={{ fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
          <span>// T &amp; G AUTO REPAIR · BURBANK</span>
          <span style={{ color: RUST }}>★ 4.9 / 18</span>
          <span>OPEN 6 DAYS · 7-7</span>
        </div>
      </div>

      <nav style={{ backgroundColor: PAPER, borderBottom: `2px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <p className={display.className} style={{ fontSize: "clamp(1.85rem, 3vw, 2.25rem)", color: INK, letterSpacing: "0.005em", lineHeight: 1 }}>T<span style={{ color: RUST }}>&amp;</span>G</p>
            <p className={mono.className} style={{ fontSize: 10, letterSpacing: "0.32em", color: TANK, textTransform: "uppercase", marginTop: 4, fontWeight: 700 }}>// AUTO REPAIR · BURBANK</p>
          </div>
          <div className="flex items-center gap-5">
            <a href="#shop" className={mono.className} style={{ display: "none", fontSize: 11, color: INK, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}><span className="hidden md:inline">// shop</span></a>
            <a href="#service" className={mono.className} style={{ fontSize: 11, color: INK, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}><span className="hidden md:inline">// service</span></a>
            <a href="#visit" className={mono.className} style={{ fontSize: 11, color: INK, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700 }}><span className="hidden md:inline">// visit</span></a>
            <a href={phoneTel} className={display.className} style={{ backgroundColor: RUST, color: CREAM, padding: "12px 22px", fontSize: 15, letterSpacing: "0.04em", border: `2px solid ${INK}` }}>Call</a>
          </div>
        </div>
      </nav>

      <section style={{ backgroundColor: PAPER, borderBottom: `2px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-7 fade-up">
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.36em", color: RUST, textTransform: "uppercase", marginBottom: 24, fontWeight: 700 }}>// W BURBANK BLVD · 4.9 × 18</p>
            <h1 className={display.className} style={{ fontSize: "clamp(2.75rem, 7vw, 5.5rem)", color: INK, lineHeight: 1.0, letterSpacing: "0.005em" }}>
              The honest auto shop <br /><span style={{ color: RUST }}>on Burbank Blvd.</span>
            </h1>
            <p className="mt-7 max-w-xl" style={{ fontSize: "1.075rem", lineHeight: 1.7, color: INK }}>{content.hero.subheading}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={content.hero.ctaLink} className={display.className} style={{ backgroundColor: TANK, color: CREAM, padding: "18px 30px", fontSize: 16, letterSpacing: "0.04em", border: `2px solid ${INK}` }}>{content.hero.ctaText}</a>
              <a href="#service" className={mono.className} style={{ color: INK, fontSize: 11, letterSpacing: "0.32em", fontWeight: 700, textTransform: "uppercase", borderBottom: `2px solid ${TANK}`, paddingBottom: 4 }}>// service list</a>
            </div>
          </div>
          <div className="md:col-span-5">
            <div style={{ aspectRatio: "4/5", backgroundImage: `url("${content.hero.image}")`, backgroundSize: "cover", backgroundPosition: "center", filter: "saturate(0.85)", border: `2px solid ${INK}`, boxShadow: `8px 8px 0 ${TANK}` }} />
          </div>
        </div>
      </section>

      <section id="shop" className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: RUST, textTransform: "uppercase", marginBottom: 12, fontWeight: 700 }}>// the shop</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", color: INK, lineHeight: 1.0, letterSpacing: "0.005em" }}>{content.about.heading}</h2>
          </div>
          <div className="md:col-span-8 space-y-6" style={{ fontSize: "1.075rem", lineHeight: 1.75, color: INK }}>
            {content.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </section>

      <section id="service" style={{ backgroundColor: TANK, color: CREAM, borderTop: `2px solid ${INK}`, borderBottom: `2px solid ${INK}` }}>
        <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <div className="mb-12 text-center">
            <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.36em", color: RUST, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>// the work</p>
            <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", color: CREAM, lineHeight: 1.0, letterSpacing: "0.005em" }}>What we do.</h2>
          </div>
          <ul>
            {content.services.map((s, i) => (
              <li key={i} className="grid grid-cols-12 gap-3 py-8" style={{ borderTop: i === 0 ? `2px solid ${RUST}` : `1px solid rgba(254,251,245,0.20)`, borderBottom: i === content.services.length - 1 ? `2px solid ${RUST}` : "none" }}>
                <div className="col-span-12 md:col-span-1"><p className={mono.className} style={{ fontSize: 13, letterSpacing: "0.28em", color: RUST, fontWeight: 700 }}>// {String(i + 1).padStart(2, "0")}</p></div>
                <div className="col-span-12 md:col-span-8">
                  <h3 className={display.className} style={{ fontSize: "1.45rem", color: CREAM, lineHeight: 1.15, letterSpacing: "0.005em" }}>{s.title}</h3>
                  <p className="mt-2" style={{ color: CREAM, opacity: 0.85, fontSize: "0.95rem", lineHeight: 1.65 }}>{s.description}</p>
                </div>
                <div className="col-span-12 md:col-span-3 md:text-right"><span className={display.className} style={{ fontSize: "1.45rem", color: CREAM, letterSpacing: "0.005em" }}>{s.price}</span></div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="mb-12">
          <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.36em", color: RUST, textTransform: "uppercase", fontWeight: 700, marginBottom: 12 }}>// regulars</p>
          <h2 className={display.className} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: INK, lineHeight: 1.0, letterSpacing: "0.005em" }}>From the lot.</h2>
        </div>
        <div className="space-y-6">
          {content.reviews.map((r, i) => (
            <div key={i} style={{ backgroundColor: CREAM, border: `2px solid ${INK}`, padding: "24px 26px" }}>
              <div className="flex items-center justify-between mb-3">
                <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.28em", color: TANK, textTransform: "uppercase", fontWeight: 700 }}>// {r.context.toUpperCase()}</p>
                <span style={{ color: RUST, letterSpacing: "0.12em" }}>{Array.from({ length: r.rating || 5 }).map((_, j) => <span key={j}>★</span>)}</span>
              </div>
              <p style={{ color: INK, fontSize: "1.05rem", lineHeight: 1.65 }}>"{r.text}"</p>
              <p className={display.className} style={{ marginTop: 14, fontSize: 17, color: INK, letterSpacing: "0.005em" }}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="visit" style={{ backgroundColor: RUST, color: CREAM, borderTop: `2px solid ${INK}`, borderBottom: `2px solid ${INK}` }}>
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.36em", color: CREAM, textTransform: "uppercase", fontWeight: 700, marginBottom: 12, opacity: 0.85 }}>// drop the keys</p>
              <h2 className={display.className} style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)", color: CREAM, lineHeight: 1.0, letterSpacing: "0.005em" }}>W Burbank Blvd.</h2>
              <div className="mt-8" style={{ backgroundColor: CREAM, color: INK, padding: "20px 22px", border: `2px solid ${INK}` }}>
                <p className={display.className} style={{ fontSize: 19, color: INK, letterSpacing: "0.005em", lineHeight: 1.25 }}>{content.contact.address.split(",")[0]}</p>
                <p className={mono.className} style={{ fontSize: 11, color: TANK, letterSpacing: "0.18em", marginTop: 4 }}>{content.contact.address.split(",").slice(1).join(",").trim()}</p>
              </div>
              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.36em", color: CREAM, textTransform: "uppercase", fontWeight: 700, marginTop: 28, marginBottom: 12, opacity: 0.85 }}>// hours</p>
              <table className={mono.className} style={{ width: "100%", fontSize: 13 }}>
                <tbody>
                  {Object.entries(content.contact.hours).map(([day, time]) => {
                    const closed = String(time).toLowerCase().includes("closed");
                    return (
                      <tr key={day} style={{ borderBottom: `1px solid rgba(254,251,245,0.30)` }}>
                        <td style={{ padding: "9px 0", color: CREAM, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em" }}>{day.slice(0, 3)}</td>
                        <td className="text-right" style={{ padding: "9px 0", color: closed ? CREAM : CREAM, opacity: closed ? 0.55 : 1, fontStyle: closed ? "italic" : "normal" }}>{String(time)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <a href={phoneTel} className={`${display.className} block mt-10`} style={{ fontSize: "clamp(2rem, 4vw, 2.75rem)", color: CREAM, letterSpacing: "0.005em", lineHeight: 1 }}>{content.contact.phone}</a>
            </div>
            <div className="md:col-span-7">
              <div style={{ border: `2px solid ${CREAM}`, minHeight: 460 }}>
                <iframe title="Location" width="100%" height="100%" loading="lazy" style={{ border: 0, minHeight: 458, display: "block", filter: "sepia(0.2) saturate(0.85)" }} referrerPolicy="no-referrer-when-downgrade" src={mapUrl} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: INK, color: CREAM }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-6 items-start mb-8">
            <div>
              <p className={display.className} style={{ fontSize: 26, color: CREAM, letterSpacing: "0.005em" }}>T<span style={{ color: RUST }}>&amp;</span>G</p>
              <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: RUST, textTransform: "uppercase", marginTop: 4, fontWeight: 700 }}>// AUTO REPAIR · BURBANK</p>
            </div>
            <div className={mono.className} style={{ fontSize: 12, color: CREAM, letterSpacing: "0.06em" }}>
              <p>{content.contact.address}</p>
              <p className="mt-1">{content.contact.phone}</p>
            </div>
            <div className={mono.className} style={{ fontSize: 11, letterSpacing: "0.32em", color: TANK === "#3F4734" ? "#9CA88A" : TANK, textTransform: "uppercase", textAlign: "right", fontWeight: 700 }}>// FAMILY OWNED SINCE 1998</div>
          </div>
          <p className={mono.className} style={{ fontSize: 11, letterSpacing: "0.28em", borderTop: `2px solid ${RUST}`, paddingTop: 14, color: CREAM, opacity: 0.65, textTransform: "uppercase", fontWeight: 700 }}>© {new Date().getFullYear()} T&amp;G AUTO REPAIR · BURBANK · CALIFORNIA</p>
        </div>
      </footer>
    </main>
  );
}

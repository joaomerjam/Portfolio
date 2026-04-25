"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text content */}
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-6"
              style={{ color: "var(--accent)", letterSpacing: "0.22em" }}
            >
              International Business · Econometrics
            </p>

            <h1
              className="font-heading font-light leading-none mb-2"
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
                color: "var(--text-primary)",
              }}
            >
              Joao
            </h1>
            <h1
              className="font-heading font-light leading-none mb-10"
              style={{
                fontSize: "clamp(3rem, 7vw, 6rem)",
                color: "var(--text-primary)",
              }}
            >
              <span style={{ color: "var(--accent)" }}>Andrade</span> Merjam
            </h1>

            {/* Thin rule */}
            <div
              className="w-12 mb-10"
              style={{ borderTop: "1px solid var(--accent)", opacity: 0.6 }}
            />

            <p
              className="text-base leading-loose max-w-md"
              style={{ color: "var(--text-secondary)", fontWeight: 300 }}
            >
              A global citizen shaped by São Paulo, Luxembourg, Switzerland,
              London, and Miami. Graduating from Northeastern University with a
              B.S. in International Business, I bring a quantitative lens to
              global markets — where econometrics meets fintech and social
              innovation.
            </p>

            <p
              className="text-base leading-loose max-w-md mt-4"
              style={{ color: "var(--text-secondary)", fontWeight: 300 }}
            >
              Joining{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 400 }}>
                Citi Private Bank
              </span>{" "}
              as an Analyst on the LATAM team in New York City.
            </p>

            <div className="flex gap-4 mt-10">
              <a
                href="#projects"
                className="px-8 py-3 text-xs tracking-widest uppercase transition-all duration-200"
                style={{
                  backgroundColor: "var(--accent)",
                  color: "var(--bg)",
                  letterSpacing: "0.18em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.85";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-8 py-3 text-xs tracking-widest uppercase border transition-all duration-200"
                style={{
                  borderColor: "var(--border)",
                  color: "var(--text-secondary)",
                  letterSpacing: "0.18em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--accent)";
                  (e.currentTarget as HTMLElement).style.color = "var(--accent)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)";
                  (e.currentTarget as HTMLElement).style.color =
                    "var(--text-secondary)";
                }}
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Offset decorative block */}
              <div
                className="absolute -bottom-4 -right-4 w-full h-full"
                style={{ border: "1px solid var(--border)" }}
              />
              <div
                className="relative w-72 h-96 lg:w-80 lg:h-[420px] overflow-hidden"
                style={{ backgroundColor: "var(--surface)" }}
              >
                <Image
                  src="/photo.jpg"
                  alt="Joao Andrade Merjam"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 flex items-center gap-4">
          <div
            className="h-px w-16"
            style={{ backgroundColor: "var(--border)" }}
          />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--border)", letterSpacing: "0.18em" }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}

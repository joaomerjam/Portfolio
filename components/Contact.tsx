"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className="flex items-end justify-between mb-16 pb-6"
          style={{ borderBottom: "1px solid var(--border)" }}
        >
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--accent)", letterSpacing: "0.22em" }}
            >
              Connect
            </p>
            <h2
              className="font-heading font-light"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--text-primary)",
              }}
            >
              Get in Touch
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left — message */}
          <div>
            <p
              className="font-heading font-light text-2xl leading-relaxed mb-8"
              style={{ color: "var(--text-primary)" }}
            >
              &ldquo;Whether it&rsquo;s a data project, a market insight, or a
              conversation about global finance — I&rsquo;d love to connect.&rdquo;
            </p>
            <p
              className="text-sm leading-loose"
              style={{ color: "var(--text-secondary)" }}
            >
              I&rsquo;m always open to discussing opportunities, collaborations,
              and ideas at the intersection of economics, technology, and
              international markets.
            </p>
          </div>

          {/* Right — links */}
          <div className="space-y-0 divide-y" style={{ borderColor: "var(--border)" }}>
            <ContactRow
              icon={<EmailIcon />}
              label="Email"
              value="joaomerjam@gmail.com"
              href="mailto:joaomerjam@gmail.com"
            />
            <ContactRow
              icon={<LinkedInIcon />}
              label="LinkedIn"
              value="www.linkedin.com/in/joaomerjam"
              href="https://www.linkedin.com/in/joaomerjam"
            />
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-24 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span
            className="font-heading font-light text-lg tracking-widest"
            style={{ color: "var(--accent)", letterSpacing: "0.15em" }}
          >
            Joao Andrade Merjam
          </span>
          <span
            className="text-xs tracking-widest"
            style={{ color: "var(--border)", letterSpacing: "0.15em" }}
          >
            {new Date().getFullYear()} · New York City
          </span>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-6 py-6 group transition-colors duration-200"
      style={{ color: "var(--text-secondary)" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = "var(--text-primary)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = "var(--text-secondary)")
      }
    >
      <span style={{ color: "var(--accent)" }}>{icon}</span>
      <div>
        <p
          className="text-xs tracking-widest uppercase mb-1"
          style={{ color: "var(--accent)", letterSpacing: "0.18em" }}
        >
          {label}
        </p>
        <p className="text-sm">{value}</p>
      </div>
      <span className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <ArrowIcon />
      </span>
    </a>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="4" width="20" height="16" rx="1" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

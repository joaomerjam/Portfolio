const skillGroups = [
  {
    category: "Languages & Tools",
    skills: [
      { name: "Python", level: 55 },
      { name: "Git", level: 40 },
    ],
  },
  {
    category: "Data & Analysis",
    skills: [
      { name: "Pandas", level: 60 },
      { name: "Statsmodels", level: 50 },
      { name: "Scikit-learn", level: 53 },
    ],
  },
  {
    category: "Visualization & Finance",
    skills: [
      { name: "Plotly", level: 60 },
      { name: "yfinance", level: 72 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32" style={{ backgroundColor: "var(--surface)" }}>
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
              Expertise
            </p>
            <h2
              className="font-heading font-light"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                color: "var(--text-primary)",
              }}
            >
              Skills
            </h2>
          </div>
        </div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p
                className="text-xs tracking-widest uppercase mb-8"
                style={{ color: "var(--text-secondary)", letterSpacing: "0.18em" }}
              >
                {group.category}
              </p>
              <div className="space-y-6">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span
                        className="text-sm"
                        style={{ color: "var(--text-primary)", fontWeight: 400 }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-xs"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    {/* Bar track */}
                    <div
                      className="h-px w-full relative"
                      style={{ backgroundColor: "var(--border)" }}
                    >
                      {/* Bar fill */}
                      <div
                        className="absolute top-0 left-0 h-px"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: "var(--accent)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div
          className="mt-20 pt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {[
            { label: "Concentrations", value: "Fintech · Social Innovation · Entrepreneurship" },
            { label: "Program", value: "Econometrics & International Business" },
            { label: "Location", value: "New York City" },
          ].map((item) => (
            <div key={item.label}>
              <p
                className="text-xs tracking-widest uppercase mb-2"
                style={{ color: "var(--accent)", letterSpacing: "0.18em" }}
              >
                {item.label}
              </p>
              <p style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

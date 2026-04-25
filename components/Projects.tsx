"use client";

const projects = [
  {
    number: "01",
    title: "Predicting Sneaker Resale Premiums on StockX",
    description:
      "Built and compared machine learning models to predict the resale price premium of Nike Off-White and Yeezy sneakers on StockX, using style, colorway, shoe size, buyer region, and days since retail release — providing a data-driven framework for resellers to prioritize buy decisions at launch.",
    tags: ["Python", "Pandas", "Scikit-learn", "Seaborn", "Matplotlib", "Streamlit", "Kagglehub"],
    github: "https://github.com/joaomerjam/3916-Final-Project",
  },
  {
    number: "02",
    title: "The Sovereign Risk Engine — Regularization, Classification, and Model Evaluation for Macroeconomic Early Warning Systems,
    description:
      "Built a next-generation IMF Early Warning System (EWS) for identifying emerging-market economies at elevated sovereign crisis risk, diagnosing OLS overfitting in high-dimensional WDI data, rebuilding the forecasting engine with Ridge and Lasso regularization, constructing a logistic regression crisis classifier, and evaluating it under real IMF operational constraints using the full classification metrics toolkit.",
    tags: ["Statsmodels", "Plotly", "yfinance"],
    github: "https://github.com/joaomerjam/ECON3916-33674-Statistical-Machine-Learning/tree/main/Assignment%205",
  },
  {
    number: "03",
    title: "The Causal Architecture",
    description:
      "In this assignment I took on the role of a Senior Data Economist at SwiftCart Logistics, a multinational on-demand delivery platform. The executive board had three open questions — driver compensation equity, whether a new routing algorithm actually works, and the real ROI of their premium subscription service. The goal was to throw out fragile parametric assumptions and use heavy computation to build real empirical evidence and isolate causality from noise.",
    tags: ["Python", "Plotly", "Git"],
    github: "https://github.com/joaomerjam/ECON3916-33674-Statistical-Machine-Learning/tree/main/Assignemnt%203",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-end justify-between mb-16 pb-6"
          style={{ borderBottom: "1px solid var(--border)" }}>
          <div>
            <p
              className="text-xs tracking-widest uppercase mb-3"
              style={{ color: "var(--accent)", letterSpacing: "0.22em" }}
            >
              Work
            </p>
            <h2
              className="font-heading font-light"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "var(--text-primary)" }}
            >
              Selected Projects
            </h2>
          </div>
          <span
            className="hidden md:block text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)", letterSpacing: "0.18em" }}
          >
            Data Science · Finance
          </span>
        </div>

        {/* Project list */}
        <div className="divide-y" style={{ borderColor: "var(--border)" }}>
          {projects.map((project) => (
            <div
              key={project.number}
              className="group grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-6 py-10 items-start transition-colors duration-200"
            >
              {/* Number */}
              <span
                className="font-heading text-4xl font-light leading-none"
                style={{ color: "var(--border)" }}
              >
                {project.number}
              </span>

              {/* Content */}
              <div>
                <h3
                  className="font-heading text-2xl font-light mb-3 transition-colors duration-200 group-hover:text-[var(--accent)]"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-sm leading-loose max-w-xl mb-5"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 tracking-wider"
                      style={{
                        border: "1px solid var(--border)",
                        color: "var(--text-secondary)",
                        letterSpacing: "0.1em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs tracking-widest uppercase mt-1 transition-colors duration-200"
                style={{ color: "var(--text-secondary)", letterSpacing: "0.18em" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <GitHubIcon />
                <span>GitHub</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

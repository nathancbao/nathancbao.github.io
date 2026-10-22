const SKILL_GROUPS = [
  {
    label: "LANGUAGES",
    color: "#00e5ff",
    bg: "rgba(0,229,255,0.05)",
    border: "rgba(0,229,255,0.14)",
    skills: [
      "Python",
      "Swift",
      "Java",
      "C++",
      "Go",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Apex",
      "R",
      "HTML",
      "CSS",
    ],
  },
  {
    label: "FRAMEWORKS & TOOLS",
    color: "#9b59ff",
    bg: "rgba(155,89,255,0.05)",
    border: "rgba(155,89,255,0.14)",
    skills: [
      "React",
      "SwiftUI",
      "Flask",
      "FastAPI",
      "Salesforce (LWC)",
      "Pandas",
      "PyTorch",
      "TensorFlow",
      "scikit-learn",
      "Google Cloud",
      "Docker",
      "Git",
      "GitHub Actions",
    ],
  },
  {
    label: "SYSTEMS & CONCEPTS",
    color: "#91a0bd",
    bg: "rgba(120,136,168,0.05)",
    border: "rgba(120,136,168,0.13)",
    skills: [
      "Operating Systems",
      "File Systems",
      "Concurrency",
      "Machine Learning",
    ],
  },
]

export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px clamp(24px,5vw,80px)",
        background: "#0a0c18",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionLabel number="01" />
        <h2
          data-animate
          data-delay="0.1s"
          className="font-orbitron"
          style={{
            fontSize: "clamp(26px,3.5vw,46px)",
            fontWeight: 700,
            color: "#f4f7ff",
            marginBottom: "70px",
            letterSpacing: "2px",
          }}
        >
          ABOUT ME
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Bio */}
          <div>
            <p
              data-animate
              data-delay="0.15s"
              style={{
                fontSize: "17px",
                lineHeight: 1.9,
                color: "#8f9dbb",
                marginBottom: "26px",
              }}
            >
              I'm a graduate student at USC pursuing my M.S. in Computer
              Science. I'm interested in software development and AI/ML, and I
              enjoy building projects that solve real problems.
            </p>
            <p
              data-animate
              data-delay="0.2s"
              style={{
                fontSize: "17px",
                lineHeight: 1.9,
                color: "#8f9dbb",
                marginBottom: "40px",
              }}
            >
              Outside of coding, I enjoy staying active, playing sports, and
              finding new places to eat with friends.
            </p>
            <div
              data-animate
              data-delay="0.25s"
              style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
            >
              <OutlineLink
                href="https://github.com/nathancbao"
                accent="#00e5ff"
              >
                GITHUB ↗
              </OutlineLink>
              <OutlineLink
                href="https://www.linkedin.com/in/nathancbao/"
                accent="#71809f"
              >
                LINKEDIN ↗
              </OutlineLink>
            </div>
          </div>

          {/* Skills */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            {SKILL_GROUPS.map((group, i) => (
              <div
                key={group.label}
                data-animate
                data-delay={`${0.2 + i * 0.05}s`}
              >
                <h3
                  style={{
                    fontSize: "9px",
                    fontWeight: 700,
                    color: "#596781",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                    marginBottom: "14px",
                  }}
                >
                  {group.label}
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontSize: "12px",
                        color: group.color,
                        background: group.bg,
                        border: `1px solid ${group.border}`,
                        padding: "6px 14px",
                        fontFamily: "'Courier New', monospace",
                        letterSpacing: "1px",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionLabel({ number }: { number: string }) {
  return (
    <div
      data-animate
      data-delay="0s"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "14px",
        marginBottom: "14px",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          fontWeight: 700,
          color: "#00e5ff",
          letterSpacing: "5px",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        {number}
      </span>
      <div style={{ width: "44px", height: "1px", background: "#1c2440" }} />
    </div>
  )
}

function OutlineLink({
  href,
  accent,
  children,
}: {
  href: string
  accent: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: "11px",
        fontWeight: 700,
        color: accent,
        border: "1px solid #1c2440",
        padding: "10px 22px",
        letterSpacing: "2px",
        textDecoration: "none",
        textTransform: "uppercase",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.background = `rgba(${accent === "#00e5ff" ? "0,229,255" : "104,120,160"},0.07)`
        el.style.borderColor =
          accent === "#00e5ff" ? "rgba(0,229,255,0.55)" : "#2c3660"
        el.style.color = accent === "#00e5ff" ? "#00e5ff" : "#f4f7ff"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.background = "transparent"
        el.style.borderColor = "#1c2440"
        el.style.color = accent
      }}
    >
      {children}
    </a>
  )
}

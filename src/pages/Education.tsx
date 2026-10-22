const SCHOOLS = [
  {
    period: "EXPECTED JUNE 2028",
    school: "University of Southern California",
    location: "Los Angeles, CA",
    degree: "M.S. in Computer Science",
    accent: "#00e5ff",
  },
  {
    period: "2022 - 2026",
    school: "University of California, Davis",
    location: "Davis, CA",
    degree: "B.S. in Computer Science · Minor in Technology Management",
    detail: "Dean's Honors List",
    accent: "#9b59ff",
  },
]

const COURSE_GROUPS = [
  {
    label: "GRADUATE",
    accent: "#00e5ff",
    courses: ["Database Systems", "Deep Learning"],
  },
  {
    label: "UNDERGRADUATE",
    accent: "#9b59ff",
    courses: [
      "Computer Vision",
      "Software Design Project",
      "Operating Systems",
      "Machine Learning",
      "Theory of Computation",
      "Computer Architecture",
      "Software Development & OOP in C++",
      "Discrete Mathematics",
      "Data Structures & Algorithms",
      "Algorithm Design & Analysis",
      "Introduction to AI",
      "Probability & Statistical Modeling",
    ],
  },
]

export default function Education() {
  return (
    <section
      id="education"
      style={{ padding: "120px clamp(24px,5vw,80px)", background: "#070810" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionLabel number="02" />
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
          EDUCATION
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: "22px",
            marginBottom: "40px",
          }}
        >
          {SCHOOLS.map((school, i) => (
            <article
              key={school.school}
              data-animate
              data-delay={`${0.15 + i * 0.1}s`}
              style={{
                background: "#0d1020",
                border: "1px solid #1c2440",
                borderTop: `2px solid ${school.accent}`,
                padding: "30px 32px",
              }}
            >
              <div
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "3px",
                  color: school.accent,
                  fontFamily: "'Courier New', monospace",
                  marginBottom: "18px",
                }}
              >
                {school.period}
              </div>
              <h3
                className="font-orbitron"
                style={{
                  color: "#f4f7ff",
                  fontSize: "17px",
                  lineHeight: 1.5,
                  letterSpacing: "0.5px",
                  marginBottom: "8px",
                }}
              >
                {school.school}
              </h3>
              <p
                style={{ color: "#9aa8c7", fontSize: "14px", lineHeight: 1.7 }}
              >
                {school.degree}
              </p>
              {school.detail && (
                <p
                  style={{
                    color: "#71809f",
                    fontSize: "13px",
                    marginTop: "8px",
                  }}
                >
                  {school.detail}
                </p>
              )}
              <p
                style={{
                  color: "#657493",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  marginTop: "18px",
                  textTransform: "uppercase",
                }}
              >
                {school.location}
              </p>
            </article>
          ))}
        </div>

        <div data-animate data-delay="0.35s">
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
            RELEVANT COURSEWORK
          </h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {COURSE_GROUPS.map((group) => (
              <div key={group.label}>
                <div
                  style={{
                    color: group.accent,
                    fontSize: "9px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    marginBottom: "10px",
                    fontFamily: "'Courier New', monospace",
                  }}
                >
                  {group.label}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {group.courses.map((course) => (
                    <span
                      key={course}
                      style={{
                        color: "#8998b6",
                        background: "rgba(120,136,168,0.05)",
                        border: "1px solid rgba(120,136,168,0.13)",
                        padding: "7px 13px",
                        fontSize: "11px",
                        fontFamily: "'Courier New', monospace",
                      }}
                    >
                      {course}
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

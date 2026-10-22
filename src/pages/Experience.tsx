import { useEffect, useRef, useState } from "react"

const JOBS = [
  {
    period: "JUN 2026 – AUG 2026",
    role: "Business Technology Intern",
    company: "ZS Associates · New York, NY",
    companyColor: "#00e5ff",
    description:
      "Built an advanced Salesforce search workflow (Apex, LWC) for a Fortune 100 client. Profiled 450K+ product records across two legacy systems and developed Python/SQL tooling to validate 500+ field mappings from eight systems into a unified data model.",
  },
  {
    period: "MAR 2026 – JUN 2026",
    role: "Mobile Developer",
    company: "Orbit",
    companyColor: "#9b59ff",
    description:
      "Built an iOS social platform in SwiftUI with a Flask backend on Google App Engine, including JWT auth and .edu verification. Developed a hybrid recommendation engine using LightFM/WARP, semantic embeddings, TF-IDF, and time-decayed behavioral signals.",
  },
  {
    period: "OCT 2025 – PRESENT",
    role: "Machine Learning Developer",
    company: "AI Student Collective at Davis",
    companyColor: "#00e5ff",
    description:
      "Engineering ML-driven trading models on Kalshi, applying supervised learning, time-series forecasting, and feature engineering to predict event probabilities and guide automated trades.",
  },
  {
    period: "SEP 2024 – OCT 2025",
    role: "Backend Developer",
    company: "Include at Davis",
    companyColor: "#9b59ff",
    description:
      "Designed NoSQL schemas and REST APIs for an e-commerce platform serving local businesses, improving data integrity, query performance, and real-time frontend integration.",
  },
  {
    period: "JUL 2024 – SEP 2024",
    role: "Software Engineer Intern",
    company: "AI Nomis · Seoul, South Korea",
    companyColor: "#9b59ff",
    description:
      "Integrated eight open-source AI models on RunPod through TypeScript/Python APIs. Built a full-stack platform for browsing, testing, and deploying AI tools, including a real-time multi-LLM chatbot.",
  },
  {
    period: "FEB 2024 – JUL 2024",
    role: "Software Developer",
    company: "Codelab Open Source",
    companyColor: "#7888a8",
    description:
      "Contributed to a customizable charting library in Ruby on Rails, HTML, and CSS, adding dynamic palettes, hover states, and theme switching.",
  },
]

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!items.length) return

    let ticking = false

    const updateActive = () => {
      ticking = false
      const anchor = window.innerHeight * 0.45
      let closestIndex = 0
      let closestDist = Infinity

      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect()
        const dist = Math.abs(rect.top - anchor)
        if (dist < closestDist) {
          closestDist = dist
          closestIndex = i
        }
      })

      setActiveIndex(closestIndex)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateActive)
    }

    updateActive()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const effectiveIndex = hoveredIndex ?? activeIndex

  return (
    <section
      id="experience"
      style={{ padding: "120px clamp(24px,5vw,80px)", background: "#070810" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionLabel number="03" />
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
          EXPERIENCE
        </h2>

        <div style={{ position: "relative", paddingLeft: "48px" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "1px",
              background:
                "linear-gradient(#00e5ff55, #1c2440 85%, transparent)",
            }}
          />

          {JOBS.map((job, i) => {
            const isActive = effectiveIndex === i
            return (
              <div
                key={job.role}
                data-animate
                data-delay={`${0.1 + i * 0.1}s`}
                ref={(el) => {
                  itemRefs.current[i] = el
                }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  position: "relative",
                  marginBottom: i < JOBS.length - 1 ? "56px" : 0,
                }}
              >
                {/* Timeline dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-53px",
                    top: "8px",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                    transition: "all 0.35s ease",
                    ...(isActive
                      ? {
                          background: "#00e5ff",
                          boxShadow:
                            "0 0 0 4px rgba(0,229,255,0.15), 0 0 14px rgba(0,229,255,0.7)",
                        }
                      : {
                          background: "#0d1020",
                          border: "2px solid #1c2440",
                        }),
                  }}
                />

                {/* Period */}
                <div
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    marginBottom: "10px",
                    fontFamily: "'Courier New', monospace",
                    transition: "color 0.35s ease",
                    color: isActive ? "#00e5ff" : "#657493",
                  }}
                >
                  {job.period}
                </div>

                {/* Card */}
                <div
                  style={{
                    background: "#0d1020",
                    padding: "28px 32px",
                    transition:
                      "border-color 0.35s ease, box-shadow 0.35s ease",
                    border: isActive
                      ? "1px solid rgba(0,229,255,0.3)"
                      : "1px solid #1c2440",
                    boxShadow: isActive
                      ? "0 0 24px rgba(0,229,255,0.04)"
                      : "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "12px",
                      marginBottom: "12px",
                    }}
                  >
                    <h3
                      className="font-orbitron"
                      style={{
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#f4f7ff",
                        letterSpacing: "1px",
                      }}
                    >
                      {job.role}
                    </h3>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        color: job.companyColor,
                        letterSpacing: "1px",
                      }}
                    >
                      {job.company}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#8f9dbb",
                      lineHeight: 1.75,
                    }}
                  >
                    {job.description}
                  </p>
                </div>
              </div>
            )
          })}
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

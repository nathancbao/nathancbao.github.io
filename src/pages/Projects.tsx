const PROJECTS = [
  {
    num: "01",
    accent: "#00e5ff",
    title: "Orbit",
    signal: "SOCIAL DISCOVERY / RECOMMENDATION",
    metric: "HYBRID REC ENGINE",
    visual: "orbit" as const,
    description:
      'iOS social discovery app that matches college students into interest-based activities and small-group Pods. Features a hybrid recommendation engine and an explorable 2D "Voyage" map.',
    tech: ["SwiftUI", "Flask", "Google Cloud", "LightFM"],
    githubUrl: "https://github.com/nathancbao/Orbit",
  },
  {
    num: "02",
    accent: "#9b59ff",
    title: "Hand-Computer Control Interface",
    signal: "COMPUTER VISION / HUMAN INPUT",
    metric: "42 FEATURES / 6 GESTURES",
    visual: "hand" as const,
    description:
      "Real-time gesture control that translates tracked hand landmarks into mouse actions with relative and absolute cursor modes, backed by a custom dataset and MLP.",
    tech: ["Python", "MediaPipe", "OpenCV"],
    githubUrl: "https://github.com/nathancbao/Hand-Computer-Control-Interface",
  },
  {
    num: "03",
    accent: "#00e5ff",
    title: "Guandan Multiplayer Game",
    signal: "REAL-TIME SYSTEMS / MULTIPLAYER",
    metric: "GO CONCURRENCY / WEBSOCKETS",
    visual: "cards" as const,
    description:
      "Full-stack multiplayer browser card game using Go concurrency and WebSockets for matchmaking, synchronized game state, and low-latency play.",
    tech: ["Go", "WebSockets", "JavaScript", "HTML", "CSS"],
  },
  {
    num: "04",
    accent: "#9b59ff",
    title: "ArcLive",
    signal: "LIVE DATA / TRANSACTION SAFETY",
    metric: "ONE ACTIVE VISIT / DEVICE",
    visual: "occupancy" as const,
    description:
      "Real-time gym occupancy tracker with account-free check-ins. A partial unique index and row-level locking keep concurrent visits and checkouts correct.",
    tech: ["SwiftUI", "FastAPI", "PostgreSQL", "Supabase"],
    githubUrl: "https://github.com/nathancbao/arclive",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      style={{ padding: "120px clamp(24px,5vw,80px)", background: "#0a0c18" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <SectionLabel number="04" />
        <div className="projects-heading-row">
          <h2
            data-animate
            data-delay="0.1s"
            className="font-orbitron"
            style={{
              fontSize: "clamp(26px,3.5vw,46px)",
              fontWeight: 700,
              color: "#f4f7ff",
              letterSpacing: "2px",
            }}
          >
            PROJECTS
          </h2>
          <p data-animate data-delay="0.15s" className="projects-heading-hint">
            HOVER OR FOCUS TO DECRYPT //
          </p>
        </div>

        <div className="project-grid">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={0.1 + i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof PROJECTS)[number]
  delay: number
}) {
  const accentRgb = project.accent === "#00e5ff" ? "0,229,255" : "155,89,255"

  return (
    <article
      className="project-card"
      data-animate
      data-delay={`${delay}s`}
      onPointerMove={(event) => {
        const card = event.currentTarget
        const bounds = card.getBoundingClientRect()
        card.style.setProperty("--mouse-x", `${event.clientX - bounds.left}px`)
        card.style.setProperty("--mouse-y", `${event.clientY - bounds.top}px`)
      }}
      style={
        {
          "--project-accent": project.accent,
          "--project-accent-rgb": accentRgb,
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        } as React.CSSProperties
      }
    >
      <div className="project-card__visual">
        <div className="project-card__grid" />
        <div className="project-card__scan" />
        <ProjectVisual kind={project.visual} />

        <div className="project-card__hud project-card__hud--top">
          <span>PRJ_{project.num}</span>
          <span className="project-card__status">
            <i /> ONLINE
          </span>
        </div>
        <div className="project-card__hud project-card__hud--bottom">
          <span>{project.signal}</span>
          <span>{project.metric}</span>
        </div>
      </div>

      <div className="project-card__content">
        <div className="project-card__heading">
          <div>
            <span className="project-card__number">{project.num}</span>
            <h3 className="font-orbitron">{project.title}</h3>
          </div>
          <span className="project-card__prompt" aria-hidden="true">
            [ OPEN ]
          </span>
        </div>

        <div className="project-card__reveal">
          <div className="project-card__reveal-inner">
            <p>{project.description}</p>
            <div className="project-card__footer">
              <div className="project-card__tech">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
              {project.githubUrl ? (
                <a
                  className="project-card__link"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  VIEW SOURCE <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className="project-card__private">BUILD IN PROGRESS</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function ProjectVisual({
  kind,
}: {
  kind: (typeof PROJECTS)[number]["visual"]
}) {
  if (kind === "orbit") {
    return (
      <svg
        className="project-card__art"
        viewBox="0 0 600 300"
        aria-hidden="true"
      >
        <circle
          className="visual-line visual-orbit visual-orbit--one"
          cx="300"
          cy="150"
          r="92"
        />
        <ellipse
          className="visual-line visual-orbit visual-orbit--two"
          cx="300"
          cy="150"
          rx="180"
          ry="64"
        />
        <circle className="visual-core" cx="300" cy="150" r="34" />
        <circle className="visual-node" cx="120" cy="150" r="8" />
        <circle
          className="visual-node visual-node--alt"
          cx="392"
          cy="94"
          r="7"
        />
        <path className="visual-line" d="M128 150h138M334 150h146" />
        <path className="visual-line visual-dash" d="M300 58V20M300 242v38" />
      </svg>
    )
  }

  if (kind === "hand") {
    return (
      <svg
        className="project-card__art"
        viewBox="0 0 600 300"
        aria-hidden="true"
      >
        <path
          className="visual-line"
          d="M240 250l-22-91 17-6 32 59-8-151 20-2 23 124 3-152 21 1 12 150 20-133 21 4-2 145 28-91 20 8-13 114-52 37z"
        />
        {[
          [218, 159],
          [240, 250],
          [259, 61],
          [267, 212],
          [279, 59],
          [302, 183],
          [326, 32],
          [338, 182],
          [358, 49],
          [357, 198],
          [405, 115],
          [392, 229],
        ].map(([x, y], i) => (
          <circle
            key={i}
            className={
              i % 3 === 0 ? "visual-node visual-node--alt" : "visual-node"
            }
            cx={x}
            cy={y}
            r="5"
          />
        ))}
        <path
          className="visual-line visual-dash"
          d="M138 86h72M390 66h72M142 232h62M414 230h52"
        />
      </svg>
    )
  }

  if (kind === "cards") {
    return (
      <svg
        className="project-card__art"
        viewBox="0 0 600 300"
        aria-hidden="true"
      >
        <g className="visual-card visual-card--left">
          <rect
            className="visual-line"
            x="180"
            y="58"
            width="130"
            height="184"
            rx="8"
          />
          <path className="visual-line" d="M204 84h36M204 102h62M204 206h30" />
          <path className="visual-core" d="M245 126l22 26-22 27-22-27z" />
        </g>
        <g className="visual-card visual-card--right">
          <rect
            className="visual-line"
            x="290"
            y="58"
            width="130"
            height="184"
            rx="8"
          />
          <path className="visual-line" d="M314 84h36M314 102h62M364 206h30" />
          <circle className="visual-core" cx="355" cy="152" r="23" />
        </g>
        <path className="visual-line visual-dash" d="M102 150h56M442 150h56" />
        <circle className="visual-node" cx="92" cy="150" r="7" />
        <circle
          className="visual-node visual-node--alt"
          cx="508"
          cy="150"
          r="7"
        />
      </svg>
    )
  }

  return (
    <svg className="project-card__art" viewBox="0 0 600 300" aria-hidden="true">
      <path
        className="visual-line visual-dash"
        d="M112 222h380M112 168h380M112 114h380M112 60h380"
      />
      <path
        className="visual-line visual-graph"
        d="M112 218l72-22 58 8 64-76 62 26 52-70 72 24"
      />
      <path
        className="visual-fill"
        d="M112 218l72-22 58 8 64-76 62 26 52-70 72 24v114H112z"
      />
      {[
        [112, 218],
        [184, 196],
        [242, 204],
        [306, 128],
        [368, 154],
        [420, 84],
        [492, 108],
      ].map(([x, y], i) => (
        <circle
          key={i}
          className={i === 5 ? "visual-node visual-node--alt" : "visual-node"}
          cx={x}
          cy={y}
          r="6"
        />
      ))}
      <text className="visual-readout" x="128" y="92">
        CAPACITY 67%
      </text>
    </svg>
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

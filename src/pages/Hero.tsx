export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "#070810",
      }}
    >
      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,229,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,0.04) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          pointerEvents: "none",
        }}
      />
      {/* Vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 90% 90% at 28% 100%,rgba(7,8,16,0) 0%,rgba(7,8,16,0.55) 55%,rgba(7,8,16,0.92) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Hero text */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "clamp(280px, 54%, 680px)",
          padding: "0 0 clamp(80px, 12vw, 148px) clamp(24px, 5vw, 80px)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              width: "44px",
              height: "2px",
              background: "#00e5ff",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "10px",
              fontWeight: 700,
              color: "#00e5ff",
              letterSpacing: "5px",
              textTransform: "uppercase",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            Software Engineer · 2026
          </span>
        </div>

        <h1
          className="font-orbitron animate-glitch"
          style={{
            fontSize: "clamp(44px, 5.8vw, 84px)",
            fontWeight: 900,
            lineHeight: 0.92,
            color: "#f4f7ff",
            letterSpacing: "1px",
          }}
        >
          NATHAN
          <br />
          <span style={{ color: "#00e5ff" }}>BAO.</span>
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#9aa8c7",
            lineHeight: 1.85,
            maxWidth: "390px",
          }}
        >
          Hey, I'm Nathan. I'm a graduate computer science student who enjoys
          building software, exploring AI, and learning by creating things.
        </p>

        <div
          style={{
            display: "flex",
            gap: "14px",
            marginTop: "4px",
            flexWrap: "wrap",
          }}
        >
          <CyaBtn href="#projects" filled>
            VIEW WORK
          </CyaBtn>
          <CyaBtn href="#contact">CONTACT</CyaBtn>
        </div>

        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "9px",
              background: "rgba(0,229,255,0.04)",
              border: "1px solid rgba(0,229,255,0.1)",
              padding: "8px 16px",
            }}
          >
            <div
              className="animate-pulse-dot"
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "#00e5ff",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontSize: "11px",
                fontFamily: "'Courier New', monospace",
                color: "#71809f",
                letterSpacing: "1px",
              }}
            >
              open to new opportunities
            </span>
          </div>
        </div>
      </div>

      {/* Character SVG */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "62%",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <AbstractSVG />
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(transparent,#070810)",
          zIndex: 4,
          pointerEvents: "none",
        }}
      />

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "38px",
          left: "clamp(24px, 5vw, 80px)",
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          gap: "12px",
          opacity: 0.35,
        }}
      >
        <div
          style={{
            width: "1px",
            height: "50px",
            background: "linear-gradient(transparent,#00e5ff)",
          }}
        />
        <span
          style={{
            fontSize: "10px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            color: "#52607d",
            fontWeight: 600,
          }}
        >
          SCROLL
        </span>
      </div>
    </section>
  )
}

function CyaBtn({
  href,
  filled,
  children,
}: {
  href: string
  filled?: boolean
  children: React.ReactNode
}) {
  const base: React.CSSProperties = {
    fontSize: "11px",
    fontWeight: 700,
    padding: "14px 36px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    textDecoration: "none",
    transition: "all 0.2s",
    display: "inline-block",
  }
  const filled_style: React.CSSProperties = {
    color: "#070810",
    background: "#00e5ff",
  }
  const outline_style: React.CSSProperties = {
    color: "#00e5ff",
    border: "1px solid rgba(0,229,255,0.28)",
  }

  return (
    <a
      href={href}
      style={{ ...base, ...(filled ? filled_style : outline_style) }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        if (filled) {
          el.style.background = "#00ccee"
          el.style.boxShadow = "0 0 28px rgba(0,229,255,0.5)"
        } else {
          el.style.borderColor = "rgba(0,229,255,0.65)"
          el.style.background = "rgba(0,229,255,0.06)"
        }
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        if (filled) {
          el.style.background = "#00e5ff"
          el.style.boxShadow = "none"
        } else {
          el.style.borderColor = "rgba(0,229,255,0.28)"
          el.style.background = "transparent"
        }
      }}
    >
      {children}
    </a>
  )
}

function AbstractSVG() {
  // Composition centered at cx=300, cy=410
  return (
    <svg
      viewBox="0 0 600 820"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "100%", height: "100%", display: "block" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="heroAtmo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0c2a50" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#050d1e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#020408" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="heroCore" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#00e5ff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="heroPurple" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9b59ff" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#9b59ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="heroFloor" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
        </radialGradient>
        <clipPath id="heroClip">
          <ellipse cx="300" cy="410" rx="210" ry="270" />
        </clipPath>
      </defs>

      {/* Atmosphere backdrop */}
      <ellipse
        cx="300"
        cy="410"
        rx="290"
        ry="370"
        fill="url(#heroAtmo)"
        className="animate-pulse-glow"
      />

      {/* Floor reflection */}
      <rect x="0" y="680" width="600" height="140" fill="url(#heroFloor)" />
      <line
        x1="60"
        y1="694"
        x2="540"
        y2="694"
        stroke="#00e5ff"
        strokeWidth="0.6"
        opacity="0.1"
      />

      {/* HUD corner brackets */}
      <path
        d="M 90,185 L 90,155 L 120,155"
        stroke="#00e5ff"
        strokeWidth="1.5"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M 510,185 L 510,155 L 480,155"
        stroke="#00e5ff"
        strokeWidth="1.5"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M 90,635 L 90,665 L 120,665"
        stroke="#00e5ff"
        strokeWidth="1.5"
        fill="none"
        opacity="0.35"
      />
      <path
        d="M 510,635 L 510,665 L 480,665"
        stroke="#00e5ff"
        strokeWidth="1.5"
        fill="none"
        opacity="0.35"
      />

      {/* Corner label text */}
      <text
        x="126"
        y="151"
        fill="#00e5ff"
        fontSize="8"
        fontFamily="'Courier New',monospace"
        opacity="0.25"
        letterSpacing="2"
      >
        SYS.ONLINE
      </text>
      <text
        x="126"
        y="679"
        fill="#00e5ff"
        fontSize="8"
        fontFamily="'Courier New',monospace"
        opacity="0.25"
        letterSpacing="2"
      >
        v2.4.1
      </text>

      {/* Outer slowly-rotating dashed ring — r=185 */}
      <g className="animate-spin-slow">
        <circle
          cx="300"
          cy="410"
          r="185"
          stroke="#00e5ff"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 20"
          opacity="0.22"
        />
        {/* 12 small tick marks */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => {
          const r = Math.PI / 180
          const x1 = 300 + 178 * Math.cos(deg * r)
          const y1 = 410 + 178 * Math.sin(deg * r)
          const x2 = 300 + 185 * Math.cos(deg * r)
          const y2 = 410 + 185 * Math.sin(deg * r)
          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#00e5ff"
              strokeWidth="1.5"
              opacity="0.3"
            />
          )
        })}
      </g>

      {/* Counter-rotating inner dashed ring — r=130 */}
      <g className="animate-spin-reverse">
        <circle
          cx="300"
          cy="410"
          r="130"
          stroke="#9b59ff"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 12"
          opacity="0.28"
        />
      </g>

      {/* Static circuit spokes — 6 directions */}
      {/* right */}
      <line
        x1="328"
        y1="410"
        x2="485"
        y2="410"
        stroke="#00e5ff"
        strokeWidth="0.8"
        opacity="0.18"
      />
      {/* left */}
      <line
        x1="272"
        y1="410"
        x2="115"
        y2="410"
        stroke="#00e5ff"
        strokeWidth="0.8"
        opacity="0.18"
      />
      {/* bottom-right: center→(393,570) with bend */}
      <polyline
        points="300,438 300,570 393,570"
        stroke="#00e5ff"
        strokeWidth="0.8"
        fill="none"
        opacity="0.15"
      />
      {/* bottom-left */}
      <polyline
        points="300,438 300,570 207,570"
        stroke="#00e5ff"
        strokeWidth="0.8"
        fill="none"
        opacity="0.15"
      />
      {/* top-right */}
      <polyline
        points="300,382 300,250 393,250"
        stroke="#00e5ff"
        strokeWidth="0.8"
        fill="none"
        opacity="0.15"
      />
      {/* top-left */}
      <polyline
        points="300,382 300,250 207,250"
        stroke="#00e5ff"
        strokeWidth="0.8"
        fill="none"
        opacity="0.15"
      />

      {/* Outer ring nodes — 6 positions */}
      {/* right (485,410) */}
      <circle
        cx="485"
        cy="410"
        r="7"
        stroke="#00e5ff"
        strokeWidth="1.5"
        fill="#070810"
        opacity="0.8"
      />
      <circle cx="485" cy="410" r="2.5" fill="#00e5ff" opacity="0.7" />
      {/* left (115,410) */}
      <circle
        cx="115"
        cy="410"
        r="7"
        stroke="#00e5ff"
        strokeWidth="1.5"
        fill="#070810"
        opacity="0.8"
      />
      <circle cx="115" cy="410" r="2.5" fill="#00e5ff" opacity="0.7" />
      {/* bottom-right (393,570) */}
      <circle
        cx="393"
        cy="570"
        r="6"
        stroke="#9b59ff"
        strokeWidth="1.5"
        fill="#070810"
        opacity="0.7"
      />
      <circle cx="393" cy="570" r="2" fill="#9b59ff" opacity="0.6" />
      {/* bottom-left (207,570) */}
      <circle
        cx="207"
        cy="570"
        r="6"
        stroke="#9b59ff"
        strokeWidth="1.5"
        fill="#070810"
        opacity="0.7"
      />
      <circle cx="207" cy="570" r="2" fill="#9b59ff" opacity="0.6" />
      {/* top-right (393,250) */}
      <circle
        cx="393"
        cy="250"
        r="6"
        stroke="#00e5ff"
        strokeWidth="1.5"
        fill="#070810"
        opacity="0.7"
      />
      <circle cx="393" cy="250" r="2" fill="#00e5ff" opacity="0.6" />
      {/* top-left (207,250) */}
      <circle
        cx="207"
        cy="250"
        r="6"
        stroke="#00e5ff"
        strokeWidth="1.5"
        fill="#070810"
        opacity="0.7"
      />
      <circle cx="207" cy="250" r="2" fill="#00e5ff" opacity="0.6" />

      {/* Middle solid ring — r=75 */}
      <circle
        cx="300"
        cy="410"
        r="75"
        stroke="#00e5ff"
        strokeWidth="1"
        fill="none"
        opacity="0.3"
      />

      {/* Middle ring cardinal nodes */}
      <circle
        cx="375"
        cy="410"
        r="4"
        stroke="#00e5ff"
        strokeWidth="1"
        fill="#070810"
        opacity="0.6"
      />
      <circle
        cx="225"
        cy="410"
        r="4"
        stroke="#00e5ff"
        strokeWidth="1"
        fill="#070810"
        opacity="0.6"
      />
      <circle
        cx="300"
        cy="335"
        r="4"
        stroke="#00e5ff"
        strokeWidth="1"
        fill="#070810"
        opacity="0.6"
      />
      <circle
        cx="300"
        cy="485"
        r="4"
        stroke="#00e5ff"
        strokeWidth="1"
        fill="#070810"
        opacity="0.6"
      />

      {/* Core glow */}
      <circle
        cx="300"
        cy="410"
        r="95"
        fill="url(#heroCore)"
        className="animate-pulse-glow"
      />
      <circle cx="300" cy="410" r="48" fill="url(#heroPurple)" />

      {/* Center ring + icon */}
      <circle
        cx="300"
        cy="410"
        r="32"
        stroke="#00e5ff"
        strokeWidth="1.5"
        fill="#070810"
        opacity="0.95"
      />
      <circle
        cx="300"
        cy="410"
        r="28"
        stroke="#00e5ff"
        strokeWidth="0.5"
        fill="none"
        opacity="0.4"
      />
      <text
        x="300"
        y="417"
        textAnchor="middle"
        fill="#00e5ff"
        fontSize="15"
        fontFamily="'Courier New',monospace"
        opacity="0.9"
      >
        &lt;/&gt;
      </text>

      {/* Crosshair lines through center */}
      <line
        x1="300"
        y1="375"
        x2="300"
        y2="385"
        stroke="#00e5ff"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="300"
        y1="435"
        x2="300"
        y2="445"
        stroke="#00e5ff"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="265"
        y1="410"
        x2="275"
        y2="410"
        stroke="#00e5ff"
        strokeWidth="1"
        opacity="0.5"
      />
      <line
        x1="325"
        y1="410"
        x2="335"
        y2="410"
        stroke="#00e5ff"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Scan line sweep — clipped to ellipse */}
      <g clipPath="url(#heroClip)">
        <rect
          x="90"
          y="0"
          width="420"
          height="2"
          fill="#00e5ff"
          opacity="1"
          className="animate-scan-line"
        />
      </g>

      {/* Floating code fragments */}
      <text
        x="130"
        y="248"
        fill="#00e5ff"
        fontSize="11"
        fontFamily="'Courier New',monospace"
        opacity="0.38"
        letterSpacing="1"
      >
        fn( )
      </text>
      <text
        x="440"
        y="258"
        fill="#9b59ff"
        fontSize="10"
        fontFamily="'Courier New',monospace"
        opacity="0.35"
        letterSpacing="1"
      >
        0xff
      </text>
      <text
        x="108"
        y="398"
        fill="#9b59ff"
        fontSize="10"
        fontFamily="'Courier New',monospace"
        opacity="0.3"
        letterSpacing="1"
      >
        async
      </text>
      <text
        x="466"
        y="388"
        fill="#00e5ff"
        fontSize="10"
        fontFamily="'Courier New',monospace"
        opacity="0.32"
        letterSpacing="1"
      >
        01101
      </text>
      <text
        x="130"
        y="568"
        fill="#00e5ff"
        fontSize="11"
        fontFamily="'Courier New',monospace"
        opacity="0.35"
        letterSpacing="1"
      >
        import
      </text>
      <text
        x="435"
        y="575"
        fill="#9b59ff"
        fontSize="10"
        fontFamily="'Courier New',monospace"
        opacity="0.3"
        letterSpacing="1"
      >
        &#123; &#125;
      </text>
      <text
        x="200"
        y="640"
        fill="#00e5ff"
        fontSize="9"
        fontFamily="'Courier New',monospace"
        opacity="0.22"
        letterSpacing="2"
      >
        ML_MODEL
      </text>
      <text
        x="360"
        y="632"
        fill="#9b59ff"
        fontSize="9"
        fontFamily="'Courier New',monospace"
        opacity="0.22"
        letterSpacing="2"
      >
        =&gt; []
      </text>

      {/* Data label near right node */}
      <text
        x="496"
        y="406"
        fill="#00e5ff"
        fontSize="8"
        fontFamily="'Courier New',monospace"
        opacity="0.28"
        letterSpacing="1"
      >
        0.98
      </text>
      <text
        x="496"
        y="417"
        fill="#00e5ff"
        fontSize="8"
        fontFamily="'Courier New',monospace"
        opacity="0.18"
        letterSpacing="1"
      >
        CONF
      </text>

      {/* Scattered particles */}
      <circle cx="152" cy="300" r="2" fill="#00e5ff" opacity="0.25" />
      <circle cx="448" cy="320" r="1.5" fill="#9b59ff" opacity="0.3" />
      <circle cx="160" cy="510" r="1.5" fill="#00e5ff" opacity="0.22" />
      <circle cx="450" cy="500" r="2" fill="#00e5ff" opacity="0.2" />
      <circle cx="300" cy="200" r="1.5" fill="#9b59ff" opacity="0.25" />
      <circle cx="300" cy="630" r="1.5" fill="#00e5ff" opacity="0.2" />
      <rect
        x="170"
        y="345"
        width="8"
        height="1.5"
        rx="1"
        fill="#00e5ff"
        opacity="0.22"
        transform="rotate(-15 174 346)"
      />
      <rect
        x="418"
        y="460"
        width="7"
        height="1.5"
        rx="1"
        fill="#9b59ff"
        opacity="0.2"
        transform="rotate(20 421 461)"
      />
      <rect
        x="340"
        y="185"
        width="10"
        height="1.5"
        rx="1"
        fill="#00e5ff"
        opacity="0.2"
        transform="rotate(-8 345 186)"
      />
      <rect
        x="225"
        y="630"
        width="8"
        height="1.5"
        rx="1"
        fill="#9b59ff"
        opacity="0.18"
        transform="rotate(12 229 631)"
      />
    </svg>
  )
}

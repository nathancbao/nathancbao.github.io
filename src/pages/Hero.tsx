export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />

      <div className="hero-copy">
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

      <div className="hero-character" aria-hidden="true">
        <div className="hero-character__halo" />
        <img
          className="hero-character__image"
          src="/images/hero-character.png"
          alt=""
        />
        <span className="hero-character__label hero-character__label--top">
          PROFILE // ONLINE
        </span>
        <span className="hero-character__label hero-character__label--bottom">
          HUMAN + TABBY
        </span>
      </div>

      <div className="hero-bottom-fade" aria-hidden="true" />

      <div className="hero-scroll-indicator">
        <div className="hero-scroll-indicator__line" />
        <span>SCROLL</span>
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
  const filledStyle: React.CSSProperties = {
    color: "#070810",
    background: "#00e5ff",
  }
  const outlineStyle: React.CSSProperties = {
    color: "#00e5ff",
    border: "1px solid rgba(0,229,255,0.28)",
  }

  return (
    <a
      href={href}
      style={{ ...base, ...(filled ? filledStyle : outlineStyle) }}
      onMouseEnter={(event) => {
        const element = event.currentTarget
        if (filled) {
          element.style.background = "#00ccee"
          element.style.boxShadow = "0 0 28px rgba(0,229,255,0.5)"
        } else {
          element.style.borderColor = "rgba(0,229,255,0.65)"
          element.style.background = "rgba(0,229,255,0.06)"
        }
      }}
      onMouseLeave={(event) => {
        const element = event.currentTarget
        if (filled) {
          element.style.background = "#00e5ff"
          element.style.boxShadow = "none"
        } else {
          element.style.borderColor = "rgba(0,229,255,0.28)"
          element.style.background = "transparent"
        }
      }}
    >
      {children}
    </a>
  )
}

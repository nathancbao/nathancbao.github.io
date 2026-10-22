const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/nathancbao" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nathancbao/" },
  { label: "Email", href: "mailto:ncbao@usc.edu" },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "#05060d",
        borderTop: "1px solid #1c2440",
        padding: "64px clamp(24px,5vw,80px)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            alignItems: "center",
            gap: "40px",
            marginBottom: "48px",
          }}
        >
          {/* Logo + tagline */}
          <div>
            <div
              className="font-orbitron"
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#f4f7ff",
                letterSpacing: "1px",
                marginBottom: "10px",
              }}
            >
              <span style={{ color: "#00e5ff" }}>&lt;</span>NB
              <span style={{ color: "#00e5ff" }}>/&gt;</span>
            </div>
            <p style={{ fontSize: "13px", color: "#657493", lineHeight: 1.7 }}>
              Building software.
              <br />
              One clean commit at a time.
            </p>
          </div>

          {/* Email */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "9px",
                fontWeight: 700,
                color: "#596781",
                letterSpacing: "4px",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              GET IN TOUCH
            </div>
            <a
              href="mailto:ncbao@usc.edu"
              style={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#00e5ff",
                textDecoration: "none",
                transition: "text-shadow 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.textShadow =
                  "0 0 18px rgba(0,229,255,0.65)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.textShadow =
                  "none")
              }
            >
              ncbao@usc.edu
            </a>
          </div>

          {/* Social links */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "flex-end",
              flexWrap: "wrap",
            }}
          >
            {SOCIAL_LINKS.map(({ label, href }) => (
              <SocialLink key={label} href={href} label={label} />
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid #1c2440",
            paddingTop: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontSize: "11px",
              color: "#4e5b78",
              fontFamily: "'Courier New', monospace",
            }}
          >
            © {new Date().getFullYear()} NATHAN BAO. ALL RIGHTS RESERVED.
          </span>
          <span
            style={{
              fontSize: "11px",
              color: "#4e5b78",
              fontFamily: "'Courier New', monospace",
            }}
          >
            DESIGNED &amp; BUILT BY NATHAN BAO.
          </span>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: "10px",
        fontWeight: 700,
        color: "#657493",
        border: "1px solid #1c2440",
        padding: "10px 18px",
        letterSpacing: "3px",
        textTransform: "uppercase",
        textDecoration: "none",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.color = "#00e5ff"
        el.style.borderColor = "rgba(0,229,255,0.3)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLAnchorElement
        el.style.color = "#657493"
        el.style.borderColor = "#1c2440"
      }}
    >
      {label}
    </a>
  )
}

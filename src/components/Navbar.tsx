import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "EDUCATION", href: "#education" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setMenuOpen(false)
    }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  const frosted = scrolled || menuOpen
  const close = () => setMenuOpen(false)

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 clamp(24px, 5vw, 72px)",
          height: "70px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "background 0.4s, border-color 0.4s",
          borderBottom: `1px solid ${frosted ? "#1a2038" : "transparent"}`,
          background: frosted ? "rgba(7,8,16,0.94)" : "transparent",
          backdropFilter: frosted ? "blur(20px)" : "none",
        }}
      >
        <a
          href="#hero"
          className="font-orbitron"
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: "#f4f7ff",
            textDecoration: "none",
            letterSpacing: "1px",
          }}
        >
          <span style={{ color: "#00e5ff" }}>&lt;</span>NB
          <span style={{ color: "#00e5ff" }}>/&gt;</span>
        </a>

        {/* Desktop links */}
        <div
          className="hidden sm:flex"
          style={{ alignItems: "center", gap: "clamp(20px, 3vw, 40px)" }}
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "#71809f",
                textDecoration: "none",
                letterSpacing: "3px",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#f4f7ff")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#71809f")}
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "#070810",
              background: "#00e5ff",
              padding: "10px 26px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00ccee"
              e.currentTarget.style.boxShadow = "0 0 22px rgba(0,229,255,0.45)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#00e5ff"
              e.currentTarget.style.boxShadow = "none"
            }}
          >
            CONTACT
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="sm:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#00e5ff",
            padding: "8px",
            alignItems: "center",
          }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        style={{
          position: "fixed",
          top: "70px",
          left: 0,
          right: 0,
          zIndex: 99,
          background: "rgba(7,8,16,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid #1a2038",
          padding: "8px 24px 28px",
          display: menuOpen ? "flex" : "none",
          flexDirection: "column",
        }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={close}
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "#71809f",
              textDecoration: "none",
              letterSpacing: "3px",
              textTransform: "uppercase",
              padding: "18px 0",
              borderBottom: "1px solid #1c2440",
              display: "block",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#f4f7ff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#71809f")}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={close}
          style={{
            fontSize: "11px",
            fontWeight: 700,
            color: "#070810",
            background: "#00e5ff",
            padding: "16px 0",
            letterSpacing: "3px",
            textTransform: "uppercase",
            textDecoration: "none",
            textAlign: "center",
            marginTop: "20px",
            display: "block",
          }}
        >
          CONTACT
        </a>
      </div>
    </>
  )
}

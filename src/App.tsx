import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Footer from "./components/Footer"

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.opacity = "1"
            el.style.transform = "translateY(0)"
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    )

    document.querySelectorAll("[data-animate]").forEach((el) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.opacity = "0"
      htmlEl.style.transform = "translateY(28px)"
      const delay = htmlEl.dataset.delay ?? "0s"
      htmlEl.style.transition = `opacity 0.75s ease ${delay}, transform 0.75s ease ${delay}`
      observer.observe(htmlEl)
    })

    const hashTarget = window.location.hash
      ? document.querySelector(window.location.hash)
      : null
    const hashFrame = hashTarget
      ? window.requestAnimationFrame(() => hashTarget.scrollIntoView())
      : null

    return () => {
      observer.disconnect()
      if (hashFrame !== null) window.cancelAnimationFrame(hashFrame)
    }
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Footer />
    </>
  )
}

import Navbar from "./components/Navbar"
import ThemeToggle from "./components/ThemeToggle"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Skills from "./pages/Skills"
import Footer from "./components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <ThemeToggle />

      <main className="min-h-screen pt-16 sm:pt-20 bg-white dark:bg-black transition-colors">
        {/* Hero */}
        <section className="min-h-[70vh] flex items-center px-6 pb-16 sm:pb-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Nathan Bao
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
              Hi, I’m Nathan — a computer science student who enjoys building
              software that’s meant to be used in the real world. I’ve worked
              across full-stack development, backend systems, and machine
              learning, with a focus on writing clean, maintainable code that
              scales. I like taking ideas from concept to deployment and
              improving them through iteration, performance tuning, and user
              feedback.
            </p>
          </div>
        </section>
        <Experience />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </>
  )
}

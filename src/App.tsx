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

      <main className="min-h-screen pt-20 bg-white dark:bg-black transition-colors">
        {/* Hero */}
        <section className="min-h-[70vh] flex items-center px-6 pb-24">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Nathan Bao
            </h1>

            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Computer Science student focused on building clean,
              reliable software with thoughtful design.
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
import { useEffect, useState } from "react"
import ProjectCard from "../components/ProjectCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

const PROJECTS = [
  {
    title: "Task Management System",
    description:
      "A clean RESTful backend for managing projects and tasks with authentication.",
    tech: "FastAPI · PostgreSQL · JWT",
    githubUrl: "https://github.com/nathancbao/nathancbao.github.io",
  },
  {
    title: "Gesture Control Interface",
    description:
      "Hand gesture recognition to control desktop input using computer vision.",
    tech: "Python · MediaPipe · PyTorch",
  },
  {
    title: "LeetCode Tracker",
    description:
      "Tracks coding progress and visualizes problem-solving trends.",
    tech: "React · Node · SQL",
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(1)

  function goPrev() {
    setActiveIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length)
  }

  function goNext() {
    setActiveIndex((i) => (i + 1) % PROJECTS.length)
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") {
        setActiveIndex((i) => (i + 1) % PROJECTS.length)
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex((i) =>
          (i - 1 + PROJECTS.length) % PROJECTS.length
        )
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-20 sm:py-32 bg-white dark:bg-black"
    >
      {/* Header */}
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-100">
          Projects
        </h2>
        <p className="mt-2 hidden text-neutral-500 dark:text-neutral-400 sm:block">
          Use arrow keys to explore
        </p>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400 sm:hidden">
          Tap a card to view details
        </p>
      </div>

      {/* Mobile list */}
      <div className="mt-10 px-6 sm:hidden">
        <div className="mx-auto flex max-w-md flex-col gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Fan */}
      <div className="relative mt-12 hidden sm:block lg:mt-20">
        <div className="relative mx-auto flex items-center justify-center sm:h-90 sm:w-90 lg:h-105 lg:w-105">

          {/* LEFT ARROW */}
          <button
            onClick={goPrev}
            aria-label="Previous project"
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20
              z-50
              flex h-11 w-11 items-center justify-center rounded-full
              bg-white dark:bg-neutral-900
              border border-neutral-300 dark:border-neutral-700
              text-[#22C55E] dark:text-[#4ADE80]
              shadow-md
              transition-all duration-150
              hover:scale-105
              hover:shadow-lg
              active:scale-95
              focus:outline-none
            "
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* FAN CARDS */}
          <div className="relative h-full w-full">
            {PROJECTS.map((project, index) => {
              const total = PROJECTS.length

              let offset = index - activeIndex
              if (offset > total / 2) offset -= total
              if (offset < -total / 2) offset += total

              if (Math.abs(offset) > 1) return null

              const x = offset * 180
              const rotate = offset * 5
              const scale = offset === 0 ? 1.08 : 0.92
              const y = offset === 0 ? -12 : 0
              const opacity = offset === 0 ? 1 : 0.35

              return (
                <div
                  key={project.title}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out"
                  style={{
                    transform:
                      "translateX(" +
                      x +
                      "px) translateY(" +
                      y +
                      "px) rotate(" +
                      rotate +
                      "deg) scale(" +
                      scale +
                      ")",
                    opacity,
                    zIndex: offset === 0 ? 10 : 5,
                    pointerEvents: offset === 0 ? "auto" : "none",
                  }}
                >
                  <ProjectCard
                    {...project}
                    isActive={offset === 0}
                    onClick={() => setActiveIndex(index)}
                  />
                </div>
              )
            })}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={goNext}
            aria-label="Next project"
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-20
              z-50
              flex h-11 w-11 items-center justify-center rounded-full
              bg-white dark:bg-neutral-900
              border border-neutral-300 dark:border-neutral-700
              text-[#22C55E] dark:text-[#4ADE80]
              shadow-md
              transition-all duration-150
              hover:scale-105
              hover:shadow-lg
              active:scale-95
              focus:outline-none
            "
          >
            <ChevronRight className="h-5 w-5" />
          </button>

        </div>
      </div>
    </section>
  )
}

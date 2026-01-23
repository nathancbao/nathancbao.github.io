import { useEffect, useRef, useState } from "react"

type ExperienceItemProps = {
  role: string
  company: string
  period: string
  description: string
  isLast?: boolean
  isActive?: boolean
}

function ExperienceItem({
  role,
  company,
  period,
  description,
  isLast,
  isActive,
}: ExperienceItemProps) {
  return (
    <div className="group flex gap-4 sm:gap-6">
      {/* Left timeline dot */}
      <div className="relative mt-2">
        <div
          className={`
            relative z-10
            h-2.5 w-2.5 rounded-full
            transition-all
            ${
              isActive
                ? "bg-[#22C55E] dark:bg-[#4ADE80] ring-4 ring-[#22C55E]/20 dark:ring-[#4ADE80]/20"
                : "bg-neutral-400 dark:bg-neutral-600"
            }
          `}
        />

        {!isLast && (
          <div
            className="
            absolute left-1/2 top-4 bottom-0
            w-px -translate-x-1/2
            bg-neutral-300 dark:bg-neutral-700
            z-0
          "
          />
        )}
      </div>

      {/* Content */}
      <div className="pb-8 sm:pb-10">
        <h3
          className={
            "text-base sm:text-lg font-semibold transition-colors " +
            (isActive
              ? "text-[#22C55E] dark:text-[#4ADE80]"
              : "text-neutral-900 dark:text-neutral-100") +
            " group-hover:text-[#22C55E] dark:group-hover:text-[#4ADE80]"
          }
        >
          {role}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          <span className="font-medium text-neutral-700 dark:text-neutral-300">
            {company}
          </span>{" "}
          · {period}
        </p>
        <p
          className={
            "mt-3 max-w-xl transition-colors " +
            (isActive
              ? "text-neutral-800 dark:text-neutral-200"
              : "text-neutral-600 dark:text-neutral-400")
          }
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const itemRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!items.length) return

    let ticking = false

    const updateActiveIndex = () => {
      ticking = false
      const anchor = window.innerHeight * 0.35
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect()
        const distance = Math.abs(rect.top - anchor)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    const handleScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateActiveIndex)
    }

    updateActiveIndex()
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  return (
    <section
      id="experience"
      className="scroll-mt-24 px-6 py-20 sm:py-28 bg-white dark:bg-black border-t border-neutral-100 dark:border-neutral-900"
    >
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Experience
        </h2>

        <div className="mt-12">
          <div
            ref={(el) => {
              itemRefs.current[0] = el
            }}
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ExperienceItem
              role="Software Engineering Intern"
              company="AI Nomis"
              period="Summer 2024"
              description="Worked on backend infrastructure for AI-driven workflow tools, contributing to early-stage model integration and system design decisions."
              isActive={(hoveredIndex ?? activeIndex) === 0}
            />
          </div>

          <div
            ref={(el) => {
              itemRefs.current[1] = el
            }}
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ExperienceItem
              role="Student Developer"
              company="UC Davis"
              period="2023 – Present"
              description="Built and maintained multiple course and personal projects in systems, machine learning, and frontend development."
              isLast
              isActive={(hoveredIndex ?? activeIndex) === 1}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

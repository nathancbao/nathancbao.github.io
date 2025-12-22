import { useEffect, useRef, useState } from "react"

type SkillGroupProps = {
  title: string
  skills: string[]
  isActive?: boolean
}

function SkillGroup({ title, skills, isActive }: SkillGroupProps) {
  return (
    <div>
      <h3
        className={
          "text-sm font-semibold uppercase tracking-wide transition-colors " +
          (isActive
            ? "text-[#22C55E] dark:text-[#4ADE80]"
            : "text-neutral-500")
        }
      >
        {title}
      </h3>
      <ul className="mt-4 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="
                rounded-full
                border border-neutral-200 dark:border-neutral-700
                px-4 py-1.5
                text-sm
                text-neutral-700 dark:text-neutral-300
                transition-colors
                hover:border-[#22C55E]
                hover:text-[#22C55E]
                dark:hover:border-[#4ADE80]
                dark:hover:text-[#4ADE80]
                hover:shadow-[0_0_0_3px_rgba(34,197,94,0.12)]
                dark:hover:shadow-[0_0_0_3px_rgba(74,222,128,0.12)]
            "
            >
                {skill}
            </li>
        ))}
      </ul>
    </div>
  )
}

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)
  const groupRefs = useRef<Array<HTMLDivElement | null>>([])

  useEffect(() => {
    const items = groupRefs.current.filter(Boolean) as HTMLDivElement[]
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
    <section id="skills" className="scroll-mt-24 px-6 py-20 sm:py-24 bg-white dark:bg-black transition-colors">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Skills
        </h2>

        <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-12 sm:grid-cols-2">
          <div
            ref={(el) => {
              groupRefs.current[0] = el
            }}
          >
            <SkillGroup
              title="Languages"
              skills={["Python", "C++", "C", "JavaScript", "TypeScript", "SQL"]}
              isActive={activeIndex === 0}
            />
          </div>

          <div
            ref={(el) => {
              groupRefs.current[1] = el
            }}
          >
            <SkillGroup
              title="Frameworks & Tools"
              skills={[
                "React",
                "Node.js",
                "FastAPI",
                "Tailwind CSS",
                "Git",
                "Docker",
              ]}
              isActive={activeIndex === 1}
            />
          </div>

          <div
            ref={(el) => {
              groupRefs.current[2] = el
            }}
          >
            <SkillGroup
              title="Systems & Concepts"
              skills={[
                "Operating Systems",
                "File Systems",
                "Concurrency",
                "Networking",
                "Machine Learning",
              ]}
              isActive={activeIndex === 2}
            />
          </div>

          <div
            ref={(el) => {
              groupRefs.current[3] = el
            }}
          >
            <SkillGroup
              title="Databases"
              skills={["PostgreSQL", "SQLite", "Supabase"]}
              isActive={activeIndex === 3}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

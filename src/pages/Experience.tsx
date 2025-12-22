type ExperienceItemProps = {
  role: string
  company: string
  period: string
  description: string
  isLast?: boolean
}

function ExperienceItem({
  role,
  company,
  period,
  description,
  isLast,
}: ExperienceItemProps) {
  return (
    <div className="group flex gap-6">
      {/* Left timeline dot */}
      <div className="relative mt-2">
        <div
            className="
                h-2 w-2 rounded-full
                bg-neutral-400 dark:bg-neutral-600
                transition-colors
                group-hover:bg-[#22C55E]
                dark:group-hover:bg-[#4ADE80]
                group-hover:shadow-[0_0_0_3px_rgba(34,197,94,0.15)]
                dark:group-hover:shadow-[0_0_0_4px_rgba(74,222,128,0.15)]
            "
        />
        {!isLast && (
            <div className="absolute left-1/2 top-4 bottom-0 w-px -translate-x-1/2 bg-neutral-700/40 dark:bg-neutral-700/60" />
        )}
        </div>

      {/* Content */}
      <div className="pb-10">
        <h3
            className="
                text-lg font-semibold
                text-neutral-900 dark:text-neutral-100
                transition-colors
                group-hover:text-[#22C55E]
                dark:group-hover:text-[#4ADE80]
            "
        >
        {role}
        </h3>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
        <span className="font-medium text-neutral-700 dark:text-neutral-300">
            {company}
        </span>{" "}
        · {period}
        </p>
        <p className="mt-3 max-w-xl text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 px-6 py-28 bg-white dark:bg-black border-t border-neutral-100 dark:border-neutral-900">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          Experience
        </h2>

        <div className="mt-12">
          <ExperienceItem
            role="Software Engineering Intern"
            company="AI Nomis"
            period="Summer 2024"
            description="Worked on backend infrastructure for AI-driven workflow tools, contributing to early-stage model integration and system design decisions."
          />

          <ExperienceItem
            role="Student Developer"
            company="UC Davis"
            period="2023 – Present"
            description="Built and maintained multiple course and personal projects in systems, machine learning, and frontend development."
            isLast
          />
        </div>
      </div>
    </section>
  )
}
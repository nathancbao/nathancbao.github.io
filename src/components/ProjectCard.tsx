type ProjectCardProps = {
  title: string
  description: string
  tech: string
  isActive: boolean
  onClick: () => void
  githubUrl?: string
}

export default function ProjectCard({
  title,
  description,
  tech,
  isActive,
  onClick,
  githubUrl,
}: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      className={
        `
        w-90
        min-h-90
        cursor-pointer
        rounded-2xl
        bg-white dark:bg-neutral-950
        border
        p-6
        flex flex-col
        transition-all duration-300 ease-out
        focus:outline-none
        ` +
        (isActive
          ? " border-[#22C55E] dark:border-[#4ADE80] shadow-lg"
          : " border-neutral-200 dark:border-neutral-800 shadow-sm")
      }
    >
      <h3
        className={
          `
          text-xl font-semibold transition-colors
          ` +
          (isActive
            ? " text-[#22C55E] dark:text-[#4ADE80]"
            : " text-neutral-900 dark:text-neutral-100")
        }
      >
        {title}
      </h3>

      <p className="mt-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
        {description}
      </p>

      {/* Bottom row */}
      <div className="mt-auto flex items-center justify-between pt-6">
        <span className="text-sm text-neutral-500">
          {tech}
        </span>

        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
              text-sm font-medium
              text-neutral-400
              hover:text-[#22C55E] dark:hover:text-[#4ADE80]
              transition-colors
            "
          >
            GitHub →
          </a>
        )}
      </div>
    </article>
  )
}
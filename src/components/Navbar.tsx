export default function Navbar() {
  return (
    <header className="
      top-0 z-50 w-full
      bg-white dark:bg-black
      transition-colors
    ">
      <div className="mx-auto flex h-20 max-w-7xl items-center px-6">

        {/* Logo */}
        <div className="
          font-['Space Grotesk']
          font-semibold
          tracking-[-0.035em]
          text-neutral-900 dark:text-neutral-100
        ">
          NB
        </div>

        {/* Nav */}
        <nav className="ml-auto flex items-center gap-8 text-sm">
          {["Experience", "Projects", "Skills"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="
                relative
                text-neutral-600 dark:text-neutral-400
                transition-colors
                hover:text-[#22C55E] dark:hover:text-[#4ADE80]
                after:absolute
                after:left-0
                after:-bottom-1
                after:h-0.5
                after:w-0
                after:bg-[#22C55E] dark:after:bg-[#4ADE80]
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
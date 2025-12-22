import { Sun, Moon } from "lucide-react"
import { useTheme } from "../hooks/useTheme"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        fixed bottom-6 right-6 z-100
        pointer-events-auto
        flex h-12 w-12 items-center justify-center
        rounded-full
        bg-white dark:bg-neutral-900
        border border-neutral-200 dark:border-neutral-700
        shadow-md
        transition
        hover:shadow-lg
      "
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
      ) : (
        <Sun className="h-5 w-5 text-neutral-300 dark:text-neutral-100" />
      )}
    </button>
  )
}
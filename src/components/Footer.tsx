import { Github, Linkedin, Mail, FileText } from "lucide-react"

export default function Footer() {
  return (
    <footer
      id="contact"
      className="
        mt-32 sm:mt-48
        border-t border-neutral-200 dark:border-neutral-800
        bg-white dark:bg-black
        transition-colors
      "
    >
      <div
        className="
          mx-auto max-w-4xl
          px-6 py-20 sm:py-28
          flex flex-col items-center
          text-center
        "
      >
        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Connect
        </h3>

        {/* Icons */}
        <div className="mt-8 sm:mt-10 flex gap-4 sm:gap-6">
          <FooterIcon href="https://github.com/nathancbao" label="GitHub">
            <Github className="h-5 w-5" />
          </FooterIcon>

          <FooterIcon
            href="https://linkedin.com/in/YOUR_LINKEDIN"
            label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </FooterIcon>

          <FooterIcon href="mailto:YOUR_EMAIL@gmail.com" label="Email">
            <Mail className="h-5 w-5" />
          </FooterIcon>

          <FooterIcon href="/Nathan_Bao_Resume.pdf" label="Resume">
            <FileText className="h-5 w-5" />
          </FooterIcon>
        </div>

        {/* Copyright */}
        <p className="mt-12 text-sm text-neutral-500">
          © {new Date().getFullYear()} Nathan Bao. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

function FooterIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="
        flex h-12 w-12 items-center justify-center
        rounded-xl
        border border-neutral-200 dark:border-neutral-700
        text-neutral-600 dark:text-neutral-400
        transition-all duration-200
        hover:-translate-y-0.5
        hover:text-[#22C55E] dark:hover:text-[#4ADE80]
        hover:border-[#22C55E]/40 dark:hover:border-[#4ADE80]/40
        focus:outline-none focus:ring-2 focus:ring-[#22C55E]/30 dark:focus:ring-[#4ADE80]/30
      "
    >
      {children}
    </a>
  )
}

export function Footer() {
  return (
    <>
      <div className="sticky bottom-8 z-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
      <footer className="sticky bottom-0 z-10 bg-white dark:bg-gray-800 shadow-lg text-gray-900 dark:text-white p-2 transition-colors duration-200">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-2 w-full text-white/80 text-xs">
          <p className="mr-2  text-center md:text-start truncate text-gray-700 dark:text-white">
            Made for FreeCodeCamp course "Front End Development Libraries"
          </p>

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://github.com/MohamedLamineF/JavaScriptCalculatorFCC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-purple-500 transition-colors"
            >
              Github
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://www.linkedin.com/in/mohamedlaminef/"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-purple-500 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://x.com/Mohamed_LamineF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-purple-500 transition-colors"
            >
              Twitter
            </a>
            <span className="text-gray-400">•</span>
            <a
              href="https://bsky.app/profile/mohamedlamine.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-white hover:text-purple-500 transition-colors"
            >
              Bluesky
            </a>
          </div>

          <span className="mr-2 text-center md:text-end text-gray-700 dark:text-white">© Lamine</span>
        </div>
      </footer>
    </>
  );
}

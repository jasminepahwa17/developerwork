import Image from "next/image";
export default function About() {
  return (
    <section className="flex-1 grid grid-cols-1 md:grid-cols-5 h-screen">
      <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-gray-200 md:flex md:items-center">
        <div className="w-full py-8 md:py-0 bg-white px-6 pt-16 sm:pt-0">
          <div className="space-y-8 text-center">
            <div className="relative w-28 md:w-40 h-28 md:h-40 mx-auto">
              <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-gray-200">
                <Image
                  src="/images/jas.JPG"
                  alt="Jas avatar"
                  width={160}
                  height={160}
                  className="w-28 md:w-40 h-28 md:h-40 mx-auto"
                />
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Jasmine Pahwa
              </h2>
              <p className="text-lg md:text-xl text-gray-600">
                Frontend Software Engineer
              </p>
              <hr className="h-px w-16 bg-gray-200 mx-auto my-4" />
              <p className="text-sm md:text-base text-gray-600 max-w-xs mx-auto leading-relaxed">
                4 years building scalable frontend systems, currently at
                Ticketmaster
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a
                  href="mailto:jasminepahwa4567@gmail.com"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  jasminepahwa4567@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <svg
                  className="w-4 h-4 text-gray-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-sm text-gray-600">Gurugram, India</span>
              </div>

              <div className="flex items-center justify-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#4b5563"
                  className="w-4 h-4 text-gray-600"
                >
                  <path d="M80-720v-200h200v80H160v120H80Zm720 0v-120H680v-80h200v200h-80ZM80-40v-200h80v120h120v80H80Zm600 0v-80h120v-120h80v200H680ZM280-240h400v-480H280v480Zm0 80q-33 0-56.5-23.5T200-240v-480q0-33 23.5-56.5T280-800h400q33 0 56.5 23.5T760-720v480q0 33-23.5 56.5T680-160H280Zm80-400h240v-80H360v80Zm0 120h240v-80H360v80Zm0 120h240v-80H360v80Zm-80 80v-480 480Z" />
                </svg>
                <a
                  href="/jasmine-resume-software.pdf"
                  download="jasmine-resume-software.pdf"
                  className="text-sm text-gray-600 hover:underline cursor-pointer"
                >
                  Resume
                </a>
              </div>

              <div className="flex items-center justify-center space-x-4 pt-2">
                <a
                  href="https://github.com/jasminepahwa17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/develooperjas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-900"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="currentColor"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-3 flex flex-col md:justify-center">
        <div>
          <div className="py-6 bg-white px-6">
            <div className="space-y-4 max-w-2xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
                  Core Skills
                </h3>
                <div className="h-px w-full bg-gray-200 mt-2"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9DA2AF"
                      stroke-width="2"
                    >
                      <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3M3 16v3a2 2 0 002 2h3m8-2h3a2 2 0 002-2v-3"></path>
                    </svg>
                    <h4 className="text-sm font-medium text-gray-600">
                      Languages
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
                      TypeScript
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
                      JavaScript
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
                      Python
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9DA2AF"
                      stroke-width="2"
                    >
                      <path d="M8 3v3a2 2 0 01-2 2H3m18 0h-3a2 2 0 01-2-2V3M3 16v3a2 2 0 002 2h3m8-2h3a2 2 0 002-2v-3"></path>
                    </svg>
                    <h4 className="text-sm font-medium text-gray-600">
                      Frameworks
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
                      React
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
                      Next.js
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9DA2AF"
                      stroke-width="2"
                    >
                      <path d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"></path>
                    </svg>
                    <h4 className="text-sm font-medium text-gray-600">
                      Backend
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
                      Node.js
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
                      PostgreSQL
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
                      Redis
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9DA2AF"
                      stroke-width="2"
                    >
                      <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
                    </svg>
                    <h4 className="text-sm font-medium text-gray-600">Cloud</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
                      AWS
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
                      Docker
                    </span>
                    <span className="px-2.5 py-1 text-sm bg-gray-50 text-gray-700 rounded-full ring-1 ring-gray-200">
                      Gitlab
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="py-6 bg-white px-6">
            <div className="space-y-4 max-w-2xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
                  Experience
                </h3>
                <div className="h-px w-full bg-gray-200 mt-2"></div>
              </div>
              <div className="space-y-5">
                <div className="relative">
                  <div className="relative pl-4 border-l-2 border-gray-200">
                    <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300"></div>
                    <div className="space-y-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h4 className="text-md font-medium text-gray-900">
                          Software Engineer II
                        </h4>
                        <span className="text-sm text-gray-500">
                          2025 - Present
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-600">
                        Ticketmaster
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Delivered frontend features for high-traffic sports and
                        ticketing products serving 100K+ users
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative pl-4 border-l-2 border-gray-200">
                    <div className="absolute -left-[5px] top-[10px] h-2.5 w-2.5 rounded-full bg-gray-300"></div>
                    <div className="space-y-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h4 className="text-md font-medium text-gray-900">
                          Frontend Engineer
                        </h4>
                        <span className="text-sm text-gray-500">
                          2023 - 2025
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-600">
                        Factacy AI
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Architected multiple frontend and fullstack applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="py-6 bg-white px-6">
            <div className="space-y-4 max-w-2xl mx-auto">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
                  Live works
                </h3>
                <div className="h-px w-full bg-gray-200 mt-2"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="https://embracelives.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex flex-row gap-2">
                    <h4 className="text-md font-medium text-gray-900">
                      Embrace Lives
                    </h4>
                    <img src="/icons/redirect.svg" className="w-4" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Consultation booking platform based on available slots
                  </p>
                </a>
                <a
                  href="https://zepcruit.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex flex-row gap-2">
                    <h4 className="text-md font-medium text-gray-900">
                      Zepcruit AI
                    </h4>
                    <img src="/icons/redirect.svg" className="w-4" />
                  </div>
                  <p className="text-sm text-gray-600">
                    AI-powered hiring & recruitment platform
                  </p>
                </a>
                <a
                  href="https://www.startupinvestors.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex flex-row gap-2">
                    <h4 className="text-md font-medium text-gray-900">
                      Startup Investors
                    </h4>
                    <img src="/icons/redirect.svg" className="w-4" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Find startup investors, angel investors, micro VCs and
                    Series A investors
                  </p>
                </a>
                <a
                  href="https://bidfinite.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
                >
                  <div className="flex flex-row gap-2">
                    <h4 className="text-md font-medium text-gray-900">
                      Bidfinite
                    </h4>
                    <img src="/icons/redirect.svg" className="w-4" />
                  </div>
                  <p className="text-sm text-gray-600">
                    Gamified auction platform for exclusive cars with real-time
                    bidding and interactive features
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import Link from "next/link";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-press-start mb-8 sm:mb-12 md:mb-16 text-center text-blue-500">
          <span className="text-yellow-400">[</span> Pixel Perfect Portfolio{" "}
          <span className="text-yellow-400">]</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {[
            {
              title: "Retro Game Store",
              gradient: "from-purple-500 to-blue-500",
              bottomBarColor: "green-400",
              tags: ["Pixel Design", "E-Commerce", "Animation"],
              description:
                "E-commerce site for classic gaming merchandise with interactive product displays.",
            },
            {
              title: "Pixel Art Gallery",
              gradient: "from-green-400 to-yellow-400",
              bottomBarColor: "blue-500",
              tags: ["Gallery", "Animation", "UI/UX"],
              description:
                "Interactive showcase for digital artists specializing in pixel art.",
            },
            {
              title: "Indie Game Studio",
              gradient: "from-pink-500 to-purple-500",
              bottomBarColor: "yellow-400",
              tags: ["WebGL", "Games", "Interactive"],
              description:
                "Website for an independent game development studio with playable demos.",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 border-4 border-black overflow-hidden shadow-[8px_8px_0_0_#000]"
            >
              <div
                className={`relative h-48 sm:h-56 md:h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
              >
                {index === 0 && (
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white border-4 border-black flex items-center justify-center">
                    <span className="text-black text-xl sm:text-2xl font-press-start">
                      IMG
                    </span>
                  </div>
                )}
                {index === 1 && (
                  <div className="grid grid-cols-8 gap-1 w-24 sm:w-32 h-24 sm:h-32">
                    <div className="bg-purple-500"></div>
                    <div className="bg-blue-500"></div>
                    <div className="bg-green-400"></div>
                    <div className="bg-yellow-400"></div>
                    <div className="bg-pink-500"></div>
                    <div className="bg-purple-500"></div>
                    <div className="bg-blue-500"></div>
                    <div className="bg-green-400"></div>
                  </div>
                )}
                {index === 2 && (
                  <div className="relative w-24 sm:w-32 h-24 sm:h-32">
                    <div className="absolute inset-0 border-4 border-yellow-400 animate-spin"></div>
                    <div className="absolute inset-4 border-4 border-green-400 animate-spin [animation-direction:reverse]"></div>
                  </div>
                )}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-${project.bottomBarColor}`}
                ></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-press-start mb-2 text-yellow-400">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-white mb-3 sm:mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 sm:px-3 sm:py-1 bg-${
                        ["purple-500", "blue-500", "green-400"][i % 3]
                      } text-white text-xs sm:text-sm font-press-start rounded-sm`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link
            href="/portfolio"
            className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-purple-500 text-white text-sm sm:text-base md:text-lg font-mono uppercase border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[0_0_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] transition-all"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

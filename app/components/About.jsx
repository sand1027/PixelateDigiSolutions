"use client";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-black/90">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-press-start mb-8 sm:mb-12 md:mb-16 text-center text-pink-500">
          <span className="text-yellow-400">[</span> About Pixellate{" "}
          <span className="text-yellow-400">]</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
          <div className="lg:w-1/2 w-full">
            <div className="border-4 border-black p-3 sm:p-4 max-w-[80vw] sm:max-w-sm md:max-w-md mx-auto">
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-[2px] sm:gap-1 aspect-[2/1] sm:aspect-[4/3]">
                <div className="col-span-4 sm:col-span-8 bg-purple-500"></div>
                <div className="col-span-1 sm:col-span-2 bg-blue-500"></div>
                <div className="col-span-2 sm:col-span-4 bg-green-400"></div>
                <div className="col-span-1 sm:col-span-2 bg-yellow-400"></div>
                <div className="col-span-1 sm:col-span-3 bg-pink-500"></div>
                <div className="col-span-1 sm:col-span-2 bg-purple-500"></div>
                <div className="col-span-1 sm:col-span-3 bg-blue-500"></div>
                <div className="col-span-1 sm:col-span-1 bg-green-400"></div>
                <div className="col-span-3 sm:col-span-6 bg-yellow-400"></div>
                <div className="col-span-1 sm:col-span-1 bg-pink-500"></div>
                <div className="col-span-4 sm:col-span-8 bg-purple-500"></div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-press-start mb-4 sm:mb-6 text-green-400">
              We Love Pixels!
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-4 text-white">
              Founded in 2015 by a team of web developers and retro gaming
              enthusiasts, Pixellate combines cutting-edge web technologies with
              nostalgic pixel art aesthetics.
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 text-white">
              Our mission is to create websites that stand out from the crowd
              with unique personality and playful interactivity, while
              maintaining professional standards and modern functionality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-purple-500 mr-2 sm:mr-3 flex items-center justify-center text-white">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <span className="text-sm sm:text-base text-white">
                  100+ Projects
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 mr-2 sm:mr-3 flex items-center justify-center text-white">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <span className="text-sm sm:text-base text-white">
                  50+ Clients
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-400 mr-2 sm:mr-3 flex items-center justify-center text-white">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <span className="text-sm sm:text-base text-white">
                  10 Awards
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 mr-2 sm:mr-3 flex items-center justify-center text-white">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <span className="text-sm sm:text-base text-white">5 Years</span>
              </div>
            </div>

            <Link
              href="#contact"
              className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-pink-500 text-white text-sm sm:text-base font-mono uppercase border-2 border-black shadow-[4px_4px_0_0_#000] hover:shadow-[2px_2px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] active:shadow-[0_0_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] transition-all"
            >
              Let's Talk Pixels
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 md:mt-20">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-press-start mb-8 sm:mb-10 md:mb-12 text-center text-blue-500">
            Meet The Team
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-gray-800 border-4 border-black p-4 sm:p-6 text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-3xl sm:text-4xl text-white">
                <i className="fas fa-user-astronaut"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-press-start mb-2 text-yellow-400">
                Alex Pixel
              </h4>
              <p className="text-green-400 mb-2 text-sm sm:text-base">
                Founder & Lead Designer
              </p>
              <p className="text-xs sm:text-sm text-white">
                Pixel art wizard and UI/UX specialist with a passion for retro
                gaming aesthetics.
              </p>
            </div>

            <div className="bg-gray-800 border-4 border-black p-4 sm:p-6 text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 to-green-400 rounded-full flex items-center justify-center text-3xl sm:text-4xl text-white">
                <i className="fas fa-code"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-press-start mb-2 text-yellow-400">
                Sam Developer
              </h4>
              <p className="text-green-400 mb-2 text-sm sm:text-base">
                Senior Developer
              </p>
              <p className="text-xs sm:text-sm text-white">
                Full-stack developer who brings interactive elements to life
                with clean code.
              </p>
            </div>

            <div className="bg-gray-800 border-4 border-black p-4 sm:p-6 text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-green-400 to-yellow-400 rounded-full flex items-center justify-center text-3xl sm:text-4xl text-white">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-press-start mb-2 text-yellow-400">
                Maya Artist
              </h4>
              <p className="text-green-400 mb-2 text-sm sm:text-base">
                Pixel Artist
              </p>
              <p className="text-xs sm:text-sm text-white">
                Creates stunning pixel art and animations that give our projects
                unique character.
              </p>
            </div>

            <div className="bg-gray-800 border-4 border-black p-4 sm:p-6 text-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-full flex items-center justify-center text-3xl sm:text-4xl text-white">
                <i className="fas fa-headset"></i>
              </div>
              <h4 className="text-lg sm:text-xl font-press-start mb-2 text-yellow-400">
                Taylor Support
              </h4>
              <p className="text-green-400 mb-2 text-sm sm:text-base">
                Client Relations
              </p>
              <p className="text-xs sm:text-sm text-white">
                Ensures smooth communication and that every project meets client
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

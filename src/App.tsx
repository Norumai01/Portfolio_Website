import SakuraBackground from "./components/SakuraBackground.tsx";
import { useState, useEffect, useRef } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {AlignLeft, CodeXml, Mail, MapPin} from "lucide-react";
import ProfilePic from "./assets/profile_pic.avif";


function App() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const aboutMeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    // Observes if user has scrolled to the following section.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up-fade');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Add more sections here tp apply the following effect.
    if (aboutMeRef.current) observer.observe(aboutMeRef.current);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);


  return (
    <div className="min-h-screen text-white">
      <SakuraBackground />

      <div className={`relative z-20 transition-colors duration-500 ${scrolled ? "bg-[#1E1B2E]" : ""}`}>
        {/* Dropdown Menu */}
        <nav className="absolute container max-w-full">
          <div className="flex items-center justify-between mb-6 mt-3">
            <div className="dropdown">
              <div
                tabIndex={0}
                className="ml-3 p-3 flex items-center rounded-full hover:bg-[#2A2744] cursor-pointer border border-[#1B1829] transition-colors duration-300">
                <AlignLeft className="text-gray-300" />
              </div>
              <ul className="menu menu-sm dropdown-content bg-[#1B1829] rounded-box ml-3 w-36">
                <li><a>Home</a></li>
                <li><a>About Me</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header className="min-h-screen flex items-center container mx-auto px-4">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B9D] to-[#4A9DFF] animate-fade-in">
              Johnny Nguyen
            </h1>
            <p className="text-md md:text-lg font-light text-gray-300 mb-8 animate-fade-in animation-delay-400">
              "If you don't take risks, you can't create a future." - Monkey D. Luffy, One Piece
            </p>
            <p className="text-xl md:text-2xl text-gray-200 mb-6 animate-fade-in animation-delay-300">
              Software Engineer & Anime Geek
            </p>
            <div className="flex justify-center gap-4 animate-fade-in animation-delay-200">
              <a id="discord" href="https://discordapp.com/users/norumai" className="w-6 md:w-8">
                <FaDiscord size="auto" className="hover:text-[#FF6B9D] transition-colors cursor-pointer"/>
              </a>
              <a id="gitHub" href="https://github.com/Norumai01" className="w-6 md:w-8">
                <FaGithub size="auto" className="hover:text-[#FF6B9D] transition-colors cursor-pointer"/>
              </a>
              <a id="linkedIn" href="https://www.linkedin.com/in/johnnynguyen2001" className="w-6 md:w-8">
                <FaLinkedin size="auto" className="hover:text-[#FF6B9D] transition-colors cursor-pointer"/>
              </a>
              <a id="gmail" href="mailto:johnnydinhnguyen2001@gmail.com" className="w-6 md:w-8">
                <SiGmail size="auto" className="hover:text-[#FF6B9D] transition-colors cursor-pointer"/>
              </a>
            </div>
          </div>
        </header>

        {/* About Me */}
        <section className="container mx-auto px-4 py-16">
          <div ref={aboutMeRef} className="opacity-0 translate-y-4">
            <h2 className="flex gap-3 items-center justify-center text-2xl md:text-3xl mb-12 font-bold">
              <CodeXml className="text-[#FF6B9D] w-10 h-10 md:w-12 md:h-12" />
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center space-y-9">
                <div id="avatar">
                  <div className="size-84 md:size-96 relative hover:scale-105 overflow-hidden rounded-full shadow-xl hover:shadow-2xl shadow-[#181524] transition-all duration-400">
                    <div className="flex h-full w-full items-center justify-center">
                      <img src={ProfilePic} alt="Profile Picture" className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
                <div id="info" className="max-w-md">
                  <div className="text-xl md:text-2xl font-sans font-semibold text-gray-300">
                    Johnny N.
                  </div>
                  <div className="text-lg md:text-xl font-sans text-gray-400">
                    Norumai
                  </div>
                  <p className="text-md md:text-lg font-sans text-gray-300 mt-4">
                    Tech gremlin passionate for software architecture, cloud solutions, and embedded systems. Focused on user-centered design and security.
                  </p>
                  <p id="location" className="flex gap-3 items-center text-xs md:text-sm font-sans text-gray-200 mt-6">
                    <MapPin className="text-[#FF6B9D] size-5 md:size-6"/>
                    North Carolina, United States
                  </p>
                  <p id="email" className="flex gap-3 items-center text-xs md:text-sm font-sans text-gray-200 mt-2">
                    <Mail className="text-[#FF6B9D] size-5 md:size-6"/>
                    johnnydinhnguyen2001@gmail.com
                  </p>
                </div>
              </div>
              <div className=""></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App

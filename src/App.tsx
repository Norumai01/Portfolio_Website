import SakuraBackground from "./components/SakuraBackground.tsx";
import { useState, useEffect } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AlignLeft } from "lucide-react";


function App() {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (


    <div className="min-h-screen text-white">
      <SakuraBackground />

      <div className={`relative z-10 transition-colors duration-500 ${scrolled ? "bg-[#1E1B2E]" : ""}`}>
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
                <li><a>Profile</a></li>
                <li><a>Projects</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="min-h-screen flex items-center container mx-auto px-4">
          <div className="w-full text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B9D] to-[#4A9DFF] animate-fade-in">
              Johnny Nguyen
            </h1>
            <p className="text-md md:text-lg text-gray-300 mb-8 animate-fade-in animation-delay-400">
              "If you don't take risks, you can't create a future." - Monkey D. Luffy, One Piece
            </p>
            <p className="text-xl md:text-2xl font-medium text-gray-100 mb-6 animate-fade-in animation-delay-300">
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
      </div>
    </div>
  )
}

export default App

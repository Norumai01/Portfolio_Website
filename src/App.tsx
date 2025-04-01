import SakuraBackground from "./components/SakuraBackground.tsx";
import { useState, useEffect, useRef, RefObject } from "react";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AlignLeft, CodeXml, Mail, MapPin, Heart, FolderGit, Users } from "lucide-react";
import ProfilePic from "./assets/profile_pic.avif";
import { knowledge } from "./data/knowledge.ts";
import KnowledgeSection from "./components/KnowledgeSection.tsx";
import {experiences} from "./data/experiences.ts";
import ExperienceSection from "./components/ExperienceSection.tsx";
import {projects, ProjectCategory} from "./data/projects.ts";
import ProjectSection from "./components/ProjectSection.tsx";

function App() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const aboutMeRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const experienceRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement | null>(null);
  const projectsRef: RefObject<HTMLDivElement | null> = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectCategory | null>(null);

  const eraseProjectModelClose = () => {
    setSelectedProject(null);
  }

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollableHeight: number = document.documentElement.scrollHeight - window.innerHeight;
      const currentScrollPosition: number = window.scrollY
      const bottomThreshold: number = 50 // How close to the bottom to trigger (Ex. 100px)

      setScrolled(totalScrollableHeight - currentScrollPosition <= bottomThreshold);
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
    if (experienceRef.current) observer.observe(experienceRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);

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
        <nav className="absolute xl:fixed container max-w-full">
          <div className="flex items-center justify-between mb-6 mt-3">
            <div className="dropdown">
              <div
                tabIndex={0}
                className="ml-3 p-3 flex items-center rounded-full hover:bg-[#2A2744] cursor-pointer border border-[#1B1829] transition-all duration-400 shadow-[#181524] shadow-lg hover:shadow-xl">
                <AlignLeft className="text-gray-300" />
              </div>
              <ul className="menu menu-sm dropdown-content bg-[#1B1829] rounded-box ml-3 w-xs space-y-2 md:w-36 md:space-y-0">
                <li><a href="#Home" className="hover:text-[#FF6B9D]">Home</a></li>
                <li><a href="#aboutMe" className="hover:text-[#FF6B9D]">About Me</a></li>
                <li><a href="#Experiences" className="hover:text-[#FF6B9D]">Experiences</a></li>
                <li><a href="#Projects" className="hover:text-[#FF6B9D]">Projects</a></li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Header */}
        <header id="Home" className="min-h-screen flex items-center container mx-auto px-4">
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
        <section id="aboutMe" className="container mx-auto px-4 py-16">
          <div ref={aboutMeRef} className="opacity-0 translate-y-4">
            <h2 className="flex gap-3 items-center justify-center text-2xl md:text-3xl mb-12 font-bold">
              <CodeXml className="text-[#FF6B9D] w-10 h-10 md:w-12 md:h-12" />
              About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center space-y-9">
                <div id="avatar">
                  <div className="size-84 md:size-90 lg:size-102 relative hover:scale-105 overflow-hidden rounded-full shadow-xl hover:shadow-2xl shadow-[#181524] transition-all duration-400">
                    <div className="flex h-full w-full items-center justify-center">
                      <img src={ProfilePic} alt="Profile Picture" className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
                <div id="info" className="max-w-md">
                  <div className="text-xl md:text-2xl font-sans font-semibold text-gray-300">
                    Johnny Nguyen
                  </div>
                  <div className="text-lg md:text-xl font-sans text-gray-400">
                    Norumai
                  </div>
                  <p className="text-md md:text-lg font-sans text-gray-300 mt-4">
                    Tech gremlin passionate for software architecture, full-stack development, and embedded systems. Focused on user-centered design and security.
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
              <div className="flex flex-col space-y-6">
                {knowledge.map((skill) => (
                  <KnowledgeSection
                    key={skill.id}
                    title={skill.title}
                    items={skill.items}
                    icon={skill.icon}
                    className={skill.className}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="Experiences" className="container mx-auto px-4 py-16">
          <div ref={experienceRef} className="opacity-0 translate-y-4">
            <h2 className="flex gap-3 items-center justify-center text-2xl md:text-3xl mb-12 font-bold">
              <Users className="text-[#FF6B9D] w-10 h-10 md:w-12 md:h-12" />
              Experiences
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {experiences.map((experience) => (
                <ExperienceSection
                  key={experience.id}
                  company={experience.company}
                  title={experience.title}
                  startDate={experience.startDate}
                  endDate={experience.endDate}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="Projects" className="container mx-auto px-4 py-16">
          <div ref={projectsRef} className="opacity-0 translate-y-4">
            <h2 className="flex gap-3 items-center justify-center text-2xl md:text-3xl mb-12 font-bold">
              <FolderGit className="text-[#FF6B9D] w-10 h-10 md:w-12 md:h-12" />
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.map((project) => (
                <ProjectSection
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  fullDescription={project.fullDescription}
                  tags={project.tags}
                  images={project.images}
                  thumbnail={project.thumbnail}
                  links={project.links}
                  haveModal={project.haveModal}
                  onClick={() => {
                    setSelectedProject(project);
                    document.getElementById('project_modal').showModal()
                  }}
                />
              ))}
            </div>
          </div>
        </section>

        <dialog id="project_modal" className="modal transition-opacity duration-300">
          <div className="modal-box transition-all duration-400 scale-95 opacity-0 modal-open:scale-100 modal-open:opacity-100">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={eraseProjectModelClose} className="btn btn-sm btn-circle btn-ghost">✕</button>
            </form>
            {selectedProject && (
              <>
                <h3 className="font-bold text-lg">{selectedProject?.title}</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>
              </>
            )}
          </div>
          <form method="dialog" className="modal-backdrop transition-opacity duration-300 opacity-0 modal-open:opacity-50">
            <button onClick={eraseProjectModelClose}>close</button>
          </form>
        </dialog>

        {/* Footer */}
        <footer className="relative mt-16">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF6B9D] to-transparent opacity-30" />
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2 text-gray-300">
                <Heart className="w-4 h-4 text-[#FF6B9D]" />
                <span>Norumai</span>
              </div>
              <div className="flex gap-6">
                <a id="discord" href="https://discordapp.com/users/norumai" className="w-5">
                  <FaDiscord size="auto" className="hover:text-[#FF6B9D] transition-colors cursor-pointer"/>
                </a>
                <a id="gitHub" href="https://github.com/Norumai01" className="w-5">
                  <FaGithub size="auto" className="hover:text-[#FF6B9D] transition-colors cursor-pointer"/>
                </a>
                <a id="linkedIn" href="https://www.linkedin.com/in/johnnynguyen2001" className="w-5">
                  <FaLinkedin size="auto" className="hover:text-[#FF6B9D] transition-colors cursor-pointer"/>
                </a>
                <a id="gmail" href="mailto:johnnydinhnguyen2001@gmail.com" className="w-5">
                  <SiGmail size="auto" className="hover:text-[#FF6B9D] transition-colors cursor-pointer"/>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App

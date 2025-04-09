import { ProjectLink } from "../data/projects.ts";

interface ProjectsProps {
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  images: string[];
  thumbnail: string;
  links: ProjectLink[];
  haveModal: boolean;
  onClick?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ title, description, tags, thumbnail, haveModal, onClick }) => {

  const handleClick = () => {
    if (haveModal && onClick) {
      onClick();
    }
  }

  return (
    <div
      className={`bg-gradient-to-br from-[#181525] to-[#1d1d30] overflow-hidden rounded-lg shadow-[#181524] shadow-lg transform transition-all duration-300
      hover:scale-105 hover:shadow-xl ${haveModal ? "cursor-pointer" : ""}`}
      onClick={handleClick}
    >
      <img src={thumbnail} alt="Project Preview" className="w-full h-48 md:h-60 object-cover" />
      <div className="p-6">
        <h3 className="text-[#FF6B9D] font-semibold text-xl md:text-2xl">{title}</h3>
        <p className="text-gray-400 text-sm md:text-base mt-4 md:mt-6">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4 md:mt-6">
          {tags.map((tag: string) => (
            <span
              className="px-3 py-1 bg-[#FF6B9D]/10 text-[#FF6B9D] rounded-full text-xs md:text-sm hover:bg-[#FF6B9D]/20 transition-colors"
            >
            {tag}
          </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects;
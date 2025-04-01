import adan_transport from "../assets/adan_thumbnail.png"
import social_media from "../assets/social_media_thumbnail.png"
import fribbels from "../assets/fribbels.png"

export interface ProjectCategory {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  images: string[];
  thumbnail: string;
  links: string[];
  haveModal: boolean;
}

export const projects: ProjectCategory[] = [
  {
    id: 1,
    title: "Adan's Transport",
    description: "Real-time control system and algorithms for a medical transportation vehicle using Grand Central M4 Express, Arduino, and CircuitPython.",
    tags: ["Arm-Cortex Microcontrollers", "Grand Central M4 Express", "Arduino", "CircuitPython", "Real-time Control System", "C++", "Python", "I2C/SPI Communication"],
    images: [],
    fullDescription: "",
    links: [],
    thumbnail: adan_transport,
    haveModal: true
  },
  {
    id: 2,
    title: "StarSocial - Social Media Application",
    description: "Social media web application targeted towards video game enthusiasts whose play Gacha games. Creating a community for enthusiasts to share their favorite moments.",
    tags: ["Spring Boot", "Spring Security", "React.js + Vite", "MySQL", "Redis", "Java", "TypeScript", "Tailwind CSS", "DaisyUI", "XML"],
    images: [],
    fullDescription: "",
    links: [],
    thumbnail: social_media,
    haveModal: false
  },
  {
    id: 3,
    title: "Fribbels' HSR Optimizer (Open-Source Contributor)",
    description: "A Honkai Star Rail optimizer, relic scorer, damage calculator, and various other tools for building and gearing characters. Special thanks to Fribbels and other contributors for the development as well.",
    tags: ["Ant Design", "Vitest", "i18next", "TypeScript", "YAML"],
    images: [],
    fullDescription: "",
    links: [],
    thumbnail: fribbels,
    haveModal: true
  }
]
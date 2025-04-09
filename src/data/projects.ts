import adan_transport from "../assets/adan_thumbnail.png"
import social_media from "../assets/social_media_thumbnail.png"
import fribbels from "../assets/fribbels.png"

// Adan's Transport Project
import cart_1 from "../assets/adan_transport/Cart_1.jpg"
import outside from "../assets/adan_transport/Outside.jpg"
import electronics from "../assets/adan_transport/Electronics.jpg"
import pcb from "../assets/adan_transport/PCB.jpg"
import poster_sd2 from "../assets/adan_transport/Poster_SD2.jpg"

// Fribbels' Optimizer Project
import home from "../assets/fribbels_op/home.png"
import features from "../assets/fribbels_op/features.png"
import characters from "../assets/fribbels_op/characters.png"
import relics from "../assets/fribbels_op/relics.png"
import warp from "../assets/fribbels_op/Warp.png"

import { FaVideo, FaGithub, FaGlobe } from "react-icons/fa";
import { IconType } from "react-icons";


export interface ProjectCategory {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  images: string[];
  thumbnail: string;
  links: ProjectLink[];
  haveModal: boolean;
}

export interface ProjectLink {
  icon: IconType;
  webName: string;
  link: string;
}

export const projects: ProjectCategory[] = [
  {
    id: 1,
    title: "Adan's Transport",
    description: "Real-time control system and algorithms for a medical transportation vehicle using Grand Central M4 Express, Arduino, and CircuitPython.",
    tags: ["Arm-Cortex Microcontrollers", "Grand Central M4 Express", "Arduino", "CircuitPython", "Real-time Control System", "C++", "Python", "I2C/SPI Communication"],
    images: [cart_1, outside, electronics, pcb, poster_sd2],
    fullDescription: `Transport Cart Control System for Patients with Disabilities
    
    As the Embedded Software Developer for this senior design project at UNC Charlotte, I implemented a real-time control system for an electric transport cart enabling patients with disabilities to navigate previously inaccessible terrains.
    
    I developed CircuitPython software for an Adafruit Grand Central M4 Express microcontroller that interfaced with a Wii Nunchuck controller, creating intuitive vehicle operation with a 10-gear system and differential steering. The system featured comprehensive safety mechanisms including emergency protocols, force-stops, and orientation sensor integration for stability.
    
    Beyond my primary responsibilities, I assisted with electrical schematics and PCB designs. This first prototype established a foundation for future development in accessibility transportation, bringing new mobility opportunities to people with disabilities.`,
    links: [
      {
        icon: FaGithub,
        webName: "GitHub",
        link: "https://github.com/Norumai01/Senior_Design"
      },
      {
        icon: FaVideo,
        webName: "Google",
        link: "https://drive.google.com/file/d/1MDExMd9sKot28C66yG3clsqGDctzbmbh/view?usp=sharing"
      }
    ],
    thumbnail: adan_transport,
    haveModal: true
  },
  {
    id: 2,
    title: "StarSocial - Social Media Application",
    description: "Social media web application targeted towards video game enthusiasts whose play Gacha games. Creating a community for enthusiasts to share their favorite moments.",
    tags: ["Spring Boot", "Spring Security", "React.js + Vite", "MySQL", "Redis", "Java", "TypeScript", "Tailwind CSS", "DaisyUI", "XML"],
    images: [],
    fullDescription: "description",
    links: [],
    thumbnail: social_media,
    haveModal: false
  },
  {
    id: 3,
    title: "Fribbels' HSR Optimizer (Open-Source Contributor)",
    description: "A Honkai Star Rail optimizer, relic scorer, damage calculator, and various other tools for building and gearing characters. Special thanks to Fribbels and other contributors for the development as well.",
    tags: ["Ant Design", "Vitest", "i18next", "TypeScript", "YAML"],
    images: [home, features, characters, relics, warp],
    fullDescription: `Fribbels Star Rail Optimizer. 
    
    Game tools for showcasing characters' status, optimal relics (equipments), damages calculation, and planning for future characters for the game, Honkai Star Rail.
    
    I have contributed to key development of the tool, Warp Planner. Warp Planner allows users to plan future pulling chances using pre-obtained in-game currencies inputted by the player.
    
    Contribution includes modifying user interfaces to add new features developed, utilizing complex algorithms and probability distribution for computing pre-obtained rewards into the pulling chance, and comprehensive unit tests ensuring functionality of the resources prediction and probability.`,
    links: [
      {
        icon: FaGithub,
        webName: "GitHub",
        link: "https://github.com/fribbels/hsr-optimizer"
      },
      {
        icon: FaGlobe,
        webName: "Website",
        link: "https://fribbels.github.io/hsr-optimizer/"
      }
    ],
    thumbnail: fribbels,
    haveModal: true
  }
]
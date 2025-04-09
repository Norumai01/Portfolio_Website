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
    fullDescription: `Research project for Senior Design at University of North Carolina at Charlotte for the client, Ideas for Good. Tasked with the development of a medical vehicle for transporting patients across terrains, never before by disabilities under $10,000 USD budget. 
    
    The Embedded Software Developer of the team, I was responsible for the implementation of the real-time control system that operates the vehicle from the integration of a driving system to brute-testing the vehicle on several rough terrains. Taking on outside tasks including documenting electrical schematics, PCB designs and assisting electrical engineers.
    
    Integrating technologies including 3-D orientation sensors (Gyroscope, Rotation Vector), emergency protocol system, and force-stops, prioritizing deep-leveled of safety that ensures patients stability on the wheelchair and vehicle.`,
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
    fullDescription: "description",
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
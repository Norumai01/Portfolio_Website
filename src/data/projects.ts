import adan_transport from "../assets/adan_thumbnail.png"
import fribbels from "../assets/fribbels.png"
import wwltp from "../assets/wwltp_thumbnail.png"
import smart_climate from "../assets/smart_climate_thumbnail.png"

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

// We Would Like To Play Project
import homePage from "../assets/wwltp/home.png"
import newsPage from "../assets/wwltp/news.png"
import articlePage from "../assets/wwltp/news_page.png"
import editorPage from "../assets/wwltp/editor_1.png"
import editorPage2 from "../assets/wwltp/editor_2.png"

// ThermaLink - Smart Room Climate Control System
import room_layout from "../assets/thermalink/general_room_layout.png"
import hardware_two from "../assets/thermalink/hardware_2.png"
import iot_messages from "../assets/thermalink/messages.png"
import mobile_app from "../assets/thermalink/mobile_app.png"
import network_architect from "../assets/thermalink/network_tech.png"


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
    description: "Real-time control system and algorithms for a medical transportation vehicle using Grand Central M4 Express, Arduino, and System Testing with Python.",
    tags: ["Grand Central M4 Express", "Arduino", "Real-Time System", "C++", "Python", "I2C/SPI Communication", "DC Motors", "Sensors Integration", "Motorsports"],
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
    title: "We Would Like To Play",
    description: "Esports News and Media platform using Payload CMS and Next.js, sharing the latest video games, esports news and tournaments. Contacted by We Would Like To Play (WWLTP).",
    fullDescription: `Esports News and Media Platform
  
    I was contacted by We Would Like To Play, a startup organization passionate about esports and video games. They needed help migrating 1000+ articles to a modern platform that could handle their growing content library and provide a better experience for both editors and readers.

    I built them a full-stack news platform using Next.js and Payload CMS with PostgreSQL. The system features a rich-text editor dashboard for content management, integrated APIs from IGDB, PandaScore, and Grid.gg for real-time esports data, and smart caching strategies to keep everything running fast. I implemented role-based access control, SEO optimization, server-side static generation, and automatic image optimization.

    I also set up comprehensive testing with Vitest, CI/CD pipelines with GitHub Actions, and deployed everything on Vercel. The result is a scalable platform that handles high traffic with sub-second load times and automatically updates esports data every 15 minutes.`,
    tags: ["Next.js", "PostgreSQL", "Payload CMS", "TypeScript", "Vercel", "CI/CD", "GitHub Actions", "Tailwind CSS", "API Integration", "Grid.gg", "PandaScore", "IGDB"],
    images: [homePage, newsPage, articlePage, editorPage, editorPage2],
    thumbnail: wwltp,
    links: [],
    haveModal: true
  },
  {
    id: 3,
    title: "ThermaLink - Smart Room Climate Control System",
    description: "ThermaLink is a Smart Room Climate Control System designed to provide independent temperature control for individual rooms within a multi-occupant living environment. CSC 591 - Internet of Things (IoT)",
    fullDescription: `Smart Room Climate Control System
    In living spaces such shared housing, where multiple occupants live together, common challenge arises where the entire house is either heat/cool from a centralized HVAC systems. To address this issue, my team created smart climate control container that also runs through an IoT network and can be control via a mobile application.
    
    In our network, we have two different ESP32s. Using the AHT20 Temperature Sensor, we can monitor the temperature of the controlled room and desired rooms as well. We also have a Raspberry Pi Camera using OpenCV and YOLO models to detect occupant presences in the room. All publishing messages to a MQTT broker.
    
    Using those published messages to our MQTT broker, we have a Backend Server, programmed with Spring Boot (Java) that collects those data and storing them into the database via REST APIs. The mobile application, prograammed with TypeScript and React Native, polls from the backend APIs every 3-5 seconds to simulate real-time monitoring.
    `,
    tags: ["Internet of Things (IoT)", "Embedded Systems", "Relay Controller", "Smart HVAC System", "ESP32", "Raspberry Pi", "ESP-IDF", "Spring Boot", "React Native"],
    images: [room_layout, smart_climate, hardware_two, mobile_app, network_architect, iot_messages],
    thumbnail: smart_climate,
    links: [
      {
        icon: FaGithub,
        webName: "GitHub",
        link: "https://github.com/HMC03/ThermaLink"
      },
    ],
    haveModal: true
  },
  {
    id: 4,
    title: "Fribbels' HSR Optimizer (Open-Source Contributor)",
    description: "A Honkai Star Rail optimizer, relic scorer, damage calculator, and various other tools for building and gearing characters. Special thanks to Fribbels and other contributors for the development as well.",
    tags: ["Ant Design", "Vitest", "i18next", "TypeScript", "YAML"],
    images: [home, features, characters, relics, warp],
    fullDescription: `Fribbels Star Rail Optimizer 
    
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
  },
]
import { Terminal, Cpu, LucideIcon, Wrench, Monitor, Box } from 'lucide-react'

type KnowledgeCategory = {
  id: number;
  title: string;
  items: string[];
  icon: LucideIcon;
  className?: string;
}

export const knowledge: KnowledgeCategory[] = [
  {
    id: 1,
    title: "Programming Languages",
    items: [
      "C++", "Java", "C",  "Python", "JavaScript/TypeScript",
      "Bash", "PowerShell",
      "HTML", "CSS"
    ],
    icon: Terminal,
    className: "h-6 w-6 md:h-8 md:w-8"
  },
  {
    id: 2,
    title: 'Hardware Technologies',
    items: [
      "Raspberry Pi", "Arduino", "STM32", "ESP32", "Internet of Things (IoT)",
      "I2C", "SPI", "UART",
      "Oscilloscope", "Multimeter", "Function Generator", "Logic Analyzer", "Electronics", "Soldering"
    ],
    icon: Wrench,
    className: "h-6 w-6 md:h-8 md:w-8"
  },
  {
    id: 3,
    title: "Software Technologies",
    items: [
      "Spring Boot", "Next.js", "React.js", "Payload CMS",
      "MySQL", "PostgreSQL", "Redis",
      "GitHub Actions (CI/CD)", "Postman", "JUnit", "Vitest", "Playwright",
      "Docker", "AWS"
    ],
    icon: Cpu,
    className: "h-6 w-6 md:h-8 md:w-8"
  },
  {
    id: 4,
    title: 'Development Tools',
    items: [
      "JetBrains IDEs", "Visual Studio Code", "IntelliJ IDEA", "WebStorm",
      "Git", "GitHub"
    ],
    icon: Monitor,
    className: "h-6 w-6 md:h-8 md:w-8"
  },
  {
    id: 5,
    title: "Operating System",
    items: [
      "Windows", "Ubuntu", "ArchLinux"
    ],
    icon: Box,
    className: "h-6 w-6 md:h-8 md:w-8"
  },
]
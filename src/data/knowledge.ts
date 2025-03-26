import {Terminal, Cpu, LucideIcon, Wrench, Monitor, Box} from 'lucide-react'

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
      "Java", "TypeScript", "C++", "C", "Python",
      "PowerShell", "HTML5", "CSS3", "JSON", "XML"
    ],
    icon: Terminal,
    className: "h-6 w-6 md:h-8 md:w-8"
  },
  {
    id: 2,
    title: "Technologies",
    items: [
      "Spring Boot", "React", "Vite", "Tailwind CSS",
      "Docker", "Redis", "MySQL", "Microsoft Azure",
      "Git", "GitHub"
    ],
    icon: Cpu,
    className: "h-6 w-6 md:h-8 md:w-8"
  },
  {
    id: 3,
    title: 'Hardware Technologies',
    items: [
      "Adafruit", "Arduino", "STM32", "CircuitPython",
      "Oscilloscope", "Multimeter", "Signal Generator",
      "Logic Analyzer", "Electronics", "Soldering"
    ],
    icon: Wrench,
    className: "h-6 w-6 md:h-8 md:w-8"
  },
  {
    id: 4,
    title: 'IDEs',
    items: [
      "Notepad", "IntelliJ IDEA", "Visual Studio Code",
      "WebStorm", "Vim", "Anaconda"
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
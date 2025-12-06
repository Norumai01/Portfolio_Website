interface ExperienceCategory {
  id: number;
  company: string;
  title: string;
  startDate: string;
  endDate: string;
}

export const experiences: ExperienceCategory[] = [
  {
    id: 1,
    company: "We Would Like To Play",
    title: "Software Engineer (Volunteer)",
    startDate: "May 2025",
    endDate: "Nov. 2025"
  },
  {
    id: 2,
    company: "M.E.T. Repairs & KeyCode.Help",
    title: "Full-Stack Developer",
    startDate: "Dec. 2024",
    endDate: "Jun. 2025"
  },
  {
    id: 3,
    company: "University of North Carolina at Charlotte",
    title: "Research Assistant (Embedded Software Engineer)",
    startDate: "Jan. 2023",
    endDate: "Dec. 2023"
  },
  {
    id: 4,
    company: "Home Food Business (Self-Employed)",
    title: "Cook Assistant",
    startDate: "Jan. 2014",
    endDate: "Mar. 2025"
  }
]
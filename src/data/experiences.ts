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
    company: "M.E.T. Repairs & KeyCode.Help",
    title: "Full-Stack Developer",
    startDate: "Dec. 2024",
    endDate: "Present"
  },
  {
    id: 2,
    company: "University of North Carolina at Charlotte",
    title: "Research Assistant",
    startDate: "Jan. 2023",
    endDate: "Dec. 2023"
  },
  {
    id: 3,
    company: "Home Food Business (Self-Employed)",
    title: "Cook Assistant",
    startDate: "Jan. 2014",
    endDate: "Mar. 2025"
  }
]
import { Clock } from  'lucide-react';

interface ExperienceCardProps {
  company : string;
  title: string;
  startDate: string;
  endDate: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ company, title, startDate, endDate }) => {
  return (
    <div className="bg-gradient-to-br from-[#181525] to-[#1d1d30] rounded-lg p-6 shadow-[#181524] shadow-lg transform transition-all duration-300
    hover:scale-105 hover:shadow-xl">
      <h3 className="text-[#FF6B9D] font-semibold text-xl md:text-2xl">{company}</h3>
      <p className="text-gray-300 text-lg md:text-xl mt-4 md:mt-6">{title}</p>
      <div className="flex items-center gap-2 mt-4 md:mt-6 text-gray-500">
        <Clock className="size-4 md:size-5" />
        <span className="text-sm md:text-base">{startDate} - {endDate}</span>
      </div>
    </div>
  )
}

export default ExperienceCard;
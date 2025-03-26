import { LucideIcon } from "lucide-react";

type KnowledgeSectionProps = {
  title: string;
  items: string[];
  icon: LucideIcon;
  className?: string;
}

const KnowledgeSection: React.FunctionComponent<KnowledgeSectionProps> = ({ title, items, icon: Icon, className }) => {
  return (
    <div className="bg-gradient-to-br from-[#181525] to-[#1d1d30] rounded-lg p-6 shadow-[#181524] shadow-lg transform transition-all duration-300
    hover:scale-105 hover:shadow-xl">
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <Icon className={`text-[#FF6B9D] ${className}`} />
        <h3 className="font-semibold text-xl md:text-2xl">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item: string) => (
          <span
            className="px-3 py-1 bg-[#FF6B9D]/10 text-[#FF6B9D] rounded-full text-xs md:text-sm hover:bg-[#FF6B9D]/20 transition-colors"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default KnowledgeSection;
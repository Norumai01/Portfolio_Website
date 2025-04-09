import { IconType } from "react-icons";

type CarouselLinkProps = {
  webName: string;
  link: string;
  icon: IconType;
  className?: string;
}

const CarouselLinks: React.FunctionComponent<CarouselLinkProps> = ({ webName, link, icon: Icon, className }) => {
  return (
    <a id={webName} href={link} className="w-8 md:w-10">
      <Icon size="auto" className={`hover:text-[#FF6B9D] transition-colors cursor-pointer ${className}`} />
    </a>
  )
}

export default CarouselLinks;
import {useEffect, useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

interface ImageCarouselProps {
  images: string[] | undefined;
  isOpen: boolean;
  className?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, isOpen, className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
    }
  }, [isOpen]);

  const nextImageIndex = () => {
    if (!images || images.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  const prevImageIndex = () => {
    if (!images || images.length === 0) return;
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }


  return (
    <div className={`flex justify-center overflow-y-auto p-2 ${className}`}>
      {/* Carousel */}
      <div className="relative w-full h-auto rounded-2xl overflow-hidden border-2 border-[#FF6B9D] shadow-sm shadow-[#FF6B9D]">
        <img
          src={images ? images[currentImageIndex] : undefined}
          alt={images ? `Project Screenshot` : "Error loading images..."}
          className="w-full h-full object-cover"
        />

        {/* Controls */}
        {images && (
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prevImageIndex}
              className="p-2 rounded-full bg-black/30 text-white hover:bg-black/70 transition-colors duration-300 cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImageIndex}
              className="p-2 rounded-full bg-black/30 text-white hover:bg-black/70 transition-colors duration-300 cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 right-4 bg-black/30 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageCarousel;
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

interface CarouselModalProps {
  images: string[]; // Array of image URLs for the project
  initialIndex: number; // Initially clicked image index
  onClose: () => void; // Close modal callback
}

const CarouselModal: React.FC<CarouselModalProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="no-select fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      {/* Close Button */}
      <AiOutlineClose
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl cursor-pointer z-50 hover:text-red-500 transition-transform transform hover:scale-110"
      />
      
      {/* Left Arrow */}
      <div className="absolute left-4 md:left-6 text-white text-3xl md:text-4xl cursor-pointer z-50">
        <div
          className="bg-hoverColor bg-opacity-50 hover:bg-opacity-80 rounded-full p-3 hover:text-white transition-all duration-300 ease-in-out"
          onClick={handlePrev}
        >
          <AiOutlineLeft />
        </div>
      </div>

      {/* Image container */}
      <div className="relative w-full max-w-[90%] md:max-w-[80%] h-[70%] md:h-[80%] rounded-lg shadow-lg flex justify-center items-center p-4 md:p-6">
        <Image
          src={images[currentIndex]}
          alt={`carousel image ${currentIndex + 1}`}
          layout="fill"
          objectFit="contain"
          className="rounded-lg transition-all duration-300"
        />
      </div>

      {/* Right Arrow */}
      <div className="absolute right-4 md:right-6 text-white text-3xl md:text-4xl cursor-pointer z-50">
        <div
          className="bg-hoverColor bg-opacity-50 hover:bg-opacity-80 rounded-full p-3 hover:text-white transition-all duration-300 ease-in-out"
          onClick={handleNext}
        >
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default CarouselModal;

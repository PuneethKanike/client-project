import { useState, useEffect, MouseEvent } from "react";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

interface CarouselModalProps {
  images: string[]; // Array of image URLs for the project
  initialIndex: number; // Initially clicked image index
  onClose: () => void; // Close modal callback
}

const CarouselModal: React.FC<CarouselModalProps> = ({ images, initialIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isMagnifying, setIsMagnifying] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileView, setIsMobileView] = useState(false);

  // Check the window width to determine if the view is mobile or not
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768); // Disable magnification if screen width is <= 768px
    };

    // Initial check
    checkMobileView();

    // Add event listener to handle window resize
    window.addEventListener("resize", checkMobileView);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener("resize", checkMobileView);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
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
      <div
        className="relative w-full max-w-[100%] md:max-w-[100%] h-[1000%] md:h-[100%] rounded-lg shadow-lg flex justify-center items-center p-4 md:p-6"
        onMouseMove={isMobileView ? undefined : handleMouseMove}
        onMouseEnter={isMobileView ? undefined : () => setIsMagnifying(true)}
        onMouseLeave={isMobileView ? undefined : () => setIsMagnifying(false)}
      >
        <div
          className="relative w-full h-full"
          style={{
            backgroundImage: isMagnifying && !isMobileView ? `url(${images[currentIndex]})` : 'none',
            backgroundSize: isMagnifying ? '200%' : 'contain',
            backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`,
            transition: 'background-size 0.3s ease',
          }}
        >
          {/* Image will be hidden on hover by reducing opacity */}
          <Image
            src={images[currentIndex]}
            alt={`carousel image ${currentIndex + 1}`}
            layout="fill"
            objectFit="contain"
            className={`rounded-lg transition-opacity duration-300 ${isMagnifying && !isMobileView ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
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

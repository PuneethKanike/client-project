import { useState } from "react";
import { eShop, jobJunction, realEstate } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import CarouselModal from "./CarouselModal"; // Import the modal component
import { StaticImageData } from 'next/image';

import { p1i1 } from "@/public/assets";
import { p1i2 } from "@/public/assets";
import { p1i3 } from "@/public/assets";
import { p1i4 } from "@/public/assets";
import { p1i5 } from "@/public/assets";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  // Each project can have its own set of related images
  const projectOneImages = [p1i1, p1i2, p1i3, p1i4, p1i5];
  const projectTwoImages = [jobJunction, "/path/to/relatedImage1.jpg", "/path/to/relatedImage2.jpg"];
  const projectThreeImages = [realEstate, "/path/to/relatedImage1.jpg", "/path/to/relatedImage2.jpg"];

  // Handle image click
  const handleImageClick = (images: (string | StaticImageData)[], index: number) => {
    const imageUrls = images.map((image) =>
      typeof image === 'string' ? image : image.src
    );
    setCurrentImages(imageUrls); // Set the converted URLs
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="project" className="relative max-w-container mx-auto lgl:px-20 py-24">
      {/* Content */}
      <div className="relative z-10">
        <SectionTitle title="Some Things I have Designed" titleNo="03" />
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          {/* Project One */}
          <div className="flex flex-col xl:flex-row gap-6">
            <div
              className="w-full xl:w-96 h-auto relative group"
              onClick={() => handleImageClick(projectOneImages, 0)}
            >
              <div className="w-full h-72 overflow-hidden rounded-lg">
                <Image
                  className="container-left rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl object-cover w-full h-full cursor-pointer"
                  src={p1i1}
                  alt="eShop"
                  layout="fill"
                />
              </div>
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-start items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Design</p>
                <h3 className="container-right text-2xl font-bold">Forever - (An E-Commerce Web App)</h3>
              </div>
              <p className="container-right bg-[#b090e7] text-sm text-slate-900 md:text-lg p-2 md:p-6 rounded-md">
                Programmed a full-stack e-commerce website allowing users to browse products, filter by categories, add
                items to a cart, and complete purchases with COD, Stripe, or Razorpay.
              </p>
            </div>
          </div>

          {/* Project Two */}
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <div
              className="w-full xl:w-96  h-auto relative group"
              onClick={() => handleImageClick(projectTwoImages, 0)}
            >
              <div className="w-full h-72 overflow-hidden rounded-lg">
                <Image
                  className="rounded-xl container-right transform transition duration-300 hover:scale-105 hover:shadow-xl object-cover w-full h-full cursor-pointer"
                  src={jobJunction}
                  alt="Job Junction"
                  layout="fill"
                />
              </div>
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-start items-start text-left z-10">
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Design</p>
                <h3 className="container-right text-2xl font-bold">Job Junction (Job Portal Web App)</h3>
              </div>
              <p className="xl:-mr-16  container-left bg-[#b090e7] text-sm text-slate-900 md:text-lg p-2 md:p-6 rounded-md">
                Engineered a full-stack job portal website that allows users to browse job listings, search for jobs, apply for
                positions, and provides an employer dashboard for managing job applications.
              </p>
            </div>
          </div>

          {/* Project Three */}
          <div className="flex flex-col xl:flex-row gap-6">
            <div
              className="w-full xl:w-96  h-auto relative group"
              onClick={() => handleImageClick(projectThreeImages, 0)}
            >
              <div className="w-full h-72 overflow-hidden rounded-lg">
                <Image
                  className= "container-left rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl object-cover w-full h-full cursor-pointer"
                  src={realEstate}
                  alt="Real Estate"
                  layout="fill"
                />
              </div>
            </div>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-start items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">Featured Design</p>
                <h3 className="container-left text-2xl font-bold">LiveLink (Real-Estate Web App)</h3>
              </div>
              <p className="container-right bg-[#b090e7] text-sm text-slate-900 md:text-lg p-2 md:p-6 rounded-md">
                Created a comprehensive real estate platform where users can register, manage profiles, list properties,
                perform advanced searches, and contact landlords directly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <CarouselModal images={currentImages} initialIndex={selectedImageIndex} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;

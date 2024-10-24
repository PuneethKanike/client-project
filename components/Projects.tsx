import { useState } from "react";
import { eShop, jobJunction, realEstate } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import CarouselModal from "./CarouselModal"; // Import the modal component
import { StaticImageData } from "next/image";

import { p1i1 } from "@/public/assets";
import { p1i2 } from "@/public/assets";
import { p1i3 } from "@/public/assets";
import { p1i4 } from "@/public/assets";
import { p1i5 } from "@/public/assets";
import { p1i6 } from "@/public/assets";
import { p1i7 } from "@/public/assets";
import { p1i8 } from "@/public/assets";
import { p1i9 } from "@/public/assets";
import { p1i10 } from "@/public/assets";
import { p1i11 } from "@/public/assets";

//project2
import { p2i1 } from "@/public/assets";
import { p2i2 } from "@/public/assets";
import { p2i3 } from "@/public/assets";
import { p2i4 } from "@/public/assets";
import { p2i5 } from "@/public/assets";
import { p2i6 } from "@/public/assets";
import { p2i7 } from "@/public/assets";
import { p2i8 } from "@/public/assets";
import { p2i9 } from "@/public/assets";

//project3
import { p3i1 } from "@/public/assets";
import { p3i2 } from "@/public/assets";
import { p3i3 } from "@/public/assets";
import { p3i4 } from "@/public/assets";
import { p3i5 } from "@/public/assets";
import { p3i6 } from "@/public/assets";
import { p3i7 } from "@/public/assets";
import { p3i8 } from "@/public/assets";

//project4
import { p4i1 } from "@/public/assets";
import { p4i2 } from "@/public/assets";
import { p4i3 } from "@/public/assets";
import { p4i4 } from "@/public/assets";
import { p4i5 } from "@/public/assets";
import { p4i6 } from "@/public/assets";
import { p4i7 } from "@/public/assets";
import { p4i8 } from "@/public/assets";
import { p4i9 } from "@/public/assets";
import { p4i10 } from "@/public/assets";
import { p4i11 } from "@/public/assets";
import { p4i12 } from "@/public/assets";
import { p4i13 } from "@/public/assets";
import { p4i14 } from "@/public/assets";

//project5
import { p5i1 } from "@/public/assets";
import { p5i2 } from "@/public/assets";
import { p5i3 } from "@/public/assets";
import { p5i4 } from "@/public/assets";
import { p5i5 } from "@/public/assets";
import { p5i6 } from "@/public/assets";
import { p5i7 } from "@/public/assets";
import { p5i8 } from "@/public/assets";
import { p5i9 } from "@/public/assets";
import { p5i10 } from "@/public/assets";
import { p5i11 } from "@/public/assets";
import { p5i12 } from "@/public/assets";
import { p5i13 } from "@/public/assets";
import { p5i14 } from "@/public/assets";
import { p5i15 } from "@/public/assets";
import { p5i16 } from "@/public/assets";
import { p5i17 } from "@/public/assets";
import { p5i18 } from "@/public/assets";

//project6
import { p6i1 } from "@/public/assets";
import { p6i2 } from "@/public/assets";
import { p6i3 } from "@/public/assets";
import { p6i4 } from "@/public/assets";
import { p6i5 } from "@/public/assets";

//project7
import { p7i1 } from "@/public/assets";
import { p7i2 } from "@/public/assets";
import { p7i3 } from "@/public/assets";
import { p7i4 } from "@/public/assets";
import { p7i5 } from "@/public/assets";
import { p7i6 } from "@/public/assets";
import { p7i7 } from "@/public/assets";
import { p7i8 } from "@/public/assets";
import { p7i9 } from "@/public/assets";
import { p7i10 } from "@/public/assets";
import { p7i11 } from "@/public/assets";
import { p7i12 } from "@/public/assets";
import { p7i13 } from "@/public/assets";
import { p7i14 } from "@/public/assets";
import { p7i15 } from "@/public/assets";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState<string[]>([]);

  // Each project can have its own set of related images
  const projectOneImages = [
    p1i11,
    p1i1,
    p1i2,
    p1i3,
    p1i4,
    p1i5,
    p1i6,
    p1i7,
    p1i8,
    p1i9,
    p1i10,
  ];
  const projectTwoImages = [
    p2i1,
    p2i2,
    p2i3,
    p2i4,
    p2i5,
    p2i6,
    p2i7,
    p2i8,
    p2i9,
  ];
  const projectThreeImages = [p3i1, p3i2, p3i3, p3i4, p3i5, p3i6, p3i7, p3i8];
  const projectFourImages = [
    p4i14,
    p4i1,
    p4i2,
    p4i3,
    p4i4,
    p4i5,
    p4i6,
    p4i7,
    p4i8,
    p4i9,
    p4i10,
    p4i11,
    p4i12,
    p4i13,
  ];

  const projectFiveImages = [p5i18, p5i1, p5i2, p5i3, p5i4, p5i5, p5i6, p5i7, p5i8, p5i9, p5i10, p5i11, p5i12, p5i13, p5i14, p5i15, p5i16, p5i17];
  const projectSixImages = [p6i5, p6i1, p6i2, p6i3, p6i4 ];
  const projectSevenImages = [p7i15, p7i1, p7i2, p7i3, p7i4, p7i5, p7i6, p7i7, p7i8, p7i9, p7i10, p7i11, p7i12, p7i13, p7i14];

  // Handle image click
  const handleImageClick = (
    images: (string | StaticImageData)[],
    index: number
  ) => {
    const imageUrls = images.map((image) =>
      typeof image === "string" ? image : image.src
    );
    setCurrentImages(imageUrls); // Set the converted URLs
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section
      id='project'
      className='relative max-w-container mx-auto lgl:px-20 py-24'
    >
      {/* Content */}
      <div className='relative z-10'>
        <SectionTitle title='Some Things I have Designed' titleNo='03' />
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
          {/* Project One */}
          <div className='flex flex-col xl:flex-row gap-6'>
            <div
              className='w-full xl:w-96 h-auto relative group'
              onClick={() => handleImageClick(projectOneImages, 0)}
            >
              <div className='w-full h-72 overflow-hidden rounded-lg'>
                <Image
                  className='container-left rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl object-cover w-full h-full cursor-pointer'
                  src={p1i11}
                  alt='eShop'
                  layout='fill'
                />
              </div>
            </div>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-start items-end text-right xl:-ml-16 z-10'>
              <div>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                  Featured Design
                </p>
                <h3 className='container-right text-2xl font-bold'>Design 1</h3>
              </div>
              <p className='container-right bg-[#b090e7] text-sm text-slate-900 md:text-lg p-2 md:p-6 rounded-md'>
                Programmed a full-stack e-commerce website allowing users to
                browse products, filter by categories, add items to a cart, and
                complete purchases with COD, Stripe, or Razorpay.
              </p>
            </div>
          </div>

          {/* Project Two */}
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <div
              className='w-full xl:w-96  h-auto relative group'
              onClick={() => handleImageClick(projectTwoImages, 0)}
            >
              <div className='w-full h-72 overflow-hidden rounded-lg'>
                <Image
                  className='rounded-xl container-right transform transition duration-300 hover:scale-105 hover:shadow-xl object-cover w-full h-full cursor-pointer'
                  src={p2i1}
                  alt='Job Junction'
                  layout='fill'
                />
              </div>
            </div>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-start items-start text-left z-10'>
              <div>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                  Featured Design
                </p>
                <h3 className='container-right text-2xl font-bold'>Design 2</h3>
              </div>
              <p className='xl:-mr-16  container-left bg-[#b090e7] text-sm text-slate-900 md:text-lg p-2 md:p-6 rounded-md'>
                Engineered a full-stack job portal website that allows users to
                browse job listings, search for jobs, apply for positions, and
                provides an employer dashboard for managing job applications.
              </p>
            </div>
          </div>

          {/* Project Three */}
          <div className='flex flex-col xl:flex-row gap-6'>
            <div
              className='w-full xl:w-96  h-auto relative group'
              onClick={() => handleImageClick(projectThreeImages, 0)}
            >
              <div className='w-full h-72 overflow-hidden rounded-lg'>
                <Image
                  className='container-left rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl object-cover w-full h-full cursor-pointer'
                  src={p3i1}
                  alt='Real Estate'
                  layout='fill'
                />
              </div>
            </div>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-start items-end text-right xl:-ml-16 z-10'>
              <div>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                  Featured Design
                </p>
                <h3 className='container-left text-2xl font-bold'>Design 3</h3>
              </div>
              <p className='container-right bg-[#b090e7] text-sm text-slate-900 md:text-lg p-2 md:p-6 rounded-md'>
                Created a comprehensive real estate platform where users can
                register, manage profiles, list properties, perform advanced
                searches, and contact landlords directly.
              </p>
            </div>
          </div>

          {/* project 4 */}
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <div
              className='w-full xl:w-96  h-auto relative group'
              onClick={() => handleImageClick(projectFourImages, 0)}
            >
              <div className='w-full h-72 overflow-hidden rounded-lg'>
                <Image
                  className='rounded-xl container-right transform transition duration-300 hover:scale-105 hover:shadow-xl object-cover w-full h-full cursor-pointer'
                  src={p4i14}
                  alt='Job Junction'
                  layout='fill'
                />
              </div>
            </div>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-start items-start text-left z-10'>
              <div>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                  Featured Design
                </p>
                <h3 className='container-right text-2xl font-bold'>Design 4</h3>
              </div>
              <p className='xl:-mr-16  container-left bg-[#b090e7] text-sm text-slate-900 md:text-lg p-2 md:p-6 rounded-md'>
                Engineered a full-stack job portal website that allows users to
                browse job listings, search for jobs, apply for positions, and
                provides an employer dashboard for managing job applications.
              </p>
            </div>
          </div>

          {/* project 5 */}
          <div className='flex flex-col xl:flex-row gap-6'>
            <div
              className='w-full xl:w-96  h-auto relative group'
              onClick={() => handleImageClick(projectFiveImages, 0)}
            >
              <div className='w-full h-72 overflow-hidden rounded-lg'>
                <Image
                  className='container-left rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl object-cover w-full h-full cursor-pointer'
                  src={p5i18}
                  alt='Real Estate'
                  layout='fill'
                />
              </div>
            </div>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-start items-end text-right xl:-ml-16 z-10'>
              <div>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                  Featured Design
                </p>
                <h3 className='container-left text-2xl font-bold'>Design 5</h3>
              </div>
              <p className='container-right bg-[#b090e7] text-sm text-slate-900 md:text-lg p-2 md:p-6 rounded-md'>
                Created a comprehensive real estate platform where users can
                register, manage profiles, list properties, perform advanced
                searches, and contact landlords directly.
              </p>
            </div>
          </div>

          {/* project 6 */}
          <div className='flex flex-col xl:flex-row-reverse gap-6'>
            <div
              className='w-full xl:w-96  h-auto relative group'
              onClick={() => handleImageClick(projectSixImages, 0)}
            >
              <div className='w-full h-72 overflow-hidden rounded-lg'>
                <Image
                  className='rounded-xl container-right transform transition duration-300 hover:scale-105 hover:shadow-xl object-cover w-full h-full cursor-pointer'
                  src={p6i5}
                  alt='Job Junction'
                  layout='fill'
                />
              </div>
            </div>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-start items-start text-left z-10'>
              <div>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                  Featured Design
                </p>
                <h3 className='container-right text-2xl font-bold'>Design 6</h3>
              </div>
              <p className='xl:-mr-16  container-left bg-[#b090e7] text-sm text-slate-900 md:text-lg p-2 md:p-6 rounded-md'>
                Engineered a full-stack job portal website that allows users to
                browse job listings, search for jobs, apply for positions, and
                provides an employer dashboard for managing job applications.
              </p>
            </div>
          </div>

          {/* project 7 */}
          <div className='flex flex-col xl:flex-row gap-6'>
            <div
              className='w-full xl:w-96  h-auto relative group'
              onClick={() => handleImageClick(projectSevenImages, 0)}
            >
              <div className='w-full h-72 overflow-hidden rounded-lg'>
                <Image
                  className='container-left rounded-xl transform transition duration-300 hover:scale-105 hover:shadow-xl object-cover w-full h-full cursor-pointer'
                  src={p7i15}
                  alt='Real Estate'
                  layout='fill'
                />
              </div>
            </div>
            <div className='w-full xl:w-1/2 flex flex-col gap-6 justify-start items-end text-right xl:-ml-16 z-10'>
              <div>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                  Featured Design
                </p>
                <h3 className='container-left text-2xl font-bold'>Design 7</h3>
              </div>
              <p className='container-right bg-[#b090e7] text-sm text-slate-900 md:text-lg p-2 md:p-6 rounded-md'>
                Created a comprehensive real estate platform where users can
                register, manage profiles, list properties, perform advanced
                searches, and contact landlords directly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <CarouselModal
          images={currentImages}
          initialIndex={selectedImageIndex}
          onClose={closeModal}
        />
      )}
    </section>
  );
};

export default Projects;

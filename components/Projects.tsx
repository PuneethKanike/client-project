import { eShop, cyberImg, noorShop, jobJunction, realEstate } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className=" relative max-w-container mx-auto lgl:px-20 py-24">
      {/* Background Image Div */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-center rotate-90 over "
        style={{
          backgroundImage: "url('../assets/images/bg7.png')", // Set the background image
          backgroundSize: 'cover', // Adjust size as needed
        }}
      />
      {/* Content on top of background */}
      <div className="relative z-10">
        <SectionTitle title="Some Things I have Built" titleNo="03" />
        {/* ============ project One Start here ================ */}
        <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://mern-ecommerce-app-frontend.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded"
                  src={eShop}
                  alt="amazonImg"
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Forever - ( An E-Commerce Web App )</h3>
              </div>
              <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
                Programmed a full-stack e-commerce website allowing users to browse products, filter by categories, add
                items to a cart, and complete purchases{" "}
                with <span className="text-textGreen">COD</span> and <span className="text-textGreen">Stripe</span> or <span className="text-textGreen">Razorpay</span>.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>Tailwind</li>
                <li>Cloudinary</li>
                <li>Stripe</li>
                <li>Razorpay</li>
                <li>Vercel</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/PuneethKanike/mern-ecommerce-app"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>

                <a
                  className="hover:text-textGreen duration-300"
                  href="https://mern-ecommerce-app-frontend.vercel.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
          {/* ============ project One End here ================== */}
          {/* ============ project Two Start here ================ */}
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://mern-job-sns6.onrender.com/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded"
                  src={jobJunction}
                  alt="cyberImg"
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Job Junction ( Job Portal Web App )</h3>
              </div>
              <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
                Engineered a full-stack job portal website that allows users to browse job listings, search for jobs, apply for
                positions, and provides an <span className="text-textGreen">employer dashboard</span> for managing job applications.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>Tailwind</li>
                <li>Shadcn UI</li>
                <li>Redux</li>
                <li>Cloudinary</li>
                <li>Render</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/PuneethKanike/job-portal"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://mern-job-sns6.onrender.com/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
          {/* ============ project Two End here ================== */}
          {/* ============ project Three Start here ============== */}
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full xl:w-1/2 h-auto relative group"
              href="https://mern-estate-fp7e.onrender.com/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain rounded"
                  src={realEstate}
                  alt="noorShop"
                />
                <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </a>
            <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
              <div>
                <p className="font-titleFont text-textGreen text-sm tracking-wide">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">LiveLink ( Real-Estate Web App )</h3>
              </div>
              <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
                Created a comprehensive real estate platform where users can register, manage profiles, list properties,
                perform advanced searches, and contact landlords directly.
              </p>
              <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>React</li>
                <li>Tailwind</li>
                <li>Oauth</li>
                <li>Socket.io</li>
                <li>Firebase</li>
                <li>Render</li>
              </ul>
              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/PuneethKanike/mern-estate"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://mern-estate-fp7e.onrender.com/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
          {/* ============ project Three End here ================== */}
        </div>
      </div>
    </section>
  );
};

export default Projects;

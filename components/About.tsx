import { profileImg } from "@/public/assets"; // Import your profile image
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="relative max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      {/* Background Image Div */}
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-left opacity-5 "
        style={{
          backgroundImage: "url('../assets/images/bg4.png')", // Set the background image
          backgroundSize: '700px', // Adjust size as needed
        }}
      />
      
      {/* Content on top of background */}
      <div className="about-container relative z-10">
        <SectionTitle title="About Me" titleNo="01" />
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
            <p>
             I am an Interior Designer based in Dubai. I hold a degree in Interior Design from Shrinivas university. I am deeply passionate about enhancing spaces and creating aesthetically pleasing environments. I specialize in transforming residential and commercial spaces, blending functionality with elegance. Constantly working on innovative designs to refine my skills. I thrive on bringing unique visions to life through creative design solutions.
            </p>
           
            <p>Here are a few technologies I have been working with recently:</p>
            {/* <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                JavaScript (ES6+)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Next.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                React
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Node.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                TypeScript
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Express.js
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                MongoDB
              </li>
              <li className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                Tailwind CSS
              </li>
            </ul> */}
          </div>
          <div className="w-full lgl:w-1/3 h-80 relative group">
            <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
              <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                <Image
                  className="rounded-lg h-full object-cover"
                  src={profileImg}
                  alt="profileImg"
                />
                <div className="lgl:inline-block absolute w-full h-80 bg-hoverColor/40 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </div>
            <div className="lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-8 group-hover:-translate-y-5 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

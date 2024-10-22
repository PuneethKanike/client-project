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
        className="flipit absolute inset-0 z-0 bg-no-repeat bg-center opacity-50"
        style={{
          backgroundImage: "url('../assets/images/bg9.png')", // Set the background image
          
        }}
      />
      {/* Content on top of background */}
      <div className="relative z-10">
        <SectionTitle title="About Me" titleNo="01" />
        <div className="flex flex-col lgl:flex-row gap-16">
          <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
            <p>
              Hi, I am a Full Stack Developer passionate about building dynamic, user-friendly web applications. I specialize in the <span className="text-textGreen">MERN</span> stack (MongoDB, Express.js, React.js, and Node.js) and have experience developing full-stack projects, including real estate platforms, e-commerce websites, and job portals.
            </p>
            <p>
              I hold a Masters degree in <span className="text-textGreen">Computer Applications (MCA)</span> with <span className="text-textGreen"> 8.57 CGPA</span>, and I am always eager to expand my skill set by diving into new technologies. My hands-on experience with React, Tailwind CSS, Framer Motion, and Material UI allows me to create modern, responsive, and engaging front-end designs.
            </p>
            <p>
              In addition to front-end expertise, I have built scalable backends using Node.js, Express.js, and MongoDB, with deployments on <span className="text-textGreen">Render</span> and <span className="text-textGreen">Vercel</span>. I am driven by solving real-world problems through coding, whether it is optimizing user experiences or streamlining complex workflows.
            </p>
            <p>Here are a few technologies I have been working with recently:</p>
            <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
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
            </ul>
          </div>
          <div className="w-full lgl:w-1/3 h-80 relative group">
            <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
              <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                <Image
                  className="rounded-lg h-full object-cover"
                  src={profileImg}
                  alt="profileImg"
                />
                <div className="lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
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

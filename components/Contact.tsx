import { useState } from "react";
import { UserIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline"; // Import icons

const Contact = () => {
  

  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
      <p className="font-titleFont text-lg text-textGreen font-semibold flex items-center tracking-wide">
        04. What’s Next?
      </p>
      <h2 className="font-titleFont text-5xl font-semibold">Get In Touch</h2>
      <p className="max-w-[600px] text-center text-textDark">
        I’m currently looking for opportunities, my inbox is always open.
        Whether you want to approach me or just want to say hi, I’ll try my best
        to get back to you!
      </p>

      <form
         action="https://formspree.io/f/mwpejavr" method='post'
        className="w-full max-w-[600px] mt-6 flex flex-col gap-4"
      >
        {/* Name field with icon */}
        <div className="relative flex items-center">
          <UserIcon className="absolute left-3 h-5 w-5 text-textGreen" />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            
            
            required
            className="w-full h-14 pl-10 pr-4 bg-bodyColor border border-textGreen rounded-md focus:outline-none focus:ring-2 focus:ring-hoverColor"
          />
        </div>

        {/* Email field with icon */}
        <div className="relative flex items-center">
          <EnvelopeIcon className="absolute left-3 h-5 w-5 text-textGreen" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            id="email"

            required
            className="w-full h-14 pl-10 pr-4 bg-bodyColor border border-textGreen rounded-md focus:outline-none focus:ring-2 focus:ring-hoverColor"
          />
        </div>

        {/* Message field with icon */}
        <div className="relative flex">
          <ChatBubbleLeftRightIcon className="absolute left-3 top-3 h-5 w-5 text-textGreen" />
          <textarea
            name="message"
            placeholder="Your Message"
            id="message"
            required
            className="w-full h-36 pl-10 bg-bodyColor pr-4 py-2 border border-textGreen rounded-md focus:outline-none focus:ring-2 focus:ring-hoverColor resize-none"
          />
        </div>

        <button
          type="submit"
className="w-full h-14 border bg-purple-900 border-textGreen font-titleFont text-sm text-bodyColor tracking-wider rounded-md hover:bg-hoverColor hover:text-textGreen duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

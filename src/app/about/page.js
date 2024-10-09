import React from "react";

const About = () => {
  return (
    <>
      <section className="py-20">
        <div className="container mx-auto text-center flex flex-col md:flex-row items-center justify-center w-full min-h-screen">
          
          {/* About Heading */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
              About Me
            </h2>
          </div>

          {/* About Text and Button */}
          <div className="flex flex-col w-full md:w-1/2 px-4 md:px-8">
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              I am a developer who loves creating modern web experiences. With
              expertise in React, Next.js, and front-end development, I build
              high-quality, responsive websites.
            </p>

            {/* Button */}
            <a
              href="/about"
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-purple-600 transition duration-300 max-w-[200px] self-center md:self-start"
            >
              Learn More About Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

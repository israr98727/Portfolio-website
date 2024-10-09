"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import the Image component
import Navbar from "../components/Navbar";

// Sample data for skills
const skillsData = [
  {
    id: 1,
    title: "JavaScript",
    description:
      "JavaScript is a versatile programming language used for web development, allowing developers to create interactive and dynamic web applications.",
    imageUrl: "/images/images.png", // Replace with your image path
  },
  {
    id: 2,
    title: "React",
    description:
      "React is a popular JavaScript library for building user interfaces, enabling developers to create reusable UI components and manage application state effectively.",
    imageUrl: "/images/react.png", // Replace with your image path
  },
  {
    id: 3,
    title: "Next.js",
    description:
      "Next.js is a React framework that enables server-side rendering, static site generation, and building scalable applications with ease.",
    imageUrl: "/images/nextjs.jpeg", // Replace with your image path
  },
];

const Skills = () => {
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);

  return (
    <>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-purple-800 text-white py-10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">My Skills</h2>

          {/* Skill Buttons */}
          <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-10">
            {skillsData.map((skill) => (
              <button
                key={skill.id}
                onClick={() => setActiveSkill(skill)}
                className={`px-6 py-2 rounded-full text-white transition duration-300 ${
                  activeSkill.id === skill.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              >
                {skill.title}
              </button>
            ))}
          </div>

          {/* Active Skill Box */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 via-purple-500 to-purple-800 p-4 md:p-8 shadow-lg rounded-lg">
            {/* Text Section */}
            <div className="flex-1 mb-6 md:mb-0 md:mr-6 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-semibold mb-4">
                {activeSkill.title}
              </h3>
              <p className="text-lg md:text-xl">{activeSkill.description}</p>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center">
              <Image
                src={activeSkill.imageUrl}
                alt={activeSkill.title}
                className="rounded-lg shadow-lg object-cover"
                width={300} // Set desired width
                height={300} // Set desired height
                priority // Optional: to load this image faster
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

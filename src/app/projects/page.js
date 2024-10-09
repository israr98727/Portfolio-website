"use client"; // Mark this file as a Client Component

import React, { useState, useRef } from "react"; // Import useState and useRef
import Image from "next/image";
import Link from "next/link"; // Import Link for routing
import Navbar from "../components/Navbar"; // Import Navbar component

// Main project details
const initialProject = {
  title: "Weather App",
  description:
    "A simple and responsive weather app built using React and a weather API. It allows users to check the weather for different cities and provides real-time data.",
  imageUrl: "/images/weather.png", // Replace with your main project image path
  projectUrl: "https://weather-umber-ten.vercel.app/", // URL for the Weather App
};

// Additional projects for thumbnails
const additionalProjects = [
  {
    id: 1,
    title: "Magma Clone",
    description: "A clone of the popular Magma web app built with React and modern web tools.",
    imageUrl: "/images/magma.jpeg", // Replace with your image path
    projectUrl: "https://example.com/magma-clone", // Add a valid URL
  },
  {
    id: 2,
    title: "Amazon Clone",
    description: "An eCommerce clone of Amazon with cart and user authentication functionality.",
    imageUrl: "/images/amazon.png", // Replace with your image path
    projectUrl: "https://example.com/amazon-clone", // Add a valid URL
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects.",
    imageUrl: "/images/portfolio.png", // Replace with your image path
    projectUrl: "https://example.com/portfolio-website", // Add a valid URL
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(initialProject); // State to manage the active project
  const mainProjectRef = useRef(null); // Reference to the main project section

  const scrollToMainProject = () => {
    mainProjectRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to main project section
  };

  const handleProjectClick = (project) => {
    setActiveProject({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      projectUrl: project.projectUrl, // Ensure projectUrl is included
    });
    scrollToMainProject(); // Scroll to main project section
  };

  return (
    <>
      <Navbar /> {/* Navbar component added */}
      <main className="min-h-screen py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-purple-800">
        <div className="container mx-auto text-center px-4 md:px-0">
          <h2 className="text-4xl font-bold mb-10 text-white">My Projects</h2>

          {/* Main Project Section */}
          <div
            ref={mainProjectRef}
            className="bg-white rounded-lg shadow-lg overflow-hidden mb-12 px-10 py-10 flex flex-col md:flex-row"
          >
            <div className="md:flex-1 p-4 md:p-0 rounded-md"> {/* Added padding here */}
              <Image
                src={activeProject.imageUrl}
                alt={activeProject.title}
                width={600} // Adjust width to match the container
                height={400} // Adjust height for better appearance
                className="object-cover rounded-md w-full h-64" // Active project image with rounded corners
              />
            </div>
            <div className="md:flex-1 p-6 flex flex-col justify-center">
              <h3 className="text-3xl font-semibold mb-4">{activeProject.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{activeProject.description}</p>
              {/* Dynamic Button Text to match the project title */}
              <Link href={activeProject.projectUrl} passHref>
                <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-md transition duration-300 hover:bg-gradient-to-l">
                  Visit {activeProject.title}
                </button>
              </Link>
            </div>
          </div>

          {/* Additional Projects Thumbnails */}
          <h3 className="text-2xl font-bold mb-6 text-white">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105"
              >
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  width={600} // Set a consistent width for thumbnail images
                  height={300} // Adjust height for consistency
                  className="object-cover w-full h-48" // Additional project images without rounded corners
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button
                    onClick={() => handleProjectClick(project)} // Set active project on click
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-md transition duration-300 hover:bg-gradient-to-l"
                  >
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;

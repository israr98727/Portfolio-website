import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">

        {/* Next.js Text */}
        <div className="text-white font-bold text-xl">
          <Link href="/">
            <span className={`bg-gradient-to-r from-purple-500 via-purple-800 to-blue-500 bg-clip-text px-8 p-[15px] rounded-full text-white group-hover:bg-clip-border group-hover:bg-white group-hover:text-white transition-all duration-500 ease-in-out`}>
              Next.js
            </span>
          </Link>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-2">
          {/* Link: Home */}
          <Link href="/" className="relative group text-white px-4 py-2 rounded-lg">
            <span className={`bg-gradient-to-r from-purple-500 via-purple-800 to-blue-500 bg-clip-text px-8 p-[15px] rounded-full text-white group-hover:bg-clip-border group-hover:bg-white group-hover:text-white transition-all duration-500 ease-in-out`}>
              Home
            </span>
          </Link>

          {/* Link: About */}
          <Link href="/skills" className="relative group text-white px-4 py-2 rounded-lg">
            <span className={`bg-gradient-to-r from-purple-500 via-purple-800 to-blue-500 bg-clip-text rounded-full text-white px-8 p-[15px] group-hover:bg-clip-border group-hover:bg-white group-hover:text-white transition-all duration-500 ease-in-out`}>
              Skills
            </span>
          </Link>

          {/* Link: Projects */}
          <Link href="/projects" className="relative group text-white px-4 py-2 rounded-lg">
            <span className={`bg-gradient-to-r from-purple-500 via-purple-800 to-blue-500 bg-clip-text px-8 p-[15px] rounded-full text-white group-hover:bg-clip-border group-hover:bg-white group-hover:text-white transition-all duration-500 ease-in-out`}>
              Projects
            </span>
          </Link>

          {/* Link: View Resume */}
          <Link href="/resume/israr ahmed.pdf" target="_blank" className="relative group text-white px-4 py-2 rounded-lg">
            <span className={`bg-gradient-to-r from-purple-500 via-purple-800 to-blue-500 bg-clip-text text-white p-[15px] rounded-full group-hover:bg-clip-border group-hover:bg-white group-hover:text-white transition-all duration-500 ease-in-out`}>
              View Resume
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleDropdown} className="text-white focus:outline-none transition-transform duration-300 ease-in-out transform hover:rotate-90">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 transition-all duration-300">
          <div className="py-2">
            <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition">
              Home
            </Link>
            <Link href="/skills" className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500transition">
              Skills
            </Link>
            <Link href="/projects" className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 transition">
              Projects
            </Link>
            {/* Mobile Link: View Resume */}
            <Link href="/resume/israr ahmed.pdf" target="_blank" className="block px-4 py-2 text-gray-800 hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full transition">
              View Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

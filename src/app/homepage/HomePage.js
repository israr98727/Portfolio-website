import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-gray-100 min-h-screen"> {/* Ensures full-screen height */}
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-800 text-white min-h-screen py-16 md:py-32 flex items-center"> {/* Full height for hero */}
        <div className="container mx-auto text-center flex flex-col md:flex-row items-center md:items-start">
          
          {/* Profile Image */}
          <div className="flex justify-center md:w-[50%] mb-4 md:mb-0">
            <Image
              src="/images/ISRAR_AHMED_PICTURE-removebg-preview.png" // Replace with the path to your image
              alt="Profile Picture"
              width={300}
              height={300}
              className="rounded-full object-cover shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col w-full md:w-[50%] justify-center items-center md:items-start mt-8 md:mt-0">
            <h1 className="text-3xl md:text-6xl font-bold mb-4 mx-5">
              Welcome to My Portfolio
            </h1>
            <p className="text-md md:text-2xl mb-8 mx-5">
              Hi, I’m Israr Ahmed, a passionate React Developer.
            </p>
            <div className="flex justify-center w-full"> {/* Centering container */}
              <a
                href="/projects"
                className="bg-white text-purple-500 w-[60%] md:w-[20vw] py-4 text-center rounded-full font-semibold hover:bg-gray-200 transition duration-300"
              >
                View My Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

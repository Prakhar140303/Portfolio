// import React from "react";

const projects = [
  {
    name: "RelayWire",
    description: "Web application for sending and receiving messages.",
    image: "../assets/RelayWire.png",
    link: "https://relaywire.onrender.com",
  },
  {
    name: "Portfolio Website",
    description: "Responsive portfolio built with React and Tailwind.",
    image: "../assets/portfolio.png",
    link: "https://yourportfolio.com",
  },
  {
    name: "BingeShop",
    description: "Web application for buying and selling products.",
    image: "../assets/BingeShop.png",
    link: "https://github.com/Prakhar140303/BingeShop",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-10 px-4 bg-[#0E0701] text-white">
      <h2 className=" md:text-5xl text-3xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#1c1208] rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
              >
                Visit Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

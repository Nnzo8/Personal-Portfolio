function Projects() {
  return (
    // Projects section with dark background
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Section heading with gradient effect */}
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          My Projects
        </h2>
        {/* Responsive grid for project cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through projects to create cards */}
          {[1, 2, 3].map((project) => (
            // Individual project card with hover animation
            <div key={project} className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              {/* Project image placeholder */}
              <div className="h-48 bg-gray-700"></div>
              {/* Project details */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                <p className="text-gray-400 mb-4">A brief description of your amazing project goes here.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

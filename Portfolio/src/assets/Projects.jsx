function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add your project cards here */}
          <div className="border rounded-lg p-4 shadow-md">
            <h3 className="text-xl font-bold mb-2">Project 1</h3>
            <p className="text-gray-600">Project description goes here</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

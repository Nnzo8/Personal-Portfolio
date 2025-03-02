function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
      {/* Content container with animation */}
      <div className="text-center space-y-8 animate-fadeIn">
        {/* Main heading with gradient text effect */}
        <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Hi, I am Nino Rollane D. Ocliasa
        </h1>
        {/* Subtitle/role description */}
        <p className="text-2xl text-gray-300">Fullstack Developer | UI/UX Designer</p>
      </div>
    </section>
  );
}

export default Home;
function CV() {
  return (
    <section id="cv" className="py-20 bg-gray-800 text-white min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header with gradient text */}
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Curriculum Vitae
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="md:col-span-1">
            <div className="bg-gray-900 rounded-xl p-6">
              {/* Profile Image */}
              <img 
                src="/ninz.jpg" 
                alt="Profile" 
                className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-blue-500"
              />
              
              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-blue-400 h-fit">Contact</h3>
                <div className="text-gray-300 space-y-2 break-words">
                  <p>📧 ninorollaneocliasa684@gmail.com</p>
                  <p>📱 +63 999 496 9871</p>
                  <p>📍 Your Location</p>
                </div>

                {/* Skills Section */}
                <h3 className="text-xl font-bold text-blue-400 pt-4">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "JavaScript", "HTML", "CSS", "Tailwind", "Node.js"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="md:col-span-2 space-y-6">
            {/* Experience Section */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Experience</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold">Position Title</h4>
                  <p className="text-blue-400">Company Name</p>
                  <p className="text-gray-400">2022 - Present</p>
                  <p className="text-gray-300 mt-2">Description of your role and achievements</p>
                </div>
                {/* Add more experience items as needed */}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Education</h3>
              <div>
              <h3 className="text-xl font-semibold">Elementary Education</h3> 
                <p className="text-blue-400">Lahug Elementary School</p>
                <p className="text-gray-400">2010 - 2016</p>
                <br></br>
              <h3 className="text-xl font-semibold">Highschool Education</h3>
                <p className="text-blue-400">Abellana National School</p>
                <p className="text-gray-400">2016 - 2020</p>
                <br></br>
              <h3 className="text-xl font-semibold">Senior Highschool Education</h3>
                <p className="text-blue-400">University of Cebu METC</p>
                <p className="text-gray-400">2020 - 2022</p>
                <br></br>
              <h3 className="text-xl font-semibold">College Education</h3>
                <h4 className="text-xl font-semibold">Bachelor of Science in Information Technology</h4>
                <p className="text-blue-400">University of Cebu</p>
                <p className="text-gray-400">2022 - 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;
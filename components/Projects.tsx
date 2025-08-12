import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Studio Bloom Portfolio",
      category: "Creative Agency",
      description: "A modern portfolio website that showcases creative work with smooth animations and excellent user experience.",
      image: "/assets/projects/creative-portfolio.svg",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      results: "40% increase in client inquiries"
    },
    {
      title: "Local Service Hub",
      category: "Service Business",
      description: "A comprehensive website for a local service provider with online booking and customer management.",
      image: "/assets/projects/local-service.svg",
      technologies: ["React", "Node.js", "MongoDB"],
      results: "60% reduction in phone calls"
    },
    {
      title: "Wellness Practice",
      category: "Healthcare",
      description: "A calming, professional website for a wellness practice with integrated appointment scheduling.",
      image: "/assets/projects/therapist-practice.svg",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      results: "35% increase in online bookings"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-headline mb-6">
            Recent Work
          </h2>
          <p className="section-description mx-auto">
            See how I've helped businesses transform their online presence and achieve real results.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 card-hover group">
              {/* Project Image */}
              <div className="h-48 bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-24 h-24 opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="text-sm text-blue-600 font-medium group-hover:text-blue-700 transition-colors">{project.category}</span>
                  <h3 className="text-xl font-bold text-[#1A2B4D] mt-2 group-hover:text-[#2A3B5D] transition-colors">{project.title}</h3>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed group-hover:text-gray-700 transition-colors">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Technologies used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full group-hover:bg-gray-200 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm text-gray-500">Results:</p>
                  <p className="text-green-600 font-semibold group-hover:text-green-700 transition-colors">{project.results}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to see similar results for your business?
          </p>
          <button className="btn-primary">
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { ExternalLink, Github, Code2 } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise CRM System',
      description: 'A comprehensive customer relationship management system built with OutSystems 11, featuring advanced reporting, automation workflows, and seamless integration with existing enterprise systems.',
      technologies: ['OutSystems 11', 'SQL Server', 'REST APIs', 'JavaScript'],
      category: 'Enterprise Application',
      status: 'Production',
      image: '/api/placeholder/400/250',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Supply Chain Management Platform',
      description: 'Modern supply chain management solution using OutSystems ODC with real-time tracking, inventory management, and predictive analytics for optimized operations.',
      technologies: ['OutSystems ODC', 'Azure', '.NET', 'Power BI'],
      category: 'Cloud Application',
      status: 'In Development',
      image: '/api/placeholder/400/250',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'Financial Analytics Dashboard',
      description: 'Real-time financial analytics and reporting dashboard with advanced data visualization, automated report generation, and compliance tracking features.',
      technologies: ['JavaScript', 'SQL', 'Chart.js', 'REST APIs'],
      category: 'Data Analytics',
      status: 'Production',
      image: '/api/placeholder/400/250',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      title: 'HR Management System',
      description: 'Comprehensive human resource management platform with employee onboarding, performance tracking, leave management, and automated workflow processes.',
      technologies: ['OutSystems 11', 'PostgreSQL', 'LDAP', 'Email APIs'],
      category: 'Enterprise Application',
      status: 'Production',
      image: '/api/placeholder/400/250',
      gradient: 'from-purple-500 to-pink-600'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing enterprise solutions that drive business transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card-hover bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
              {/* Project Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    project.status === 'Production' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-black'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="h-16 w-16 text-white/60" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Details
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <Github className="h-4 w-4 mr-2" />
                    Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Let's Build Something Amazing Together
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
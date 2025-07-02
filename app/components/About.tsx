import React from 'react'
import { Code, Database, Cloud, Zap } from 'lucide-react'

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expertise in OutSystems 11, ODC, JavaScript, and .NET for comprehensive solutions'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Skilled in SQL optimization and database architecture for enterprise applications'
    },
    {
      icon: Cloud,
      title: 'Cloud Technologies',
      description: 'Experience with AWS and Azure cloud platforms for scalable deployments'
    },
    {
      icon: Zap,
      title: 'Low-Code Solutions',
      description: 'Specialized in rapid development using OutSystems platform for enterprise needs'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A passionate developer dedicated to creating elegant, maintainable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Senior OutSystems Developer
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in building scalable, user-focused enterprise applications with a passion for 
              blending rapid low-code solutions with robust custom logic. My journey spans across multiple 
              technologies, always striving for elegant, maintainable code.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With extensive experience in OutSystems 11 and the new OutSystems Developer Cloud (ODC), 
              I create comprehensive full-stack solutions that meet enterprise demands while maintaining 
              high performance and scalability standards.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                Enterprise Applications
              </span>
              <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                Scalable Solutions
              </span>
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm font-medium">
                Low-Code Development
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="w-full h-full bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">VR</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Vijay R</h4>
                  <p className="text-gray-600 dark:text-gray-300">Senior Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div key={index} className="card-hover bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
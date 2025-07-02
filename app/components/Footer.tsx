import React from 'react'
import { Heart, Code, Coffee } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Vijay R</h3>
            <p className="text-gray-400 leading-relaxed">
              Senior OutSystems Developer passionate about creating scalable enterprise solutions 
              with modern technologies and best practices.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>and</span>
              <Code className="h-4 w-4 text-blue-500" />
              <span>and lots of</span>
              <Coffee className="h-4 w-4 text-yellow-600" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Technical Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['OutSystems', 'JavaScript', '.NET', 'SQL', 'AWS', 'Azure'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Always learning and exploring new technologies to stay at the forefront of development.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Vijay R. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="mailto:vijayr7.dev@gmail.com"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                vijayr7.dev@gmail.com
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-gray-400 text-sm">
                Available for Remote Work
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
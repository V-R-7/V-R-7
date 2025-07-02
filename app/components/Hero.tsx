'use client'

import React from 'react'
import { ChevronDown, Download, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-gray-900 dark:text-white">Hi, I'm</span>
              <span className="block gradient-text">Vijay R</span>
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 font-medium">
              Senior OutSystems Developer
            </p>
            
            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Passionate about building scalable, user-focused enterprise applications. 
              Specializing in low-code solutions with OutSystems 11 & ODC, JavaScript, SQL, .NET, and cloud technologies.
            </p>
          </div>

          <div className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
            
            <a
              href="/resume.pdf"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white hover:transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </div>

          <div className="animate-bounce-slow">
            <a
              href="#about"
              className="inline-flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span className="text-sm font-medium mb-2">Scroll to explore</span>
              <ChevronDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Low-Code Platforms',
      skills: [
        { name: 'OutSystems 11', level: 95, color: 'bg-red-500' },
        { name: 'OutSystems ODC', level: 90, color: 'bg-red-400' },
      ]
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: '.NET', level: 80, color: 'bg-blue-600' },
        { name: 'Core Java', level: 75, color: 'bg-orange-500' },
        { name: 'SQL', level: 88, color: 'bg-green-500' },
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 70, color: 'bg-orange-400' },
        { name: 'Azure', level: 68, color: 'bg-blue-500' },
        { name: 'BASH', level: 75, color: 'bg-gray-600' },
      ]
    },
    {
      title: 'Specializations',
      skills: [
        { name: 'Enterprise Applications', level: 92, color: 'bg-purple-500' },
        { name: 'Database Design', level: 85, color: 'bg-green-600' },
        { name: 'API Integration', level: 80, color: 'bg-indigo-500' },
        { name: 'Performance Optimization', level: 82, color: 'bg-pink-500' },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern enterprise solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
            </div>
            <div className="w-px h-12 bg-gray-300 dark:bg-gray-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
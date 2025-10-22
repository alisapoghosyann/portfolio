'use client'

import { motion } from 'framer-motion'
import { Card } from 'primereact/card'
import { Badge } from 'primereact/badge'
import { Timeline } from 'primereact/timeline'
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { client, Experience } from '@/lib/sanity'

const Experience = () => {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const experiencesData = await client.fetch('*[_type == "experience"] | order(order asc)')
        setExperiences(experiencesData)
      } catch (error) {
        console.error('Error fetching experiences:', error)
        // Fallback to static data
        setExperiences([
          {
            title: 'Senior Frontend Developer',
            company: 'slfstrg.com',
            period: '2024 - Present',
            location: 'Remote',
            description: 'Leading frontend development initiatives for scalable e-commerce solutions using Shopify, implementing comprehensive testing strategies with Jest and E2E testing frameworks, and mentoring junior developers in modern React.js practices.',
            achievements: [
              'Built scalable, user-centric interfaces using modern JavaScript and Shopify tools, improving user engagement by 40%',
              'Developed and maintained frontend architecture with focus on performance optimization and responsive design',
              'Integrated and tested features with Jest and E2E automation frameworks including Cypress, reducing bug reports by 60%',
              'Collaborated cross-functionally in Agile teams to ensure high-quality deliverables and timely project completion',
              'Contributed to maintaining seamless CI/CD workflow for faster iteration and deployment processes',
              'Mentored 3 junior developers and contributed to comprehensive technical documentation',
              'Implemented responsive design principles and accessibility standards, achieving WCAG 2.1 AA compliance'
            ],
            technologies: ['Shopify', 'React.js', 'TypeScript', 'Jest', 'Cypress', 'E2E Testing', 'CI/CD', 'JavaScript', 'HTML5', 'CSS3', 'Agile', 'Mentoring'],
            featured: true
          },
          {
            title: 'Frontend Developer',
            company: 'Various Companies',
            period: '2021 - 2024',
            location: 'Remote',
            description: 'Developed and maintained responsive web applications using modern frontend technologies, integrated CMS platforms, and implemented comprehensive testing strategies.',
            achievements: [
              'Developed and maintained 15+ web applications using React.js, Next.js, and TypeScript',
              'Created interactive dashboards with charts using Recharts and Chart.js, built data tables with React Table',
              'Managed application state with Redux and Zustand, integrated 20+ third-party APIs',
              'Utilized React Query for data caching and performed form management with Formik and React Hook Form',
              'Designed user interfaces using Tailwind CSS, Material UI, Chakra UI, Bootstrap, and PrimeReact',
              'Implemented real-time messaging functionalities using GetStream for 5+ applications',
              'Integrated CMS platforms including Sanity, WordPress, Directus, and Shopify for content management',
              'Implemented comprehensive testing strategies using Jest and Cypress, achieving 90%+ test coverage',
              'Worked in Agile teams and utilized project management tools like Trello, Jira, and ClickUp',
              'Familiar with backend development using PHP and Laravel for full-stack solutions'
            ],
            technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Node.js', 'Sanity', 'WordPress', 'Directus', 'Shopify', 'Jest', 'Cypress', 'GetStream', 'Agile'],
            featured: false
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchExperiences()
  }, [])

  if (loading) {
    return (
      <section id="experience" className="py-16 sm:py-20 px-3 sm:px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading experience...</p>
        </div>
      </section>
    )
  }

  const timelineEvents = experiences.map((exp, index) => ({
    status: 'success',
    date: exp.period,
    icon: 'pi pi-briefcase',
    color: '#8b5cf6',
    template: (item: any, index: number) => (
      <motion.div
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <Card className="p-4 sm:p-6 card-hover border-0 shadow-lg bg-white dark:bg-gray-800 ml-0 sm:ml-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {exp.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-gray-600 dark:text-gray-400 mb-2">
                <div className="flex items-center space-x-2">
                  <Briefcase size={16} />
                  <span className="font-medium">{exp.company}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>{exp.location}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <Calendar size={16} className="text-primary-500" />
                <Badge
                  value={exp.period}
                  className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 h-8 flex items-center justify-center"
                />
              </div>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {exp.description}
          </p>

          <div className="space-y-3 mb-6">
            <h4 className="font-semibold text-gray-800 dark:text-gray-200">
              Key Achievements:
            </h4>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <CheckCircle size={16} className="text-green-500 mt-1 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
              Technologies:
            </h4>
            <div className="flex flex-wrap gap-1 sm:gap-2">
              {exp.technologies.map((tech) => (
                <Badge
                  key={tech}
                  value={tech}
                  className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs sm:text-sm"
                />
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    )
  }))

  return (
    <section id="experience" className="py-16 sm:py-20 px-3 sm:px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Work Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Building innovative solutions and delivering exceptional results
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Mobile: Simple stacked layout */}
          <div className="md:hidden space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-3 sm:p-4 card-hover border-0 shadow-lg bg-white dark:bg-gray-800">
                  <div className="flex flex-col space-y-3 mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex w-6 h-6 sm:w-8 sm:h-8 items-center justify-center text-white rounded-full bg-primary-500 shadow-lg flex-shrink-0">
                        <Briefcase size={12} className="sm:w-4 sm:h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-gray-800 dark:text-gray-200 leading-tight">
                          {exp.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <span className="font-medium">{exp.company}</span>
                          <span className="hidden sm:inline">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1">
                        <Badge
                          value={exp.period}
                          className="bg-transparent text-gray-700 dark:text-gray-300 text-xs font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {exp.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 3).map((achievement, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle size={14} className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-xs">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {exp.technologies.slice(0, 6).map((tech) => (
                        <Badge
                          key={tech}
                          value={tech}
                          className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 text-xs px-2 py-1"
                        />
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Desktop: Timeline layout */}
          <div className="hidden md:block">
            <Timeline
              value={timelineEvents}
              align="alternate"
              className="customized-timeline"
              marker={(item) => (
                <div className="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 bg-primary-500 shadow-lg">
                  <Briefcase size={16} />
                </div>
              )}
              content={(item, index) => item.template(item, index)}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
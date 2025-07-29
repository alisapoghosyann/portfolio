'use client'

import { motion } from 'framer-motion'
import { Card } from 'primereact/card'
import { Badge } from 'primereact/badge'
import { Timeline } from 'primereact/timeline'
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'slfstrg.com',
      period: '2024 - Present',
      location: 'Remote',
      description:
        'slfstrg.com leverages their expertise as a Senior Frontend Developer to create scalable, user-friendly web interfaces using tools like Shopify, Jest, and E2E testing.',
      achievements: [
        'Built scalable, user-centric interfaces using modern JavaScript and Shopify tools',
        'Developed and maintained frontend architecture with a focus on performance and responsiveness',
        'Integrated and tested features with Jest and E2E automation frameworks',
        'Collaborated cross-functionally to ensure high-quality deliverables in Agile teams',
        'Contributed to maintaining a seamless CI/CD workflow for faster iteration',
        'Mentored junior developers and contributed to technical documentation'
      ],
      technologies: ['Shopify', 'React', 'TypeScript', 'Jest', 'E2E Testing', 'CI/CD']
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Various Companies',
      period: '2021 - 2024',
      location: 'Remote',
      description: 'Developed and maintained responsive web applications using modern frontend technologies.',
      achievements: [
        'Developed and maintained web applications using React.js, Next.js, and TypeScript',
        'Created dashboards with charts using Recharts and Chart.js, and built tables with React Table',
        'Managed state with Redux and Zustand, and integrated third-party APIs',
        'Utilized React Query for data caching and performed form management with Formik and React Hook Form',
        'Designed user interfaces using Tailwind CSS, Material UI, Chakra UI, Bootstrap, and PrimeReact',
        'Implemented messaging functionalities using GetStream',
        'Proficient in version control using Git, GitLab, Bitbucket, and GitHub',
        'Worked in Agile teams and utilized project management tools like Trello, Jira, and ClickUp',
        'Familiar with backend development using PHP and Laravel'
      ],
      technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Node.js']
    }
  ]

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
        <Card className="p-6 card-hover border-0 shadow-lg bg-white dark:bg-gray-800 ml-4">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                {exp.title}
              </h3>
              <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 mb-2">
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
            <div className="flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge
                  key={tech}
                  value={tech}
                  className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                />
              ))}
            </div>
          </div>
        </Card>
      </motion.div>
    )
  }))

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
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
    </section>
  )
}

export default Experience
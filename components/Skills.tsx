'use client'

import { motion } from 'framer-motion'
import { Card } from 'primereact/card'
import { Badge } from 'primereact/badge'
import { ProgressBar } from 'primereact/progressbar'
import {
  Code2,
  Database,
  Palette,
  BarChart3,
  FileText,
  GitBranch,
  Smartphone,
  Settings,
  Layers,
  Zap
} from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 size={24} />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'HTML/CSS', level: 95, description: 'Advanced markup and styling' },
        { name: 'JavaScript', level: 90, description: 'ES6+, Modern JS features' },
        { name: 'React.js', level: 95, description: 'Component-based architecture' },
        { name: 'Next.js', level: 88, description: 'Full-stack React framework' },
        { name: 'TypeScript', level: 85, description: 'Type-safe development' },
        { name: 'Sass/SCSS', level: 80, description: 'CSS preprocessing' }
      ]
    },
    {
      title: 'State Management',
      icon: <Database size={24} />,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Redux', level: 85, description: 'Predictable state container' },
        { name: 'Zustand', level: 80, description: 'Lightweight state management' },
        { name: 'React Query', level: 78, description: 'Server state management' }
      ]
    },
    {
      title: 'UI/UX Libraries',
      icon: <Palette size={24} />,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework' },
        { name: 'Material UI', level: 85, description: 'React component library' },
        { name: 'Chakra UI', level: 80, description: 'Modular component library' },
        { name: 'Bootstrap', level: 88, description: 'CSS framework' },
        { name: 'PrimeReact', level: 85, description: 'Rich set of UI components' }
      ]
    },
    {
      title: 'Data Visualization',
      icon: <BarChart3 size={24} />,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Recharts', level: 82, description: 'Composable charting library' },
        { name: 'Chart.js', level: 80, description: 'Canvas-based charts' }
      ]
    },
    {
      title: 'Form Management',
      icon: <FileText size={24} />,
      color: 'from-indigo-500 to-purple-500',
      skills: [
        { name: 'Formik', level: 85, description: 'Build forms without tears' },
        { name: 'React Hook Form', level: 88, description: 'Performant, flexible forms' }
      ]
    },
    {
      title: 'Version Control & Tools',
      icon: <GitBranch size={24} />,
      color: 'from-gray-500 to-gray-700',
      skills: [
        { name: 'Git', level: 90, description: 'Version control system' },
        { name: 'GitHub', level: 88, description: 'Code hosting platform' },
        { name: 'GitLab', level: 85, description: 'DevOps platform' },
        { name: 'Bitbucket', level: 80, description: 'Git repository management' }
      ]
    },
    {
      title: 'Project Management',
      icon: <Settings size={24} />,
      color: 'from-teal-500 to-cyan-500',
      skills: [
        { name: 'Trello', level: 85, description: 'Visual project management' },
        { name: 'Jira', level: 82, description: 'Agile project management' },
        { name: 'ClickUp', level: 80, description: 'All-in-one workspace' }
      ]
    },
    {
      title: 'Backend & APIs',
      icon: <Layers size={24} />,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'PHP', level: 70, description: 'Server-side scripting' },
        { name: 'Laravel', level: 68, description: 'PHP web framework' },
        { name: 'GetStream', level: 75, description: 'Chat and activity feeds' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full card-hover border-0 shadow-lg bg-white dark:bg-gray-800">
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                        <Badge
                          value={`${skill.level}%`}
                          className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 h-8 flex items-center justify-center"
                        />
                      </div>
                      <ProgressBar
                        value={skill.level}
                        className="h-2"
                        color={`hsl(${(skill.level / 100) * 120}, 70%, 50%)`}
                        showValue={false}
                      />
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white border-0 shadow-xl">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Zap size={32} />
              <h3 className="text-2xl font-bold">
                Always Learning, Always Growing
              </h3>
            </div>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              I&apos;m passionate about staying up-to-date with the latest technologies and best practices
              in frontend development. My goal is to continuously improve and deliver exceptional user experiences.
            </p>

          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
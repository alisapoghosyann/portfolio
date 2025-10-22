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
import { useEffect, useState } from 'react'
import { client, Skill, SkillCategory } from '@/lib/sanity'

const Skills = () => {
  const [skillCategories, setSkillCategories] = useState<SkillCategory[]>([])
  const [loading, setLoading] = useState(true)

  const categoryIcons: { [key: string]: JSX.Element } = {
    frontend: <Code2 size={24} />,
    state: <Database size={24} />,
    ui: <Palette size={24} />,
    data: <BarChart3 size={24} />,
    forms: <FileText size={24} />,
    tools: <GitBranch size={24} />,
    management: <Settings size={24} />,
    backend: <Layers size={24} />,
    cms: <Database size={24} />,
    testing: <Zap size={24} />
  }

  const categoryColors: { [key: string]: string } = {
    frontend: 'from-blue-500 to-cyan-500',
    state: 'from-green-500 to-emerald-500',
    ui: 'from-purple-500 to-pink-500',
    data: 'from-orange-500 to-red-500',
    forms: 'from-indigo-500 to-purple-500',
    tools: 'from-gray-500 to-gray-700',
    management: 'from-teal-500 to-cyan-500',
    backend: 'from-yellow-500 to-orange-500',
    cms: 'from-pink-500 to-rose-500',
    testing: 'from-emerald-500 to-teal-500'
  }

  const categoryTitles: { [key: string]: string } = {
    frontend: 'Frontend Development',
    state: 'State Management',
    ui: 'UI/UX Libraries',
    data: 'Data Visualization',
    forms: 'Form Management',
    tools: 'Version Control & Tools',
    management: 'Project Management',
    backend: 'Backend & APIs',
    cms: 'CMS Platforms',
    testing: 'Testing Frameworks'
  }

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const skillsData = await client.fetch('*[_type == "skill"] | order(order asc)')
        
        // Group skills by category
        const groupedSkills: { [key: string]: Skill[] } = {}
        skillsData.forEach((skill: Skill) => {
          if (!groupedSkills[skill.category]) {
            groupedSkills[skill.category] = []
          }
          groupedSkills[skill.category].push(skill)
        })

        // Create skill categories
        const categories: SkillCategory[] = Object.entries(groupedSkills).map(([category, skills]) => ({
          title: categoryTitles[category] || category,
          skills,
          icon: categoryIcons[category] || <Code2 size={24} />,
          color: categoryColors[category] || 'from-blue-500 to-cyan-500'
        }))

        setSkillCategories(categories)
      } catch (error) {
        console.error('Error fetching skills:', error)
        // Fallback to static data
        setSkillCategories([
          {
            title: 'Frontend Development',
            icon: <Code2 size={24} />,
            color: 'from-blue-500 to-cyan-500',
            skills: [
              { name: 'HTML/CSS', level: 95, description: 'Advanced markup and styling', category: 'frontend' },
              { name: 'JavaScript', level: 90, description: 'ES6+, Modern JS features', category: 'frontend' },
              { name: 'React.js', level: 95, description: 'Component-based architecture', category: 'frontend' },
              { name: 'Next.js', level: 88, description: 'Full-stack React framework', category: 'frontend' },
              { name: 'TypeScript', level: 85, description: 'Type-safe development', category: 'frontend' },
              { name: 'Sass/SCSS', level: 80, description: 'CSS preprocessing', category: 'frontend' }
            ]
          },
          {
            title: 'CMS Platforms',
            icon: <Database size={24} />,
            color: 'from-pink-500 to-rose-500',
            skills: [
              { name: 'Sanity', level: 85, description: 'Headless CMS platform', category: 'cms' },
              { name: 'WordPress', level: 80, description: 'Content management system', category: 'cms' },
              { name: 'Directus', level: 75, description: 'Open-source headless CMS', category: 'cms' },
              { name: 'Shopify', level: 88, description: 'E-commerce platform', category: 'cms' }
            ]
          },
          {
            title: 'Testing Frameworks',
            icon: <Zap size={24} />,
            color: 'from-emerald-500 to-teal-500',
            skills: [
              { name: 'Jest', level: 85, description: 'JavaScript testing framework', category: 'testing' },
              { name: 'Cypress', level: 82, description: 'End-to-end testing framework', category: 'testing' }
            ]
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [])

  if (loading) {
    return (
      <section id="skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading skills...</p>
        </div>
      </section>
    )
  }

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
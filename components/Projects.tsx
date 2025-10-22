'use client'

import { motion } from 'framer-motion'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { Badge } from 'primereact/badge'
import { ExternalLink, Github, Eye, Code } from 'lucide-react'
import { useEffect, useState } from 'react'
import { client, Project } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsData = await client.fetch('*[_type == "project"] | order(order asc)')
        setProjects(projectsData)
      } catch (error) {
        console.error('Error fetching projects:', error)
        // Fallback to static data
        setProjects([
          {
            title: 'Lawrence Harvey',
            description: 'A modern recruitment website created from scratch using React and Next.js. Features responsive design, smooth animations, and optimized performance.',
            technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
            liveUrl: 'https://lawrence-harvey.vercel.app/',
            githubUrl: 'https://github.com/alisapoghosyann/lawrence-harvey',
            featured: true,
            category: 'web'
          },
          {
            title: 'Kahunas.io',
            description: 'Comprehensive chat application with GetStream integration for coaches to contact clients. Features include audio/video recording, file attachments, emoji reactions, and more.',
            technologies: ['React', 'GetStream', 'WebRTC', 'Socket.io', 'Node.js'],
            liveUrl: 'https://kahunas.io/',
            githubUrl: 'https://github.com/alisapoghosyann/kahunas',
            featured: true,
            category: 'web'
          },
          {
            title: 'Website Dapp',
            description: 'Web3 application with MultiversX integration. Features QR code connectivity from mobile app, blockchain transactions, and decentralized functionality.',
            technologies: ['React', 'Web3', 'MultiversX', 'TypeScript', 'Ethers.js'],
            liveUrl: 'https://website-dapp.vercel.app/',
            githubUrl: 'https://github.com/alisapoghosyann/website-dapp',
            featured: false,
            category: 'web3'
          },
          {
            title: 'Nettyworth',
            description: 'Advanced Web3 project built from scratch featuring portfolio tracking, DeFi analytics, and comprehensive dashboard for cryptocurrency investments.',
            technologies: ['React', 'Next.js', 'Web3', 'Chart.js', 'TailwindCSS'],
            liveUrl: 'https://nettyworth.io/',
            githubUrl: 'https://github.com/alisapoghosyann/nettyworth',
            featured: false,
            category: 'web3'
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading projects...</p>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing my latest work and creative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={project.featured ? 'lg:col-span-2' : ''}
            >
              <Card className="overflow-hidden card-hover border-0 shadow-lg bg-white dark:bg-gray-800 h-full">
                <div className={`flex flex-col ${project.featured ? 'lg:flex-row' : ''} h-full`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden ${project.featured ? 'lg:w-1/2' : ''}`}>
                    <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 flex items-center justify-center">
                      <div className="text-center">
                        <Code size={48} className="mx-auto mb-4 text-primary-500" />
                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    {project.featured && (
                      <Badge
                        value="Featured"
                        className="absolute top-4 left-4 bg-secondary-500 text-white px-3"
                      />
                    )}
                  </div>

                  {/* Project Content */}
                  <div className={`p-4 sm:p-6 flex flex-col justify-between ${project.featured ? 'lg:w-1/2' : ''}`}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <Button
                            icon={<Eye size={16} />}
                            className="p-button-rounded p-button-text p-button-sm"
                            aria-label="View project"
                            onClick={() => window.open(project.liveUrl, '_blank')}
                          />
                          {project.githubUrl && (
                            <Button
                              icon={<Github size={16} />}
                              className="p-button-rounded p-button-text p-button-sm"
                              aria-label="View code"
                              onClick={() => window.open(project.githubUrl, '_blank')}
                            />
                          )}
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            value={tech}
                            className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-2 sm:px-3 h-6 sm:h-8 flex items-center justify-center text-xs sm:text-sm"
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4 mt-6">
                      <Button
                        label="Live Demo"
                        icon={<ExternalLink size={16} />}
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="bg-primary-600 border-primary-600 hover:bg-primary-700 text-white flex-1 px-3 py-1"
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white border-0 shadow-xl">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Want to see more projects?
              </h3>
              <p className="text-lg opacity-90">
                Check out my GitHub profile for additional projects and contributions
              </p>
              <Button
                label="View GitHub"
                icon={<Github size={18} />}
                className="bg-white text-primary-600 hover:bg-gray-100 border-0 mt-4 px-3 py-1"
                onClick={() => window.open('https://github.com/alisapoghosyann?tab=repositories', '_blank')}
              />
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
'use client'

import { motion } from 'framer-motion'
import { Card } from 'primereact/card'
import { ProgressBar } from 'primereact/progressbar'
import { Badge } from 'primereact/badge'
import { User, MapPin, Phone, Mail, Globe, Calendar } from 'lucide-react'
import { useEffect, useState } from 'react'
import { client, PersonalInfo, Education } from '@/lib/sanity'

const About = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null)
  const [education, setEducation] = useState<Education[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [personalInfoData, educationData] = await Promise.all([
          client.fetch('*[_type == "personalInfo"][0]'),
          client.fetch('*[_type == "education"] | order(order asc)')
        ])
        
        setPersonalInfo(personalInfoData)
        setEducation(educationData)
      } catch (error) {
        console.error('Error fetching data:', error)
        // Fallback to static data
        setPersonalInfo({
          name: 'Alisa Poghosyan',
          title: 'Senior Frontend Developer',
          email: 'alisapoghosyan858@gmail.com',
          phone: '(+374)-77-96-92-26',
          location: 'Armenia',
          summary: 'Experienced Frontend Developer with 4+ years of expertise in React.js, Next.js, TypeScript, and modern web technologies.',
          experience: '4+ Years',
          languages: [
            { name: 'English', level: 'Upper Intermediate', progress: 85 },
            { name: 'Russian', level: 'Pre Intermediate', progress: 60 },
            { name: 'Armenian', level: 'Native', progress: 100 }
          ],
          softSkills: ['Teamwork', 'Time Management', 'Responsibility', 'Discipline', 'Confidence', 'Resilience']
        })
        setEducation([
          {
            institution: 'National Polytechnic University of Armenia',
            degree: 'Bachelor of Applied Science (BASc)',
            period: '2018-2022',
            description: 'Comprehensive study of computer science fundamentals, software engineering principles, and modern development practices.'
          },
          {
            institution: 'Smart Code',
            degree: 'Frontend Development Certification',
            period: '2020-2021',
            description: 'Intensive program covering modern frontend technologies, responsive design, and best practices in web development.'
          }
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return (
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-500 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
        </div>
      </section>
    )
  }

  if (!personalInfo) return null

  const personalInfoItems = [
    { icon: <Phone size={18} />, label: 'Phone', value: personalInfo.phone },
    { icon: <Mail size={18} />, label: 'Email', value: personalInfo.email },
    { icon: <MapPin size={18} />, label: 'Location', value: personalInfo.location },
    { icon: <Calendar size={18} />, label: 'Experience', value: personalInfo.experience },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate about creating exceptional user experiences through clean code and innovative solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 card-hover border-0 shadow-lg bg-white dark:bg-gray-800">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Profile
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400">
                    {personalInfo.title}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {personalInfo.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfoItems.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="text-primary-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="font-medium text-gray-800 dark:text-gray-200 px-2 h-5 flex items-center justify-center">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Education */}
            <Card className="p-8 card-hover border-0 shadow-lg bg-white dark:bg-gray-800">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Education
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-6">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {edu.institution}
                      </h4>
                      <Badge value={edu.period} className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 h-8 flex items-center justify-center" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.degree}
                    </p>
                    {edu.description && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right Column - Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 card-hover border-0 shadow-lg bg-white dark:bg-gray-800 h-full">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Globe className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Languages
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Communication skills
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                {personalInfo.languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                        {lang.name}
                      </span>
                      <Badge 
                        value={lang.level} 
                        className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 px-3"
                      />
                    </div>
                    <ProgressBar 
                      value={lang.progress} 
                      className="h-3"
                      showValue={false}
                      color={`hsl(${(lang.progress / 100) * 120}, 70%, 50%)`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Soft Skills */}
              <div className="mt-12">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-6">
                  Soft Skills
                </h4>
                <div className="flex flex-wrap gap-3">
                  {personalInfo.softSkills.map((skill) => (
                    <Badge 
                      key={skill}
                      value={skill} 
                      className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 py-2 h-8 flex items-center justify-center"
                    />
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About

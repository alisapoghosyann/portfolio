'use client'

import { motion } from 'framer-motion'
import { Card } from 'primereact/card'
import { ProgressBar } from 'primereact/progressbar'
import { Badge } from 'primereact/badge'
import { User, MapPin, Phone, Mail, Globe, Calendar } from 'lucide-react'

const About = () => {
  const languages = [
    { name: 'English', level: 'Upper Intermediate', progress: 85 },
    { name: 'Russian', level: 'Pre Intermediate', progress: 60 },
    { name: 'Armenian', level: 'Native', progress: 100 },
  ]

  const personalInfo = [
    { icon: <Phone size={18} />, label: 'Phone', value: '(+374)-77-96-92-26' },
    { icon: <Mail size={18} />, label: 'Email', value: 'alisapoghosyan858@gmail.com' },
    { icon: <MapPin size={18} />, label: 'Location', value: 'Armenia' },
    { icon: <Calendar size={18} />, label: 'Experience', value: '4+ Years' },
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
                    Frontend Developer
                  </p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I am a skilled frontend developer with over 4 years of experience in building 
                and maintaining responsive web applications. I thrive in collaborative environments 
                and am dedicated to delivering high-quality, efficient solutions. My goal is to 
                secure a position where I can continue to grow my skills and contribute to 
                innovative projects.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((item, index) => (
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
                <div className="border-l-4 border-primary-500 pl-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      Smart Code
                    </h4>
                    <Badge value="2020-2021" className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 h-8 flex items-center justify-center" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    Learned HTML, CSS, JavaScript, and React through a course and self-study.
                  </p>
                </div>
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
                {languages.map((lang, index) => (
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
                  {['Teamwork', 'Time Management', 'Responsibility', 'Discipline', 'Confidence', 'Resilience'].map((skill) => (
                    <Badge 
                      key={skill}
                      value={skill} 
                      className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 h-8 flex items-center justify-center px-3 py-2"
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
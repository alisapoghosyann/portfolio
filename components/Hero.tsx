'use client'

import { motion } from 'framer-motion'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { Badge } from 'primereact/badge'
import { Github, Linkedin, Mail, Download, Code, Sparkles } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Alisa_Poghosyan_CV.pdf';
    link.setAttribute('download', 'Alisa_Poghosyan_CV.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com/alisapoghosyann?tab=repositories',
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alisa-poghosyan-015780225',
    },
    {
      icon: <Mail size={24} />,
      name: 'Email',
      url: 'mailto:alisapoghosyan858@gmail.com',
    }
  ]
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center space-x-2"
            >
              <Sparkles className="text-primary-500" size={24} />
              <span className="text-primary-600 dark:text-primary-400 font-semibold">
                Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl lg:text-7xl font-bold gradient-text leading-tight"
            >
              Alisa Poghosyan
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3"
            >
              <Code className="text-primary-500" size={24} />
              <span className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-medium">
                Frontend Developer
              </span>
              <Badge
                value="4+ Years"
                severity="info"
                className="bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 px-3 h-8 flex items-center justify-center"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
            >
              Skilled frontend developer with over 4 years of experience in building and maintaining
              responsive web applications. I thrive in collaborative environments and am dedicated to
              delivering high-quality, efficient solutions.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              label="Get In Touch"
              icon={<Mail size={18} className='mr-2' />}
              onClick={scrollToContact}
              className="bg-primary-600 border-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            />

            <Button
              label="Download CV"
              icon={<Download size={18} className='mr-2' />}
              onClick={downloadCV}
              severity="secondary"
              outlined
              className="border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex items-center space-x-6 pt-4"
          >
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                icon={link.icon}
                className="p-button-rounded p-button-text hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label={link.name}
                onClick={() => window.open(link.url, '_blank')}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Animated Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <Card className="p-8 glass border-0 shadow-2xl glow max-w-md">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center shadow-xl">
                  <span className="text-4xl font-bold text-white">AP</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Ready to Build Amazing Things
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Let&apos;s create something extraordinary together
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  <Badge value="React" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 h-5 px-2 flex justify-center items-center" />
                  <Badge value="Next.js" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 h-5 px-2 flex justify-center items-center" />
                  <Badge value="TypeScript" className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 h-5 px-2 flex justify-center items-center" />
                </div>
              </div>
            </Card>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-70"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-secondary-400 to-primary-400 rounded-full opacity-70"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
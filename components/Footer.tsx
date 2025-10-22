'use client'

import { motion } from 'framer-motion'
import { Button } from 'primereact/button'
import { Divider } from 'primereact/divider'
import { Github, Linkedin, Mail, Heart, Code, Coffee } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/alisapoghosyann?tab=repositories', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/alisa-poghosyan-015780225', label: 'LinkedIn' },
    { icon: <Mail size={20} />, url: 'mailto:alisapoghosyan858@gmail.com', label: 'Email' }
  ]

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold gradient-text">
              Alisa Poghosyan
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Frontend Developer passionate about creating exceptional user experiences 
              with modern web technologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <Button
                  key={link.label}
                  icon={link.icon}
                  className="p-button-rounded p-button-text text-gray-400 hover:text-white hover:bg-primary-600"
                  aria-label={link.label}
                  onClick={() => window.open(link.url, '_blank')}
                />
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Email: alisapoghosyan858@gmail.com</p>
              <p>Phone: (+374)-77-96-92-26</p>
              <p>Location: Armenia</p>
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold text-white">Built With</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                Next.js
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                React
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                TypeScript
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                Sanity
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                Tailwind CSS
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded-full text-gray-300">
                PrimeReact
              </span>
            </div>
          </motion.div>
        </div>

        <Divider className="my-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400"
        >
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>and</span>
            <Code size={16} className="text-primary-400" />
            <span>by Alisa Poghosyan</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Coffee size={16} />
            <span>© 2025 All rights reserved</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
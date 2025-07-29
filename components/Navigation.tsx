'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from 'primereact/button'
import { Sidebar } from 'primereact/sidebar'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const Navigation = () => {
  const [mounted, setMounted] = useState(false)
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setSidebarVisible(false)
  }

  if (!mounted) return null

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold gradient-text cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              Alisa Poghosyan
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.label}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </motion.button>
              ))}
              
              <Button
                icon={theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-button-rounded p-button-text"
                aria-label="Toggle theme"
              />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                icon={theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-button-rounded p-button-text"
                aria-label="Toggle theme"
              />
              <Button
                icon={<Menu size={24} />}
                onClick={() => setSidebarVisible(true)}
                className="p-button-rounded p-button-text"
                aria-label="Open menu"
              />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Sidebar */}
      <Sidebar
        visible={sidebarVisible}
        position="right"
        onHide={() => setSidebarVisible(false)}
        className="w-80"
        header={
          <div className="flex justify-between items-center w-full">
            <span className="text-xl font-bold gradient-text">Menu</span>
          </div>
        }
      >
        <div className="flex flex-col space-y-4 pt-8">
          {navItems.map((item, index) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => scrollToSection(item.href)}
              className="text-left text-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </Sidebar>
    </>
  )
}

export default Navigation
'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from 'primereact/button'
import { ChevronUp } from 'lucide-react'

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Button
            icon={<ChevronUp size={20} />}
            onClick={scrollToTop}
            className="p-button-rounded w-12 h-12 bg-primary-600 border-primary-600 hover:bg-primary-700 text-white shadow-lg glow"
            aria-label="Back to top"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default BackToTop
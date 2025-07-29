'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
import { Toast } from 'primereact/toast'
import { useRef } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const toast = useRef<Toast>(null)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const result = await emailjs.send(
        'service_02tazdg',
        'template_lvxomci',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'gV0hmMwWmqm2FKzpA'
      )

      toast.current?.show({
        severity: 'success',
        summary: 'Message Sent!',
        detail: 'Thank you for your message. I&apos;ll get back to you soon!',
        life: 5000
      })

      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Email error:', error)
      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: 'Something went wrong. Please try again later.',
        life: 5000
      })
    } finally {
      setLoading(false)
    }
  }


  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'alisapoghosyan858@gmail.com',
      action: () => window.open('mailto:alisapoghosyan858@gmail.com', '_blank')
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '(+374)-77-96-92-26',
      action: () => window.open('tel:+37477969226', '_blank')
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Armenia',
      action: null
    },
    {
      icon: <Clock size={24} />,
      title: 'Response Time',
      value: 'Within 24 hours',
      action: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: <Linkedin size={24} />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alisa-poghosyan-015780225',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Mail size={24} />,
      name: 'Email',
      url: 'mailto:alisapoghosyan858@gmail.com',
      color: 'hover:text-red-600'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <Toast ref={toast} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-4">
            Let&apos;s Work Together
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to start your next project? Let&apos;s discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-8 border-0 shadow-lg bg-white dark:bg-gray-800">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Get in Touch
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    I&apos;m always excited to discuss new opportunities
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center space-x-4 p-4 rounded-lg transition-colors duration-200 ${info.action
                      ? 'hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer'
                      : ''
                      }`}
                    onClick={info.action || undefined}
                  >
                    <div className="text-primary-500">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        {info.title}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">
                  Follow Me
                </h4>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      icon={link.icon}
                      className={`p-button-rounded p-button-text ${link.color}`}
                      aria-label={link.name}
                      onClick={() => window.open(link.url, '_blank')}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 border-0 shadow-lg bg-white dark:bg-gray-800">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Send className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                    Send Message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Drop me a line and I&apos;ll respond quickly
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Name *
                    </label>
                    <InputText
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Your name"
                      required
                      className="w-full px-4 py-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email *
                    </label>
                    <InputText
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4 py-2"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Subject *
                  </label>
                  <InputText
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="What&apos;s this about?"
                    required
                    className="w-full px-4 py-2"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message *
                  </label>
                  <InputTextarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="w-full px-4 py-2"
                  />
                </div>

                <Button
                  type="submit"
                  label={loading ? "Sending..." : "Send Message"}
                  loading={loading}
                  className="w-full bg-primary-600 border-primary-600 hover:bg-primary-700 text-white py-3 font-semibold"
                />
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

'use client'

import { motion } from 'framer-motion'
import { Button } from 'primereact/button'
import { Download, FileText } from 'lucide-react'
import { cvContent } from '@/lib/cv-content'

const CVDownload = () => {
  const handleDownloadCV = () => {
    // Create a new window with CV content for printing/downloading
    const cvWindow = window.open('', '_blank')
    if (cvWindow) {
      cvWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Alisa Poghosyan - CV</title>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              margin: 0;
              padding: 20px;
              color: #333;
              background: white;
            }
            .header {
              text-align: center;
              border-bottom: 3px solid #8b5cf6;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .name {
              font-size: 32px;
              font-weight: bold;
              color: #8b5cf6;
              margin-bottom: 5px;
            }
            .title {
              font-size: 18px;
              color: #666;
              margin-bottom: 15px;
            }
            .contact {
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              gap: 20px;
              font-size: 14px;
            }
            .section {
              margin-bottom: 25px;
            }
            .section-title {
              font-size: 20px;
              font-weight: bold;
              color: #8b5cf6;
              border-bottom: 2px solid #e5e7eb;
              padding-bottom: 5px;
              margin-bottom: 15px;
            }
            .summary {
              text-align: justify;
              font-size: 14px;
              line-height: 1.7;
            }
            .skills-grid {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 20px;
            }
            .skill-category {
              margin-bottom: 15px;
            }
            .skill-category-title {
              font-weight: bold;
              color: #374151;
              margin-bottom: 8px;
            }
            .skill-list {
              display: flex;
              flex-wrap: wrap;
              gap: 5px;
            }
            .skill-item {
              background: #f3f4f6;
              padding: 3px 8px;
              border-radius: 4px;
              font-size: 12px;
            }
            .experience-item, .project-item {
              margin-bottom: 20px;
              padding-bottom: 15px;
              border-bottom: 1px solid #e5e7eb;
            }
            .job-title {
              font-weight: bold;
              font-size: 16px;
              color: #374151;
            }
            .company {
              font-weight: bold;
              color: #8b5cf6;
            }
            .period {
              color: #666;
              font-style: italic;
            }
            .achievements {
              margin-top: 10px;
            }
            .achievements ul {
              margin: 5px 0;
              padding-left: 20px;
            }
            .achievements li {
              margin-bottom: 3px;
              font-size: 13px;
            }
            .technologies {
              margin-top: 10px;
            }
            .tech-list {
              display: flex;
              flex-wrap: wrap;
              gap: 5px;
            }
            .tech-item {
              background: #8b5cf6;
              color: white;
              padding: 2px 6px;
              border-radius: 3px;
              font-size: 11px;
            }
            .education-item {
              margin-bottom: 15px;
            }
            .institution {
              font-weight: bold;
              color: #374151;
            }
            .degree {
              color: #8b5cf6;
            }
            .languages {
              display: flex;
              gap: 20px;
              flex-wrap: wrap;
            }
            .language-item {
              text-align: center;
            }
            .language-name {
              font-weight: bold;
            }
            .language-level {
              color: #666;
              font-size: 12px;
            }
            @media print {
              body { margin: 0; padding: 15px; }
              .section { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="name">${cvContent.header.name}</div>
            <div class="title">${cvContent.header.title}</div>
            <div class="contact">
              <span>📧 ${cvContent.header.contact.email}</span>
              <span>📱 ${cvContent.header.contact.phone}</span>
              <span>📍 ${cvContent.header.contact.location}</span>
              <span>🔗 ${cvContent.header.contact.linkedin}</span>
              <span>💻 ${cvContent.header.contact.github}</span>
            </div>
          </div>

          <div class="section">
            <div class="section-title">Professional Summary</div>
            <div class="summary">${cvContent.summary}</div>
          </div>

          <div class="section">
            <div class="section-title">Technical Skills</div>
            <div class="skills-grid">
              ${Object.entries(cvContent.technicalSkills).map(([category, skills]) => `
                <div class="skill-category">
                  <div class="skill-category-title">${category}</div>
                  <div class="skill-list">
                    ${skills.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="section">
            <div class="section-title">Professional Experience</div>
            ${cvContent.professionalExperience.map(exp => `
              <div class="experience-item">
                <div class="job-title">${exp.title}</div>
                <div class="company">${exp.company}</div>
                <div class="period">${exp.period} | ${exp.location}</div>
                <div style="margin-top: 8px; font-size: 14px;">${exp.description}</div>
                <div class="achievements">
                  <strong>Key Achievements:</strong>
                  <ul>
                    ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                  </ul>
                </div>
                <div class="technologies">
                  <strong>Technologies:</strong>
                  <div class="tech-list">
                    ${exp.technologies.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <div class="section-title">Featured Projects</div>
            ${cvContent.projects.map(project => `
              <div class="project-item">
                <div class="job-title">${project.title}</div>
                <div style="margin-top: 5px; font-size: 14px;">${project.description}</div>
                <div style="margin-top: 5px; font-size: 12px; color: #666;">${project.impact}</div>
                <div class="technologies" style="margin-top: 8px;">
                  <strong>Technologies:</strong>
                  <div class="tech-list">
                    ${project.technologies.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
                  </div>
                </div>
                <div style="margin-top: 5px; font-size: 12px;">
                  <strong>URL:</strong> ${project.url}
                </div>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <div class="section-title">Education</div>
            ${cvContent.education.map(edu => `
              <div class="education-item">
                <div class="institution">${edu.institution}</div>
                <div class="degree">${edu.degree}</div>
                <div class="period">${edu.period}</div>
                <div style="margin-top: 5px; font-size: 13px;">${edu.description}</div>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <div class="section-title">Languages</div>
            <div class="languages">
              ${cvContent.languages.map(lang => `
                <div class="language-item">
                  <div class="language-name">${lang.name}</div>
                  <div class="language-level">${lang.level}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="section">
            <div class="section-title">Soft Skills</div>
            <div class="skill-list">
              ${cvContent.softSkills.map(skill => `<span class="skill-item">${skill}</span>`).join('')}
            </div>
          </div>

          <script>
            window.onload = function() {
              window.print();
            }
          </script>
        </body>
        </html>
      `)
      cvWindow.document.close()
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <Button
        label="Download CV"
        icon={<Download size={18} />}
        onClick={handleDownloadCV}
        className="bg-primary-600 border-primary-600 hover:bg-primary-700 text-white px-6 py-3 text-lg font-semibold"
        size="large"
      />
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
        ATS-optimized CV with latest experience and skills
      </p>
    </motion.div>
  )
}

export default CVDownload


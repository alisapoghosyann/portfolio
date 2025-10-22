import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'apxq2v89',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export const urlFor = (source: any) => builder.image(source)

// Types for our data
export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  summary: string
  experience: string
  languages: Array<{
    name: string
    level: string
    progress: number
  }>
  softSkills: string[]
}

export interface Education {
  institution: string
  degree: string
  period: string
  description?: string
}

export interface Experience {
  title: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
  technologies: string[]
  featured: boolean
}

export interface Project {
  title: string
  description: string
  image?: any
  technologies: string[]
  liveUrl: string
  githubUrl?: string
  featured: boolean
  category: string
}

export interface Skill {
  name: string
  level: number
  description: string
  category: string
}

export interface SkillCategory {
  title: string
  skills: Skill[]
  icon: string
  color: string
}


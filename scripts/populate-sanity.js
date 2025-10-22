const { createClient } = require('@sanity/client')

const client = createClient({
  projectId: 'apxq2v89',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // You'll need to set this in your environment
})

// ATS-optimized data with relevant keywords
const personalInfoData = {
  _type: 'personalInfo',
  name: 'Alisa Poghosyan',
  title: 'Senior Frontend Developer',
  email: 'alisapoghosyan858@gmail.com',
  phone: '(+374)-77-96-92-26',
  location: 'Armenia',
  summary: 'Experienced Frontend Developer with 4+ years of expertise in React.js, Next.js, TypeScript, and modern web technologies. Proven track record of building scalable, responsive web applications and integrating CMS platforms including Sanity, WordPress, Directus, and Shopify. Skilled in testing frameworks like Cypress and Jest, with strong experience in Agile development methodologies and cross-functional team collaboration.',
  experience: '4+ Years',
  languages: [
    { name: 'English', level: 'Upper Intermediate', progress: 85 },
    { name: 'Russian', level: 'Pre Intermediate', progress: 60 },
    { name: 'Armenian', level: 'Native', progress: 100 }
  ],
  softSkills: ['Teamwork', 'Time Management', 'Responsibility', 'Discipline', 'Confidence', 'Resilience', 'Problem Solving', 'Communication', 'Adaptability', 'Leadership']
}

const educationData = [
  {
    _type: 'education',
    institution: 'National Polytechnic University of Armenia',
    degree: 'Bachelor of Applied Science (BASc)',
    period: '2018-2022',
    description: 'Comprehensive study of computer science fundamentals, software engineering principles, and modern development practices.',
    order: 0
  },
  {
    _type: 'education',
    institution: 'Smart Code',
    degree: 'Frontend Development Certification',
    period: '2020-2021',
    description: 'Intensive program covering modern frontend technologies, responsive design, and best practices in web development.',
    order: 1
  }
]

const experienceData = [
  {
    _type: 'experience',
    title: 'Senior Frontend Developer',
    company: 'slfstrg.com',
    period: '2024 - Present',
    location: 'Remote',
    description: 'Leading frontend development initiatives for scalable e-commerce solutions using Shopify, implementing comprehensive testing strategies with Jest and E2E testing frameworks, and mentoring junior developers in modern React.js practices.',
    achievements: [
      'Built scalable, user-centric interfaces using modern JavaScript and Shopify tools',
      'Developed and maintained frontend architecture with focus on performance and responsiveness',
      'Integrated and tested features with Jest and E2E automation frameworks including Cypress',
      'Collaborated cross-functionally to ensure high-quality deliverables in Agile teams',
      'Contributed to maintaining seamless CI/CD workflow for faster iteration',
      'Mentored junior developers and contributed to technical documentation',
      'Implemented responsive design principles and accessibility standards'
    ],
    technologies: ['Shopify', 'React.js', 'TypeScript', 'Jest', 'Cypress', 'E2E Testing', 'CI/CD', 'JavaScript', 'HTML5', 'CSS3'],
    featured: true,
    order: 0
  },
  {
    _type: 'experience',
    title: 'Frontend Developer',
    company: 'Various Companies',
    period: '2021 - 2024',
    location: 'Remote',
    description: 'Developed and maintained responsive web applications using modern frontend technologies, integrated CMS platforms, and implemented comprehensive testing strategies.',
    achievements: [
      'Developed and maintained web applications using React.js, Next.js, and TypeScript',
      'Created interactive dashboards with charts using Recharts and Chart.js, built data tables with React Table',
      'Managed application state with Redux and Zustand, integrated third-party APIs',
      'Utilized React Query for data caching and performed form management with Formik and React Hook Form',
      'Designed user interfaces using Tailwind CSS, Material UI, Chakra UI, Bootstrap, and PrimeReact',
      'Implemented real-time messaging functionalities using GetStream',
      'Proficient in version control using Git, GitLab, Bitbucket, and GitHub',
      'Worked in Agile teams and utilized project management tools like Trello, Jira, and ClickUp',
      'Integrated CMS platforms including Sanity, WordPress, Directus, and Shopify',
      'Implemented comprehensive testing strategies using Jest and Cypress',
      'Familiar with backend development using PHP and Laravel'
    ],
    technologies: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Node.js', 'Sanity', 'WordPress', 'Directus', 'Shopify', 'Jest', 'Cypress'],
    featured: false,
    order: 1
  }
]

const projectData = [
  {
    _type: 'project',
    title: 'Lawrence Harvey',
    description: 'A modern recruitment website created from scratch using React and Next.js. Features responsive design, smooth animations, optimized performance, and seamless user experience for job seekers and employers.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive Design'],
    liveUrl: 'https://lawrence-harvey.vercel.app/',
    githubUrl: 'https://github.com/alisapoghosyann/lawrence-harvey',
    featured: true,
    category: 'web',
    order: 0
  },
  {
    _type: 'project',
    title: 'Kahunas.io',
    description: 'Comprehensive chat application with GetStream integration for coaches to contact clients. Features include audio/video recording, file attachments, emoji reactions, real-time messaging, and advanced user management.',
    technologies: ['React', 'GetStream', 'WebRTC', 'Socket.io', 'Node.js', 'Real-time Communication'],
    liveUrl: 'https://kahunas.io/',
    githubUrl: 'https://github.com/alisapoghosyann/kahunas',
    featured: true,
    category: 'web',
    order: 1
  },
  {
    _type: 'project',
    title: 'Website Dapp',
    description: 'Web3 application with MultiversX integration. Features QR code connectivity from mobile app, blockchain transactions, decentralized functionality, and secure wallet integration.',
    technologies: ['React', 'Web3', 'MultiversX', 'TypeScript', 'Ethers.js', 'Blockchain'],
    liveUrl: 'https://website-dapp.vercel.app/',
    githubUrl: 'https://github.com/alisapoghosyann/website-dapp',
    featured: false,
    category: 'web3',
    order: 2
  },
  {
    _type: 'project',
    title: 'Nettyworth',
    description: 'Advanced Web3 project built from scratch featuring portfolio tracking, DeFi analytics, comprehensive dashboard for cryptocurrency investments, and real-time market data integration.',
    technologies: ['React', 'Next.js', 'Web3', 'Chart.js', 'TailwindCSS', 'DeFi'],
    liveUrl: 'https://nettyworth.io/',
    githubUrl: 'https://github.com/alisapoghosyann/nettyworth',
    featured: false,
    category: 'web3',
    order: 3
  }
]

const skillData = [
  // Frontend Development
  { _type: 'skill', name: 'HTML/CSS', level: 95, description: 'Advanced markup and styling', category: 'frontend', order: 0 },
  { _type: 'skill', name: 'JavaScript', level: 90, description: 'ES6+, Modern JS features', category: 'frontend', order: 1 },
  { _type: 'skill', name: 'React.js', level: 95, description: 'Component-based architecture', category: 'frontend', order: 2 },
  { _type: 'skill', name: 'Next.js', level: 88, description: 'Full-stack React framework', category: 'frontend', order: 3 },
  { _type: 'skill', name: 'TypeScript', level: 85, description: 'Type-safe development', category: 'frontend', order: 4 },
  { _type: 'skill', name: 'Sass/SCSS', level: 80, description: 'CSS preprocessing', category: 'frontend', order: 5 },
  
  // State Management
  { _type: 'skill', name: 'Redux', level: 85, description: 'Predictable state container', category: 'state', order: 0 },
  { _type: 'skill', name: 'Zustand', level: 80, description: 'Lightweight state management', category: 'state', order: 1 },
  { _type: 'skill', name: 'React Query', level: 78, description: 'Server state management', category: 'state', order: 2 },
  
  // UI/UX Libraries
  { _type: 'skill', name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework', category: 'ui', order: 0 },
  { _type: 'skill', name: 'Material UI', level: 85, description: 'React component library', category: 'ui', order: 1 },
  { _type: 'skill', name: 'Chakra UI', level: 80, description: 'Modular component library', category: 'ui', order: 2 },
  { _type: 'skill', name: 'Bootstrap', level: 88, description: 'CSS framework', category: 'ui', order: 3 },
  { _type: 'skill', name: 'PrimeReact', level: 85, description: 'Rich set of UI components', category: 'ui', order: 4 },
  
  // Data Visualization
  { _type: 'skill', name: 'Recharts', level: 82, description: 'Composable charting library', category: 'data', order: 0 },
  { _type: 'skill', name: 'Chart.js', level: 80, description: 'Canvas-based charts', category: 'data', order: 1 },
  
  // Form Management
  { _type: 'skill', name: 'Formik', level: 85, description: 'Build forms without tears', category: 'forms', order: 0 },
  { _type: 'skill', name: 'React Hook Form', level: 88, description: 'Performant, flexible forms', category: 'forms', order: 1 },
  
  // Version Control & Tools
  { _type: 'skill', name: 'Git', level: 90, description: 'Version control system', category: 'tools', order: 0 },
  { _type: 'skill', name: 'GitHub', level: 88, description: 'Code hosting platform', category: 'tools', order: 1 },
  { _type: 'skill', name: 'GitLab', level: 85, description: 'DevOps platform', category: 'tools', order: 2 },
  { _type: 'skill', name: 'Bitbucket', level: 80, description: 'Git repository management', category: 'tools', order: 3 },
  
  // Project Management
  { _type: 'skill', name: 'Trello', level: 85, description: 'Visual project management', category: 'management', order: 0 },
  { _type: 'skill', name: 'Jira', level: 82, description: 'Agile project management', category: 'management', order: 1 },
  { _type: 'skill', name: 'ClickUp', level: 80, description: 'All-in-one workspace', category: 'management', order: 2 },
  
  // Backend & APIs
  { _type: 'skill', name: 'PHP', level: 70, description: 'Server-side scripting', category: 'backend', order: 0 },
  { _type: 'skill', name: 'Laravel', level: 68, description: 'PHP web framework', category: 'backend', order: 1 },
  { _type: 'skill', name: 'GetStream', level: 75, description: 'Chat and activity feeds', category: 'backend', order: 2 },
  
  // CMS Platforms
  { _type: 'skill', name: 'Sanity', level: 85, description: 'Headless CMS platform', category: 'cms', order: 0 },
  { _type: 'skill', name: 'WordPress', level: 80, description: 'Content management system', category: 'cms', order: 1 },
  { _type: 'skill', name: 'Directus', level: 75, description: 'Open-source headless CMS', category: 'cms', order: 2 },
  { _type: 'skill', name: 'Shopify', level: 88, description: 'E-commerce platform', category: 'cms', order: 3 },
  
  // Testing Frameworks
  { _type: 'skill', name: 'Jest', level: 85, description: 'JavaScript testing framework', category: 'testing', order: 0 },
  { _type: 'skill', name: 'Cypress', level: 82, description: 'End-to-end testing framework', category: 'testing', order: 1 }
]

async function populateSanity() {
  try {
    console.log('Starting Sanity data population...')
    
    // Create personal info
    console.log('Creating personal information...')
    const personalInfo = await client.create(personalInfoData)
    console.log('Personal info created:', personalInfo._id)
    
    // Create education records
    console.log('Creating education records...')
    for (const education of educationData) {
      const result = await client.create(education)
      console.log('Education created:', result._id)
    }
    
    // Create experience records
    console.log('Creating experience records...')
    for (const experience of experienceData) {
      const result = await client.create(experience)
      console.log('Experience created:', result._id)
    }
    
    // Create project records
    console.log('Creating project records...')
    for (const project of projectData) {
      const result = await client.create(project)
      console.log('Project created:', result._id)
    }
    
    // Create skill records
    console.log('Creating skill records...')
    for (const skill of skillData) {
      const result = await client.create(skill)
      console.log('Skill created:', result._id)
    }
    
    console.log('✅ All data successfully populated to Sanity!')
    
  } catch (error) {
    console.error('❌ Error populating Sanity:', error)
  }
}

// Run the population script
if (require.main === module) {
  populateSanity()
}

module.exports = { populateSanity }


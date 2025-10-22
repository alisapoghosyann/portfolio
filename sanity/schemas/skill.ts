export default {
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'level',
      title: 'Proficiency Level (0-100)',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0).max(100)
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'category',
      title: 'Skill Category',
      type: 'string',
      options: {
        list: [
          { title: 'Frontend Development', value: 'frontend' },
          { title: 'State Management', value: 'state' },
          { title: 'UI/UX Libraries', value: 'ui' },
          { title: 'Data Visualization', value: 'data' },
          { title: 'Form Management', value: 'forms' },
          { title: 'Version Control & Tools', value: 'tools' },
          { title: 'Project Management', value: 'management' },
          { title: 'Backend & APIs', value: 'backend' },
          { title: 'CMS Platforms', value: 'cms' },
          { title: 'Testing Frameworks', value: 'testing' }
        ]
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule: any) => Rule.required().min(0)
    }
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }]
    }
  ]
}


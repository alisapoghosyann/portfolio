export default {
  name: 'personalInfo',
  title: 'Personal Information',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'title',
      title: 'Professional Title',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required().email()
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'summary',
      title: 'Professional Summary',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'experience',
      title: 'Years of Experience',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Language Name',
              type: 'string',
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'level',
              title: 'Proficiency Level',
              type: 'string',
              options: {
                list: [
                  { title: 'Native', value: 'Native' },
                  { title: 'Fluent', value: 'Fluent' },
                  { title: 'Advanced', value: 'Advanced' },
                  { title: 'Upper Intermediate', value: 'Upper Intermediate' },
                  { title: 'Intermediate', value: 'Intermediate' },
                  { title: 'Pre Intermediate', value: 'Pre Intermediate' },
                  { title: 'Beginner', value: 'Beginner' }
                ]
              },
              validation: (Rule: any) => Rule.required()
            },
            {
              name: 'progress',
              title: 'Progress Percentage',
              type: 'number',
              validation: (Rule: any) => Rule.required().min(0).max(100)
            }
          ]
        }
      ]
    },
    {
      name: 'softSkills',
      title: 'Soft Skills',
      type: 'array',
      of: [{ type: 'string' }]
    }
  ]
}

